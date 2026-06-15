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

function getCalificacion(prod) {
  const brandRatings = {
    'isdin': 4.9,
    'la roche-posay': 4.8,
    'eucerin': 4.8,
    'bioderma': 4.7,
    'cerave': 4.7,
    'vichy': 4.6,
    'avène': 4.6,
    'cosrx': 4.6,
    'skin1004': 4.5,
    'hada labo': 4.5,
    'some by mi': 4.4,
    'cetaphil': 4.4,
    'neutrogena': 4.2,
    'garnier': 4.1,
    'nivea': 4.0
  };
  const brand = (prod.marca || '').toLowerCase();
  return brandRatings[brand] || 4.5;
}

function generarRutina(perfil) {
  const codigoBaumann = determinarBaumann(perfil);
  
  // ── Filtro de presupuesto estricto basado en categorías ──
  const limitePrecio = perfil.presupuesto === 'bajo' ? 50 
                     : perfil.presupuesto === 'medio' ? 120 
                     : Infinity;

  // Filtrar productos compatibles con el tipo de piel Baumann o aptos para todos, Y bajo el límite de precio
  let candidatos = PRODUCTOS_CATALOGO.filter(p => 
    (p.apto_para_todos || (p.filtro_baumann && p.filtro_baumann.includes(codigoBaumann))) &&
    (p.precio < limitePrecio)
  );

  let rutina = [];
  let costoTotal = 0;
  let ingredientesUsados = new Set();
  
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
    let productosFase = candidatos.filter(p => p.fase === fase);
    
    // Fallback: si no hay productos bajo el presupuesto en esta fase, buscamos en todo el catálogo compatible para esa fase
    if (productosFase.length === 0) {
      productosFase = PRODUCTOS_CATALOGO.filter(p => p.fase === fase && (p.apto_para_todos || (p.filtro_baumann && p.filtro_baumann.includes(codigoBaumann))));
    }

    // Ordenar por relación calidad-precio (mayor calificacion/precio desc, luego mayor calificacion desc)
    productosFase.sort((a, b) => {
      const ratioA = getCalificacion(a) / (a.precio || 1);
      const ratioB = getCalificacion(b) / (b.precio || 1);
      if (Math.abs(ratioA - ratioB) < 0.0001) {
        return getCalificacion(b) - getCalificacion(a);
      }
      return ratioB - ratioA;
    });
    
    // Buscar uno que no genere incompatibilidad
    let seleccionado = null;
    for (const prod of productosFase) {
      if (!hasIncompatibility(prod.ingrediente_activo)) {
        seleccionado = prod;
        break;
      }
    }
    
    // Fallback: si todos son incompatibles (raro), forzamos el primero (que es el mejor calificado-precio)
    if (!seleccionado && productosFase.length > 0) {
        seleccionado = productosFase[0];
    }

    if (seleccionado) {
      // Clona el producto para no mutar el catálogo global
      const clonado = { ...seleccionado };
      clonado.categoria = fase === 1 ? 'limpieza' : 
                          fase === 5 ? 'proteccion_solar' : 
                          fase === 4 ? 'hidratacion' : 'tratamiento';
                               
      rutina.push(clonado);
      costoTotal += (clonado.precio || 0);
      if (clonado.ingrediente_activo) {
        ingredientesUsados.add(clonado.ingrediente_activo);
      }
    }
  }

  // ── Upsell: buscar producto compatible que NO esté en la rutina, precio < S/80 y que cumpla el presupuesto
  const idsEnRutina = new Set(rutina.map(p => p.id));
  const upsellCandidatos = PRODUCTOS_CATALOGO.filter(p =>
    !idsEnRutina.has(p.id) &&
    p.precio < 80 &&
    p.precio > 15 &&
    (p.apto_para_todos || (p.filtro_baumann && p.filtro_baumann.includes(codigoBaumann))) &&
    (p.precio < limitePrecio)
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
function analyzeFromLandmarks(landmarks, perfilUsuario) {
  if (!landmarks || landmarks.length < 468) {
    return {
      tipoPielDetectado: (perfilUsuario && perfilUsuario.tipoPiel) || 'normal',
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

  // ═══ 1. Dimensiones generales del rostro ═══
  const faceWidth = dist(234, 454);
  const faceHeight = dist(10, 152);
  const faceRatio = faceWidth / (faceHeight || 0.001);

  // ═══ 2. Zona T (frente + nariz) ═══
  const foreheadHeight = dist(10, 168);
  const noseLength = dist(168, 1);
  const zonaTLength = foreheadHeight + noseLength;
  const zonaTRatio = zonaTLength / (faceHeight || 0.001);

  // ═══ 3. Mejillas — contorno y asimetría ═══
  const centerX = landmarks[1].x;
  const cheekLeftDist = Math.abs(landmarks[234].x - centerX);
  const cheekRightDist = Math.abs(landmarks[454].x - centerX);
  const cheekAsymmetry = Math.abs(cheekLeftDist - cheekRightDist) / (faceWidth || 0.001);

  // ═══ 4. Zona periocular ═══
  const eyeOpenL = dist(159, 145);
  const eyeOpenR = dist(386, 374);
  const eyeAvg = (eyeOpenL + eyeOpenR) / 2;
  const eyeToFace = eyeAvg / (faceHeight || 0.001);

  // ═══ 5. Mandíbula — contorno ═══
  const jawWidth = dist(172, 397);
  const jawToFace = jawWidth / (faceWidth || 0.001);

  // ═══ 6. Simetría global ═══
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
  // 1. Probabilidades geométricas (landmarks 30%)
  const isZonaTWide = zonaTRatio > 0.52;
  const isFaceNarrow = faceRatio < 0.60;
  const isHighAsymmetry = cheekAsymmetry > 0.05;
  
  let landmarkProb = { normal: 0.2, grasa: 0.2, mixta: 0.2, seca: 0.2, sensible: 0.2 };
  if (isHighAsymmetry && eyeToFace < 0.03) {
    landmarkProb = { normal: 0.1, grasa: 0.1, mixta: 0.1, seca: 0.1, sensible: 0.6 };
  } else if (isZonaTWide) {
    landmarkProb = { normal: 0.1, grasa: 0.5, mixta: 0.35, seca: 0.05, sensible: 0 };
  } else if (isFaceNarrow && !isZonaTWide) {
    landmarkProb = { normal: 0.2, grasa: 0.05, mixta: 0.05, seca: 0.6, sensible: 0.1 };
  } else {
    landmarkProb = { normal: 0.6, grasa: 0.1, mixta: 0.15, seca: 0.1, sensible: 0.05 };
  }

  // 2. Probabilidades del cuestionario (70%)
  let questProb = { normal: 0.2, grasa: 0.2, mixta: 0.2, seca: 0.2, sensible: 0.2 };
  if (perfilUsuario) {
    let qScores = { normal: 0, grasa: 0, mixta: 0, seca: 0, sensible: 0 };
    let totalQuestionsAnswered = 0;

    const tipo = perfilUsuario.tipoPiel || perfilUsuario.tipoPielMañana;
    if (tipo) {
      if (tipo === 'grasa') qScores.grasa += 3;
      else if (tipo === 'mixta') qScores.mixta += 3;
      else if (tipo === 'seca') qScores.seca += 3;
      else if (tipo === 'sensible') qScores.sensible += 3;
      else if (tipo === 'normal') qScores.normal += 3;
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.brillo) {
      if (perfilUsuario.brillo === 'siempre') qScores.grasa += 2;
      else if (perfilUsuario.brillo === 'zona_t') qScores.mixta += 2;
      else if (perfilUsuario.brillo === 'raramente') { qScores.normal += 1; qScores.seca += 1; }
      else if (perfilUsuario.brillo === 'nunca') qScores.seca += 2;
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.poros) {
      if (perfilUsuario.poros === 'grandes') qScores.grasa += 2;
      else if (perfilUsuario.poros === 'zona_t') qScores.mixta += 2;
      else if (perfilUsuario.poros === 'pequenos') { qScores.seca += 1; qScores.normal += 1; }
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.textura) {
      if (perfilUsuario.textura === 'oleosa') qScores.grasa += 2;
      else if (perfilUsuario.textura === 'desigual') qScores.mixta += 2;
      else if (perfilUsuario.textura === 'aspera') qScores.seca += 2;
      else if (perfilUsuario.textura === 'suave') qScores.normal += 2;
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.sensibilidad_hoy) {
      if (perfilUsuario.sensibilidad_hoy === 'si') qScores.sensible += 3;
      else if (perfilUsuario.sensibilidad_hoy === 'un_poco') { qScores.sensible += 1.5; qScores.seca += 1; }
      else if (perfilUsuario.sensibilidad_hoy === 'no') qScores.normal += 1;
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.reaccion_productos) {
      if (perfilUsuario.reaccion_productos === 'siempre') qScores.sensible += 3;
      else if (perfilUsuario.reaccion_productos === 'a_veces') { qScores.sensible += 1; qScores.seca += 1; }
      else if (perfilUsuario.reaccion_productos === 'raramente') qScores.normal += 2;
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.rojez) {
      if (perfilUsuario.rojez === 'siempre') qScores.sensible += 3;
      else if (perfilUsuario.rojez === 'moderadamente') { qScores.sensible += 1.5; qScores.seca += 1; }
      else if (perfilUsuario.rojez === 'raramente') qScores.normal += 2;
      totalQuestionsAnswered++;
    }

    if (perfilUsuario.acne_historial) {
      if (perfilUsuario.acne_historial === 'siempre') { qScores.grasa += 2; qScores.sensible += 0.5; }
      else if (perfilUsuario.acne_historial === 'a_veces') qScores.mixta += 2;
      else if (perfilUsuario.acne_historial === 'nunca') { qScores.normal += 1.5; qScores.seca += 1; }
      totalQuestionsAnswered++;
    }

    if (totalQuestionsAnswered > 0) {
      const sum = qScores.normal + qScores.grasa + qScores.mixta + qScores.seca + qScores.sensible;
      if (sum > 0) {
        questProb = {
          normal: qScores.normal / sum,
          grasa: qScores.grasa / sum,
          mixta: qScores.mixta / sum,
          seca: qScores.seca / sum,
          sensible: qScores.sensible / sum
        };
      }
    }
  }

  // 3. Ponderación final (70% Cuestionario / 30% Landmarks)
  const weightQuest = perfilUsuario ? 0.7 : 0.0;
  const weightLand = perfilUsuario ? 0.3 : 1.0;

  const finalScore = {};
  const types = ['normal', 'grasa', 'mixta', 'seca', 'sensible'];
  types.forEach(t => {
    finalScore[t] = weightQuest * questProb[t] + weightLand * landmarkProb[t];
  });

  let tipoPielDetectado = 'normal';
  let maxScore = -1;
  types.forEach(t => {
    if (finalScore[t] > maxScore) {
      maxScore = finalScore[t];
      tipoPielDetectado = t;
    }
  });

  let zonasPreocupacion = [];
  if (tipoPielDetectado === 'sensible') {
    zonasPreocupacion = ['Contorno de ojos', 'Mejillas'];
  } else if (tipoPielDetectado === 'grasa') {
    zonasPreocupacion = ['Zona T (frente y nariz)', 'Frente'];
  } else if (tipoPielDetectado === 'seca') {
    zonasPreocupacion = ['Mejillas', 'Contorno de ojos'];
  } else if (tipoPielDetectado === 'mixta') {
    zonasPreocupacion = ['Zona T (frente y nariz)', 'Mejillas'];
  } else {
    zonasPreocupacion = ['Zona T (frente y nariz)'];
  }

  // ═══ MÉTRICAS DERIVADAS (determinísticas) ═══
  // Nivel de hidratación estimado
  let hidratBase = Math.round(50 + (jawToFace * 30) + (symScore > 85 ? 15 : 5));
  
  // Ajuste según respuestas del cuestionario
  if (perfilUsuario) {
    if (perfilUsuario.agua === 'poco') hidratBase -= 15;
    else if (perfilUsuario.agua === 'mucho') hidratBase += 15;
    
    if (perfilUsuario.clima === 'seco') hidratBase -= 10;
    else if (perfilUsuario.clima === 'humedo') hidratBase += 10;
  }
  const nivelHidratacion = Math.max(35, Math.min(95, hidratBase));

  const homogeneidadTono = symScore > 88 ? 'Alta' : symScore > 75 ? 'Media' : 'Baja';

  const lowerThird = dist(1, 152); // nariz a mentón
  const upperThird = dist(10, 168); // frente
  let subtono = (lowerThird / (upperThird || 0.001)) > 1.1 ? 'Cálido (Warm)' : 'Frío (Cool)';
  // Ajuste adicional por clima (el clima cálido/húmedo de Lima → Warm)
  if (perfilUsuario && perfilUsuario.clima === 'humedo') subtono = 'Cálido (Warm)';

  const lumiBase = Math.round(45 + (eyeToFace * 500) + (symScore * 0.25));
  const indiceLuminosidad = Math.max(40, Math.min(95, lumiBase));

  const recomendacionesClave = {
    grasa:    ['Control de sebo', 'Limpieza profunda 2x/día', 'Hidratación oil-free'],
    mixta:    ['Balance zona T/mejillas', 'Sérum regulador', 'Protección solar ligera'],
    seca:     ['Hidratación intensa', 'Evitar limpiadores espumosos', 'Barrera cutánea'],
    sensible: ['Fórmulas sin fragancia', 'Activos calmantes', 'Mínimo de pasos'],
    normal:   ['Mantenimiento preventivo', 'Antioxidantes', 'Hidratación diaria']
  }[tipoPielDetectado] || ['Hidratación diaria', 'Protección solar'];

  // ═══ NUEVAS MÉTRICAS BIOMÉTRICAS AVANZADAS ═══
  // 1. Forma del Rostro
  let formaRostro = 'Ovalado';
  if (faceRatio > 0.85) formaRostro = 'Redondo';
  else if (jawToFace > 0.75) formaRostro = 'Cuadrado';
  else if (jawToFace < 0.55 && zonaTRatio > 0.55) formaRostro = 'Corazón';

  // 2. Ojeras / Zona Periocular
  const eyeBagDepthL = dist(145, 236) / (faceHeight || 0.001);
  const eyeBagDepthR = dist(374, 456) / (faceHeight || 0.001);
  const avgEyeBag = (eyeBagDepthL + eyeBagDepthR) / 2;
  
  let profundidadOjeras = 'Leve';
  if (avgEyeBag > 0.16) profundidadOjeras = 'Alta';
  else if (avgEyeBag > 0.12) profundidadOjeras = 'Moderada';

  // 3. Nivel de Fatiga
  const fatigueScore = (avgEyeBag * 100) + ((100 - symScore) * 0.5) + ((0.05 - eyeToFace) * 200);
  let nivelFatiga = 'Bajo';
  if (fatigueScore > 35) nivelFatiga = 'Alto';
  else if (fatigueScore > 20) nivelFatiga = 'Medio';

  // 4. Vitalidad de la Piel (0-100)
  let vitalidadBase = (nivelHidratacion * 0.35) + (indiceLuminosidad * 0.35) + (symScore * 0.4) - (fatigueScore * 0.5);
  const vitalidadPiel = Math.max(30, Math.min(98, Math.round(vitalidadBase)));

  return {
    tipoPielDetectado,
    nivelHidratacion,
    homogeneidadTono,
    subtono,
    puntosAnalizados: landmarks.length,
    indiceLuminosidad,
    zonasPreocupacion,
    recomendacionesClave,
    formaRostro,
    vitalidadPiel,
    nivelFatiga,
    profundidadOjeras,
    metricas: {
      faceRatio: Math.round(faceRatio * 100) / 100,
      zonaTRatio: Math.round(zonaTRatio * 100) / 100,
      simetria: symScore,
      fatigueScore: Math.round(fatigueScore)
    }
  };
}
