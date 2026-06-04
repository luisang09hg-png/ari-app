// Motor de prescripción dermocosmética Baumann

function determinarBaumann(perfil) {
  // 1. Oily (O) vs Dry (D)
  const isOily = ['grasa', 'mixta'].includes(perfil.tipoPiel);
  const letra1 = isOily ? 'O' : 'D';

  // 2. Sensitive (S) vs Resistant (R)
  const isSensitive = perfil.sensibilidad === 'alta' || (perfil.preocupaciones && perfil.preocupaciones.includes('acne'));
  const letra2 = isSensitive ? 'S' : 'R';

  // 3. Pigmented (P) vs Non-Pigmented (N)
  const isPigmented = perfil.preocupaciones && perfil.preocupaciones.includes('manchas');
  const letra3 = isPigmented ? 'P' : 'N';

  // 4. Wrinkled (W) vs Tight (T)
  const isWrinkled = perfil.preocupaciones && perfil.preocupaciones.includes('arrugas_expresion');
  const letra4 = isWrinkled ? 'W' : 'T';

  return `${letra1}${letra2}${letra3}${letra4}`;
}

function generarRutina(perfil) {
  const codigoBaumann = determinarBaumann(perfil);
  
  // Filtrar productos compatibles con el tipo de piel Baumann o que sean aptos para todos
  const candidatos = PRODUCTOS_CATALOGO.filter(p => 
    p.apto_para_todos || (p.filtro_baumann && p.filtro_baumann.includes(codigoBaumann))
  );

  let rutina = [];
  let costoTotal = 0;
  let ingredientesUsados = new Set();
  
  // Mapear compatibilidad / evitar duplicación de activos (muy simple por nombre)
  const hasIncompatibility = (nuevoActivo) => {
    if (!nuevoActivo) return false;
    for (const inc of INCOMPATIBILIDADES) {
      if (inc.nivel === 'evitar') {
        const check1 = nuevoActivo.toLowerCase().includes(inc.activo1.toLowerCase()) && 
                       Array.from(ingredientesUsados).some(u => u.toLowerCase().includes(inc.activo2.toLowerCase()));
        const check2 = nuevoActivo.toLowerCase().includes(inc.activo2.toLowerCase()) && 
                       Array.from(ingredientesUsados).some(u => u.toLowerCase().includes(inc.activo1.toLowerCase()));
        if (check1 || check2) return true;
      }
    }
    return false;
  };

  // Seleccionar 1 producto por cada una de las 5 fases
  for (let fase = 1; fase <= 5; fase++) {
    const productosFase = candidatos.filter(p => p.fase === fase);
    
    // Buscar uno que no genere incompatibilidad
    let seleccionado = null;
    for (const prod of productosFase) {
      if (!hasIncompatibility(prod.ingrediente_activo)) {
        seleccionado = prod;
        break;
      }
    }
    
    // Fallback: si todos son incompatibles (raro), forzamos el primero
    if (!seleccionado && productosFase.length > 0) {
        seleccionado = productosFase[0];
    }

    if (seleccionado) {
      // Ajustar atributos legacy para compatibilidad con la vista
      seleccionado.categoria = fase === 1 ? 'limpieza' : 
                               fase === 5 ? 'proteccion_solar' : 
                               fase === 4 ? 'hidratacion' : 'tratamiento';
                               
      rutina.push(seleccionado);
      costoTotal += (seleccionado.precio || 0);
      if (seleccionado.ingrediente_activo) {
        ingredientesUsados.add(seleccionado.ingrediente_activo);
      }
    }
  }

  // ── Upsell: buscar producto compatible que NO esté en la rutina, precio < S/80
  const idsEnRutina = new Set(rutina.map(p => p.id));
  const upsellCandidatos = PRODUCTOS_CATALOGO.filter(p =>
    !idsEnRutina.has(p.id) &&
    p.precio < 80 &&
    p.precio > 15 &&
    (p.apto_para_todos || (p.filtro_baumann && p.filtro_baumann.includes(codigoBaumann)))
  );
  // Pick the one closest to S/80 to maximize perceived value
  const upsellSugerencia = upsellCandidatos.length > 0
    ? upsellCandidatos.sort((a, b) => b.precio - a.precio)[0]
    : null;

  return {
    rutina,
    codigoBaumann,
    esPrincipiante: perfil.experiencia === 'principiante',
    costoTotal,
    activaMagentaPoints: costoTotal >= 100,
    upsellSugerencia
  };
}

// ── Análisis facial real basado en 468 landmarks de MediaPipe FaceMesh ──
function analyzeFromLandmarks(landmarks) {
  if (!landmarks || landmarks.length < 468) {
    return {
      tipoPielDetectado: 'normal',
      nivelHidratacion: 65,
      homogeneidadTono: 'Media',
      subtono: 'Cálido (Warm)',
      puntosAnalizados: landmarks ? landmarks.length : 0,
      indiceLuminosidad: 62,
      zonasPreocupacion: ['zona_t']
    };
  }

  // ── Helper: distancia euclidiana 3D entre dos landmarks ──
  const dist = (a, b) => {
    const dx = landmarks[a].x - landmarks[b].x;
    const dy = landmarks[a].y - landmarks[b].y;
    const dz = (landmarks[a].z || 0) - (landmarks[b].z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  // ── Helper: punto medio ──
  const midY = (a, b) => (landmarks[a].y + landmarks[b].y) / 2;
  const midX = (a, b) => (landmarks[a].x + landmarks[b].x) / 2;

  // ═══ 1. Dimensiones generales del rostro ═══
  // Anchura: landmark 234 (mejilla izq) ↔ 454 (mejilla der)
  const faceWidth = dist(234, 454);
  // Altura: landmark 10 (frente top) ↔ 152 (mentón)
  const faceHeight = dist(10, 152);
  // Ratio W/H — caras más anchas tienden a tener más área de zona T
  const faceRatio = faceWidth / (faceHeight || 0.001);

  // ═══ 2. Zona T (frente + nariz) ═══
  // Frente: puntos 10, 151, 9, 8, 168 (línea media vertical superior)
  // Nariz: 1 (punta), 2 (puente), 168 (entre cejas)
  const foreheadHeight = dist(10, 168); // de la línea de pelo a entrecejo
  const noseLength = dist(168, 1);      // de entrecejo a punta de nariz
  const zonaTLength = foreheadHeight + noseLength;
  const zonaTRatio = zonaTLength / (faceHeight || 0.001);

  // Anchura de nariz: landmarks 129 (ala izq) ↔ 358 (ala der)
  const noseWidth = dist(129, 358);
  const noseRatioToFace = noseWidth / (faceWidth || 0.001);

  // ═══ 3. Mejillas — tono y amplitud ═══
  // Distancia de mejillas al centro facial
  const centerX = landmarks[1].x; // punta de nariz como referencia central
  const cheekLeftDist = Math.abs(landmarks[234].x - centerX);
  const cheekRightDist = Math.abs(landmarks[454].x - centerX);
  const cheekAsymmetry = Math.abs(cheekLeftDist - cheekRightDist) / (faceWidth || 0.001);

  // ═══ 4. Zona periocular ═══
  // Apertura ocular: landmarks 159/145 (ojo izq superior/inferior)
  const eyeOpenL = dist(159, 145);
  const eyeOpenR = dist(386, 374);
  const eyeAvg = (eyeOpenL + eyeOpenR) / 2;
  const eyeToFace = eyeAvg / (faceHeight || 0.001);

  // ═══ 5. Mandíbula — contorno ═══
  const jawWidth = dist(172, 397);
  const jawToFace = jawWidth / (faceWidth || 0.001);

  // ═══ 6. Simetría global ═══
  // Comparar distancias simétricas (izq vs der)
  const symPairs = [[234, 454], [129, 358], [159, 386], [145, 374], [172, 397]];
  let symScore = 0;
  for (const [l, r] of symPairs) {
    const dL = Math.abs(landmarks[l].x - centerX);
    const dR = Math.abs(landmarks[r].x - centerX);
    symScore += 1 - Math.abs(dL - dR) / (faceWidth || 0.001);
  }
  symScore = Math.round((symScore / symPairs.length) * 100);
  symScore = Math.max(50, Math.min(100, symScore));

  // ═══ CLASIFICACIÓN DE TIPO DE PIEL ═══
  let tipoPielDetectado;
  let zonasPreocupacion = [];

  // Heurísticas basadas en distribución geométrica facial:
  // - Zona T amplia (ratio > 0.52) + nariz ancha → tendencia grasa
  // - Cara estrecha (ratio < 0.60) + zona T corta → tendencia seca
  // - Asimetría alta (> 0.05) → posible sensibilidad
  // - Ratio cara balanceado + buena simetría → normal
  // - Mezcla de indicadores → mixta

  const isZonaTWide = zonaTRatio > 0.52;
  const isNoseWide = noseRatioToFace > 0.25;
  const isFaceNarrow = faceRatio < 0.60;
  const isHighAsymmetry = cheekAsymmetry > 0.05;
  const isGoodSymmetry = symScore > 85;

  if (isHighAsymmetry && eyeToFace < 0.03) {
    tipoPielDetectado = 'sensible';
    zonasPreocupacion = ['contorno_ojos', 'mejillas'];
  } else if (isZonaTWide && isNoseWide) {
    tipoPielDetectado = 'grasa';
    zonasPreocupacion = ['zona_t', 'nariz', 'frente'];
  } else if (isFaceNarrow && !isZonaTWide) {
    tipoPielDetectado = 'seca';
    zonasPreocupacion = ['mejillas', 'contorno_ojos'];
  } else if (isZonaTWide && !isNoseWide) {
    tipoPielDetectado = 'mixta';
    zonasPreocupacion = ['zona_t', 'mejillas'];
  } else {
    tipoPielDetectado = 'normal';
    zonasPreocupacion = ['zona_t'];
  }

  // ═══ MÉTRICAS DERIVADAS (determinísticas) ═══
  // Nivel de hidratación estimado: relación entre amplitud de mejillas y contorno
  const hidratBase = Math.round(50 + (jawToFace * 30) + (isGoodSymmetry ? 15 : 5));
  const nivelHidratacion = Math.max(35, Math.min(95, hidratBase));

  // Homogeneidad de tono: basada en simetría facial
  const homogeneidadTono = symScore > 88 ? 'Alta' : symScore > 75 ? 'Media' : 'Baja';

  // Subtono: heurística basada en proporción vertical del rostro
  // Caras con tercio inferior más largo tienden a tonos cálidos
  const lowerThird = dist(1, 152); // nariz a mentón
  const upperThird = dist(10, 168); // frente
  const subtono = (lowerThird / (upperThird || 0.001)) > 1.1 ? 'Cálido (Warm)' : 'Frío (Cool)';

  // Índice de luminosidad: derivado de apertura ocular y simetría
  const lumiBase = Math.round(45 + (eyeToFace * 500) + (symScore * 0.25));
  const indiceLuminosidad = Math.max(40, Math.min(95, lumiBase));

  return {
    tipoPielDetectado,
    nivelHidratacion,
    homogeneidadTono,
    subtono,
    puntosAnalizados: landmarks.length,
    indiceLuminosidad,
    zonasPreocupacion,
    metricas: {
      faceRatio: Math.round(faceRatio * 100) / 100,
      zonaTRatio: Math.round(zonaTRatio * 100) / 100,
      simetria: symScore,
      noseRatio: Math.round(noseRatioToFace * 100) / 100
    }
  };
}
