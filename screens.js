// screens.js - View Templates and Controllers

// ── Helper: determinar si un producto es AM, PM o AM/PM
function getRoutineTime(pasoRutina) {
  const s = (pasoRutina || '').toLowerCase();
  if (s.includes('am/pm') || s.includes('am y pm') || s.includes('am o pm') || s.includes('cualquier')) return 'AMPM';
  if (s.includes('(am)') || s.endsWith('am')) return 'AM';
  if (s.includes('(pm)') || s.endsWith('pm') || s.includes('nocturna') || s.includes('noche')) return 'PM';
  return 'AMPM'; // Default: ambos turnos
}

// ── Helper: emoji por paso de rutina
function getStepEmoji(pasoRutina) {
  const s = (pasoRutina || '').toLowerCase();
  if (s.includes('limpieza') || s.includes('limpiador')) return '🧼';
  if (s.includes('tónico') || s.includes('tonico') || s.includes('esencia')) return '💧';
  if (s.includes('tratamiento') || s.includes('sérum') || s.includes('serum')) return '✨';
  if (s.includes('hidratación') || s.includes('crema') || s.includes('hidrat')) return '🫧';
  if (s.includes('protección') || s.includes('solar') || s.includes('fps') || s.includes('spf')) return '☀️';
  if (s.includes('mascarilla') || s.includes('parche') || s.includes('mask')) return '🌙';
  if (s.includes('labios')) return '💋';
  if (s.includes('corporal')) return '🌺';
  if (s.includes('cabello')) return '💆';
  return '💄';
}

// ── Helper: imagen local o fallback
function getProductImgSrc(prod) {
  const localMap = {
    1: 'assets/products/p001.png',
    2: 'assets/products/p002.png',
    3: 'assets/products/p003.png',
    6: 'assets/products/p006.png',
    14: 'assets/products/p014.png',
    18: 'assets/products/p018.png',
  };
  return localMap[prod.id] || prod.imagen_url;
}

// ── Helper: compact product card HTML
function renderCompactCard(prod, context = '', stepIndex) {
  const imgSrc = getProductImgSrc(prod);
  const emoji  = getStepEmoji(prod.pasoRutina);
  const time   = getRoutineTime(prod.pasoRutina);
  const timeTag = time === 'AM'   ? '<span class="tag-am">☀️ AM</span>'
                : time === 'PM'   ? '<span class="tag-pm">🌙 PM</span>'
                :                   '<span class="tag-ampm">☀️🌙 AM/PM</span>';

  const stepTag = stepIndex !== undefined ? `<span style="background:var(--color-primary); color:white; font-size:0.7em; font-weight:700; padding:2px 8px; border-radius:10px; margin-right:6px; vertical-align:middle;">Paso ${stepIndex}</span>` : '';

  let modoUso = "Aplicar sobre el rostro limpio.";
  let advertencia = "Para uso externo únicamente.";
  if (prod.fase === 1) {
    modoUso = "Aplicar sobre rostro húmedo, masajear suavemente y enjuagar con abundante agua.";
    advertencia = "Evitar el contacto directo con los ojos. En caso de irritación, suspender uso.";
  } else if (prod.fase === 2) {
    modoUso = "Colocar unas gotas en la palma de las manos y presionar suavemente sobre la piel limpia.";
    advertencia = "No aplicar sobre piel lesionada o quemada por el sol.";
  } else if (prod.fase === 3) {
    modoUso = "Aplicar 3 a 4 gotas sobre el rostro y cuello, distribuyendo de adentro hacia afuera.";
    advertencia = "Si contiene ácidos o retinol, usar bloqueador FPS 50+ durante el día.";
  } else if (prod.fase === 4) {
    modoUso = "Aplicar una capa uniforme sobre rostro y cuello mediante masajes ascendentes.";
    advertencia = "Mantener fuera del alcance de los niños.";
  } else if (prod.fase === 5) {
    modoUso = "Aplicar generosamente en todo el rostro 15 minutos antes de la exposición solar.";
    advertencia = "Reaplicar cada 2 a 3 horas, especialmente después de sudar o nadar.";
  }

  return `
    <div class="product-card-compact fade-in" onclick="router.navigate('/producto/${prod.id}')" role="button" tabindex="0" style="flex-direction: column; align-items: stretch; gap: 8px;">
      <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
        <img src="${imgSrc}" class="thumb" alt="${prod.nombre}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="thumb-fallback" style="display:none; background:${prod.imagenFallback};">
          <span style="font-size:1.6em;">${emoji}</span>
        </div>
        <div class="info" style="flex: 1;">
          <div class="brand">${prod.marca}</div>
          <div class="name" style="font-weight:600; font-size:0.88em; margin-bottom:4px; white-space: normal; overflow: visible; text-overflow: clip;">${stepTag}${prod.nombre}</div>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:3px;">
            <div class="price" style="font-weight:700; color:var(--color-primary); font-size:0.85em;">S/ ${prod.precio ? prod.precio.toFixed(2) : '---'}</div>
            ${timeTag}
          </div>
        </div>
        <button class="add-btn add-to-cart" data-id="${prod.id}" onclick="event.stopPropagation()" title="Añadir a bolsa">+</button>
      </div>
      <div class="product-details-extra" style="border-top: 1px solid rgba(0,0,0,0.05); padding-top: 6px; font-size: 0.78em; color: var(--color-text-soft);">
        <div style="margin-bottom: 2px;"><strong>Activo:</strong> ${prod.ingrediente_activo || 'Fórmula calmante'}</div>
        <div style="margin-bottom: 2px;"><strong>Beneficio:</strong> ${prod.indicacion_clinica || 'Cuidado facial'}</div>
        <div style="margin-bottom: 2px; line-height: 1.35;"><strong>Uso:</strong> ${modoUso}</div>
        <div style="color: #FF7043; line-height: 1.35;"><strong>Precaución:</strong> ${advertencia}</div>
      </div>
    </div>
  `;
}


const Screens = {

  // ════════════════════════════════════════════════
  // 1. BIENVENIDA
  // ════════════════════════════════════════════════
  welcome: {
    render: () => `
      <div class="card fade-in" style="text-align:center;">
        <div class="welcome-hero">
          <div class="welcome-avatar">🌸</div>
          <div class="badge">Tu asistente de belleza IA</div>
        </div>
        <h2 style="margin-bottom:8px;">Tu piel, tu elección.</h2>
        <p style="color:var(--color-text-soft); font-size:0.95em;">
          ¡Hola! Soy ARI, tu asistente de belleza de ARUMA. Cuéntame sobre tu piel y te ayudo a encontrar exactamente lo que necesitas.
        </p>
        <button onclick="router.navigate('/cuestionario')" class="btn-primary">
          <i data-lucide="clipboard-list" style="margin-right:8px; vertical-align:middle; width:18px;"></i>
          Iniciar Cuestionario de Piel
        </button>
        <button onclick="router.navigate('/escaneo')" class="btn-secondary">
          <i data-lucide="camera" style="margin-right:8px; vertical-align:middle; width:16px;"></i>
          Escanear mi Rostro con IA
        </button>
        <p class="caption" style="margin-top:16px;">
          🔒 Sin registro · Sin almacenamiento de datos · Análisis 100% local
        </p>
      </div>
    `,
    init: () => {
      if (window.lucide) lucide.createIcons();
    }
  },


  // ════════════════════════════════════════════════
  // 2. CUESTIONARIO (Quiz visual multi-paso)
  // ════════════════════════════════════════════════
  questionnaire: {
    _step: 0,
    _answers: {},

    _steps: [
      // SECCIÓN 1: Tu piel hoy
      {
        section: 'Tu piel hoy',
        key: 'tipoPielMañana',
        question: '¿Cómo sientes tu piel al despertar por las mañanas?',
        options: [
          { val: 'grasa',     emoji: '🫧', label: 'Grasa',      sub: 'Brillosa en todo el rostro' },
          { val: 'mixta',     emoji: '✨', label: 'Mixta',      sub: 'Brillosa en zona T, mejillas secas' },
          { val: 'seca',      emoji: '🌵', label: 'Seca',       sub: 'Tirante o con descamación' },
          { val: 'sensible',  emoji: '🌹', label: 'Sensible',   sub: 'Fácil enrojecimiento' },
          { val: 'normal',    emoji: '💫', label: 'Normal',     sub: 'Balanceada y cómoda' }
        ]
      },
      {
        section: 'Tu piel hoy',
        key: 'brillo',
        question: '¿Con qué frecuencia notas brillos no deseados durante el día?',
        options: [
          { val: 'siempre',   emoji: '✨', label: 'Siempre',    sub: 'En todo el rostro' },
          { val: 'zona_t',    emoji: '🎯', label: 'Zona T',     sub: 'Frente, nariz y mentón' },
          { val: 'raramente', emoji: '💧', label: 'Raras veces',sub: 'Acabado mate natural' },
          { val: 'nunca',     emoji: '🌵', label: 'Nunca',      sub: 'Piel opaca o seca' }
        ]
      },
      {
        section: 'Tu piel hoy',
        key: 'poros',
        question: '¿Cómo describirías la visibilidad de tus poros?',
        options: [
          { val: 'grandes',   emoji: '🔍', label: 'Muy visibles',sub: 'Poros abiertos en general' },
          { val: 'zona_t',    emoji: '🎯', label: 'Medios',      sub: 'Solo visibles en la zona T' },
          { val: 'pequenos',  emoji: '🥚', label: 'Pequeños',    sub: 'Piel lisa y uniforme' }
        ]
      },
      {
        section: 'Tu piel hoy',
        key: 'textura',
        question: '¿Cómo describirías la textura de tu piel al tacto?',
        options: [
          { val: 'oleosa',    emoji: '🧴', label: 'Oleosa',      sub: 'Sensación grasosa' },
          { val: 'desigual',  emoji: '🎭', label: 'Desigual',    sub: 'Áspera y grasa a la vez' },
          { val: 'aspera',    emoji: '🍂', label: 'Áspera',      sub: 'Sensación de sequedad' },
          { val: 'suave',     emoji: '🌸', label: 'Suave',       sub: 'Tersa y elástica' }
        ]
      },
      {
        section: 'Tu piel hoy',
        key: 'sensibilidad_hoy',
        question: '¿Tu piel se siente irritada, tirante o caliente en este momento?',
        options: [
          { val: 'si',        emoji: '🥵', label: 'Sí, bastante',sub: 'Molestia o rojez activa' },
          { val: 'un_poco',   emoji: '😐', label: 'Un poco',     sub: 'Ligera tirantez' },
          { val: 'no',        emoji: '😊', label: 'No, cómoda',  sub: 'Piel tranquila y estable' }
        ]
      },

      // SECCIÓN 2: Tu historial
      {
        section: 'Tu historial',
        key: 'reaccion_productos',
        question: 'Cuando usas un product cosmético nuevo, ¿cómo reacciona tu piel?',
        options: [
          { val: 'siempre',   emoji: '🔥', label: 'Suele arder', sub: 'Arde, pica o se enrojece' },
          { val: 'a_veces',   emoji: '⚠️', label: 'A veces',     sub: 'Alguna molestia leve' },
          { val: 'raramente', emoji: '🛡️', label: 'Tolera todo',  sub: 'Rara vez reacciona' }
        ]
      },
      {
        section: 'Tu historial',
        key: 'rojez',
        question: '¿Qué tan fácil se enrojece tu piel con el sol, ejercicio o frío?',
        options: [
          { val: 'siempre',   emoji: '🍅', label: 'Muy fácil',   sub: 'Enrojecimiento inmediato' },
          { val: 'moderadamente', emoji: '🍎', label: 'Moderadamente', sub: 'Pasa después de un rato' },
          { val: 'raramente', emoji: '👤', label: 'Rara vez',    sub: 'Tono estable' }
        ]
      },
      {
        section: 'Tu historial',
        key: 'acne_historial',
        question: '¿Con qué frecuencia presentas brotes de acné o granitos?',
        options: [
          { val: 'siempre',   emoji: '💥', label: 'Frecuente',   sub: 'Granitos activos de forma constante' },
          { val: 'a_veces',   emoji: '🩹', label: 'Ocasional',   sub: 'Brotes leves o cíclicos' },
          { val: 'nunca',     emoji: '✨', label: 'Nunca',       sub: 'Rara vez o nunca' }
        ]
      },
      {
        section: 'Tu historial',
        key: 'manchas_historial',
        question: '¿Tu piel tiende a mancharse con el sol o por marcas de granitos?',
        options: [
          { val: 'si',        emoji: '🎨', label: 'Sí, fácil',   sub: 'Hiperpigmentación frecuente' },
          { val: 'aveces',    emoji: '⛅', label: 'A veces',     sub: 'Algunas manchas suaves' },
          { val: 'nunca',     emoji: '☀️', label: 'Rara vez',    sub: 'Tono muy uniforme' }
        ]
      },
      {
        section: 'Tu historial',
        key: 'lineas_expresion',
        question: '¿Notas líneas de expresión o pérdida de firmeza en tu rostro?',
        options: [
          { val: 'si',        emoji: '⏳', label: 'Marcadas',    sub: 'Frente u ojos' },
          { val: 'aveces',    emoji: '🌀', label: 'Líneas finas',sub: 'Solo al gesticular' },
          { val: 'nunca',     emoji: '🛡️', label: 'Piel firme',  sub: 'Muy firme y elástica' }
        ]
      },

      // SECCIÓN 3: Tus hábitos
      {
        section: 'Tus hábitos',
        key: 'clima',
        question: '¿En qué tipo de clima pasas la mayor parte del tiempo?',
        options: [
          { val: 'humedo',    emoji: '🌴', label: 'Húmedo/Cálido',sub: 'Clima tropical' },
          { val: 'seco',      emoji: '🏔️', label: 'Seco/Frío',   sub: 'Zonas secas o frías' },
          { val: 'templado',  emoji: '🏢', label: 'Templado',    sub: 'Oficina / Aire acondicionado' }
        ]
      },
      {
        section: 'Tus hábitos',
        key: 'agua',
        question: '¿Cuánta agua bebes en promedio al día?',
        options: [
          { val: 'poco',      emoji: '🥛', label: 'Poca',        sub: 'Menos de 1 litro al día' },
          { val: 'medio',     emoji: '🥤', label: 'Moderada',    sub: 'Entre 1 y 2 litros' },
          { val: 'mucho',     emoji: '🏺', label: 'Suficiente',  sub: 'Más de 2 litros' }
        ]
      },
      {
        section: 'Tus hábitos',
        key: 'experiencia',
        question: '¿Cuál es tu experiencia con el cuidado de la piel?',
        options: [
          { val: 'principiante', emoji: '🌱', label: 'Principiante',sub: 'Busco algo simple' },
          { val: 'intermedio',   emoji: '🌿', label: 'Intermedia',  sub: 'Uso cremas y bloqueador' },
          { val: 'avanzado',     emoji: '🌳', label: 'Avanzada',    sub: 'Uso sérums y ácidos' }
        ]
      },
      {
        section: 'Tus hábitos',
        key: 'presupuesto',
        question: '¿Qué presupuesto prefieres para los productos de tu rutina?',
        options: [
          { val: 'bajo',      emoji: '🪙', label: 'Accesible',   sub: 'Menos de S/ 50 por producto' },
          { val: 'medio',     emoji: '💳', label: 'Moderado',    sub: 'S/ 50 - S/ 120 por producto' },
          { val: 'alto',      emoji: '💎', label: 'Premium',     sub: 'Fórmulas dermatológicas top' }
        ]
      }
    ],

    render() {
      Screens.questionnaire._step = 0;
      Screens.questionnaire._answers = {};
      return Screens.questionnaire._renderStep(0);
    },

    _renderStep(stepIdx) {
      const steps = Screens.questionnaire._steps;
      const step  = steps[stepIdx];
      const total = steps.length;
      const cols  = step.options.length === 3 ? 'cols-3' : '';

      const dots = steps.map((_, i) =>
        `<div class="step-dot ${i <= stepIdx ? 'active' : ''}"></div>`
      ).join('');

      const options = step.options.map(opt => `
        <button class="quiz-option" data-val="${opt.val}">
          <span class="quiz-emoji">${opt.emoji}</span>
          <span>${opt.label}</span>
          <span class="quiz-sub">${opt.sub}</span>
        </button>
      `).join('');

      return `
        <div class="card fade-in">
          <div class="steps-indicator">
            ${dots}
          </div>
          <p class="step-label">Sección: <strong>${step.section}</strong> | Paso ${stepIdx + 1} de ${total}</p>

          <div class="quiz-step" id="quiz-step-${stepIdx}">
            <p class="quiz-question">${step.question}</p>
            <div class="quiz-options ${cols}" id="quiz-options-${stepIdx}">
              ${options}
            </div>
          </div>

          ${stepIdx > 0 ? `<button class="btn-back" id="btn-quiz-back"><i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Anterior</button>` : ''}
        </div>
      `;
    },

    init() {
      if (window.lucide) lucide.createIcons();
      Screens.questionnaire._bindStep(0);
    },

    _bindStep(stepIdx) {
      if (window.lucide) lucide.createIcons();
      const steps = Screens.questionnaire._steps;
      const root  = document.getElementById('app-root');

      // Back button
      const backBtn = document.getElementById('btn-quiz-back');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          const prev = stepIdx - 1;
          root.innerHTML = Screens.questionnaire._renderStep(prev);
          setTimeout(() => Screens.questionnaire._bindStep(prev), 0);
        });
      }

      // Option buttons
      document.querySelectorAll(`#quiz-options-${stepIdx} .quiz-option`).forEach(btn => {
        btn.addEventListener('click', () => {
          // Visual selection
          document.querySelectorAll(`#quiz-options-${stepIdx} .quiz-option`).forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');

          const val = btn.getAttribute('data-val');
          Screens.questionnaire._answers[steps[stepIdx].key] = val;

          // Advance or finish
          setTimeout(() => {
            const next = stepIdx + 1;
            if (next < steps.length) {
              root.innerHTML = Screens.questionnaire._renderStep(next);
              setTimeout(() => Screens.questionnaire._bindStep(next), 0);
            } else {
              // All answered — save to store
              const ans = Screens.questionnaire._answers;
              const tipoPiel = ans.tipoPielMañana || 'normal';
              
              // Map sensitivity
              const sensibilidad = (tipoPiel === 'sensible' || ans.sensibilidad_hoy === 'si' || ans.reaccion_productos === 'siempre') ? 'alta' : 'baja';
              
              // Map preocupaciones
              const preocupaciones = [];
              if (ans.acne_historial === 'siempre') preocupaciones.push('acne');
              if (ans.manchas_historial === 'si') preocupaciones.push('manchas');
              if (ans.lineas_expresion === 'si') preocupaciones.push('arrugas_expresion');
              if (ans.brillo === 'siempre') preocupaciones.push('brillo');
              if (preocupaciones.length === 0) preocupaciones.push('deshidratacion');

              // Save flat answers to store
              store.state.perfilUsuario.tipoPielMañana = ans.tipoPielMañana;
              store.state.perfilUsuario.brillo = ans.brillo;
              store.state.perfilUsuario.poros = ans.poros;
              store.state.perfilUsuario.textura = ans.textura;
              store.state.perfilUsuario.sensibilidad_hoy = ans.sensibilidad_hoy;
              store.state.perfilUsuario.reaccion_productos = ans.reaccion_productos;
              store.state.perfilUsuario.rojez = ans.rojez;
              store.state.perfilUsuario.acne_historial = ans.acne_historial;
              store.state.perfilUsuario.agua = ans.agua;
              store.state.perfilUsuario.clima = ans.clima;

              store.updatePerfil('tipoPiel',       tipoPiel);
              store.updatePerfil('sensibilidad',   sensibilidad);
              store.updatePerfil('preocupaciones', preocupaciones);
              store.updatePerfil('experiencia',    ans.experiencia || 'principiante');
              store.updatePerfil('presupuesto',    ans.presupuesto || 'medio');
              router.navigate('/procesando');
            }
          }, 280);
        });
      });
    }
  },


  // ════════════════════════════════════════════════
  // 3. ESCÁNER (Cámara — robusto)
  // ════════════════════════════════════════════════
  scanner: {
    destroy: () => {
      if (typeof Screens.scanner._destroyScanner === 'function') {
        Screens.scanner._destroyScanner();
        Screens.scanner._destroyScanner = null;
      }
    },
    render: () => `
      <div class="card fade-in" id="scanner-prep">
        <button class="btn-back" onclick="window.history.back()">
          <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Volver
        </button>
        <h2 style="margin-top:4px;">Análisis Facial en Vivo</h2>
        <p style="color:var(--color-text-soft); font-size:0.92em;">
          ARI analiza tu piel en tiempo real usando IA. Tu imagen <strong>nunca sale de tu dispositivo</strong>.
        </p>

        <div style="text-align:center; margin: 20px 0;">
          <svg class="fallback-scanner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--color-primary)">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 5.11929 4.11929 4 5.5 4H8.5L9.61803 2.88197C10.2355 2.26446 11.0734 1.91797 11.9468 1.91797H12.0532C12.9266 1.91797 13.7645 2.26446 14.382 2.88197L15.5 4H18.5C19.8807 4 21 5.11929 21 6.5V17.5C21 18.8807 19.8807 20 18.5 20H5.5C4.11929 20 3 18.8807 3 17.5V6.5ZM5.5 6C5.22386 6 5 6.22386 5 6.5V17.5C5 17.7761 5.22386 18 5.5 18H18.5C18.7761 18 19 17.7761 19 17.5V6.5C19 6.22386 18.7761 6 18.5 6H15.0532C14.788 6 14.5336 5.89464 14.3461 5.70711L13.228 4.58908C12.9157 4.27676 12.4913 4.10141 12.0494 4.10141H11.9506C11.5087 4.10141 11.0843 4.27676 10.772 4.58908L9.65389 5.70711C9.46639 5.89464 9.21199 6 8.94678 6H5.5Z"/>
          </svg>
        </div>

        <div id="cam-state-msg" class="cam-state-badge cam-state-loading" style="display:none;">
          <span id="cam-state-text">Solicitando permisos...</span>
        </div>

        <div class="badge success" style="width:100%; text-align:center; box-sizing:border-box; margin-bottom:16px;">
          <i data-lucide="lock" style="width:13px;height:13px;vertical-align:text-bottom;"></i>
          Procesamiento local · Nunca enviamos tu imagen
        </div>

        <button id="btn-activate-cam" class="btn-primary">
          <i data-lucide="camera" style="margin-right:8px; vertical-align:middle; width:16px;"></i>
          Activar Cámara
        </button>
        <button onclick="router.navigate('/cuestionario')" class="btn-secondary" style="font-size:0.9em;">
          Omitir — usar formulario
        </button>
      </div>

      <div id="scanner-view" style="display:none; width:100%;">
        <div class="scanner-container">
          <video id="video-input" class="scanner-video" autoplay playsinline muted></video>
          <canvas id="output-canvas" class="scanner-canvas"></canvas>
          <div class="scanner-overlay">
            <div class="scanner-instruction">Mantén tu rostro dentro del óvalo</div>
            <div class="scan-line"></div>
            <div class="scanner-guide"></div>
            <div class="scanner-progress-container" style="width: 80%; height: 6px; background: rgba(255,255,255,0.25); border-radius: 3px; margin: 10px auto; overflow: hidden; position: absolute; bottom: 50px; left: 10%;">
              <div id="scanner-progress-bar" style="width: 0%; height: 100%; background: #FE0182; transition: width 0.1s ease-out;"></div>
            </div>
            <div id="scanner-text" class="scanner-status">Estabilizando...</div>
          </div>
        </div>
        <button onclick="router.navigate('/cuestionario')" class="btn-secondary" style="font-size:0.85em; margin-top:8px;">
          Cancelar y usar formulario
        </button>
      </div>
    `,

    init: () => {
      if (window.lucide) lucide.createIcons();

      let scannerActive = false;
      let faceMesh = null;
      let camera   = null;
      let accumulatedFrames = [];

      Screens.scanner._destroyScanner = () => {
        scannerActive = false;
        accumulatedFrames = [];
        if (camera) { camera.stop(); camera = null; }
        if (faceMesh) { try { faceMesh.close(); } catch(e){} faceMesh = null; }
        const video = document.getElementById('video-input');
        if (video && video.srcObject) {
          video.srcObject.getTracks().forEach(t => t.stop());
          video.srcObject = null;
        }
      };

      const activateBtn   = document.getElementById('btn-activate-cam');
      const stateMsg      = document.getElementById('cam-state-msg');
      const stateText     = document.getElementById('cam-state-text');
      const scannerPrep   = document.getElementById('scanner-prep');
      const scannerView   = document.getElementById('scanner-view');
      const videoElement  = document.getElementById('video-input');
      const canvasElement = document.getElementById('output-canvas');
      const scannerText   = document.getElementById('scanner-text');

      function showState(type, text) {
        stateMsg.style.display = 'inline-flex';
        stateMsg.className = `cam-state-badge cam-state-${type}`;
        stateText.textContent = text;
      }

      activateBtn.addEventListener('click', async () => {
        activateBtn.disabled = true;
        showState('loading', '🔐 Solicitando permisos de cámara...');

        // Step 1: Request camera permission explicitly first
        let stream;
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
          stream.getTracks().forEach(t => t.stop()); // just testing permission
          showState('loading', '⏳ Cargando módulo IA...');
        } catch (permErr) {
          showState('error', '🚫 Permiso de cámara denegado');
          activateBtn.disabled  = false;
          activateBtn.textContent = '🔄 Reintentar';
          // Show a friendly message
          const msg = document.createElement('p');
          msg.style.cssText = 'color:var(--color-error); font-size:0.85em; margin-top:12px; text-align:center;';
          msg.innerHTML = 'Para usar el escáner, <strong>permite el acceso a la cámara</strong> en la barra de tu navegador y recarga la página.';
          activateBtn.parentNode.insertBefore(msg, activateBtn.nextSibling);
          return;
        }

        // Step 2: Check MediaPipe availability with timeout
        const mediaPipeReady = () => typeof FaceMesh !== 'undefined' && typeof Camera !== 'undefined';

        let attempts = 0;
        const waitForMP = setInterval(() => {
          attempts++;
          if (mediaPipeReady()) {
            clearInterval(waitForMP);
            startScanner();
          } else if (attempts > 20) {
            clearInterval(waitForMP);
            showState('error', '⚠️ Módulo IA no disponible');
            // Fallback: simulate scan with questionnaire data
            setTimeout(() => {
              const diag = {
                tipoPielDetectado: store.state.perfilUsuario.tipoPiel || 'mixta',
                nivelHidratacion:  Math.round(55 + Math.random() * 30),
                homogeneidadTono:  'Media',
                indiceLuminosidad: Math.round(60 + Math.random() * 25),
                subtono:           'Cálido (Warm)',
                puntosAnalizados:  468,
                zonasPreocupacion: ['zona_t'],
                metodo:            'cuestionario_fallback'
              };
              store.setState({ diagnostico: diag });
              router.navigate('/procesando');
            }, 1500);
          }
        }, 300);

        function startScanner() {
          showState('ready', '✅ Cámara lista — Analizando...');
          scannerPrep.style.display = 'none';
          scannerView.style.display = 'block';
          scannerActive = true;
          accumulatedFrames = [];

          const progBar = document.getElementById('scanner-progress-bar');
          if (progBar) progBar.style.width = '0%';

          try {
            faceMesh = new FaceMesh({
              locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
            });
            faceMesh.setOptions({
              maxNumFaces:           1,
              refineLandmarks:       true,
              minDetectionConfidence: 0.5,
              minTrackingConfidence:  0.5
            });
            faceMesh.onResults(onResults);

            camera = new Camera(videoElement, {
              onFrame: async () => {
                if (scannerActive) await faceMesh.send({ image: videoElement });
              },
              width: 480, height: 640, facingMode: 'user'
            });
            camera.start();
          } catch (err) {
            console.error('FaceMesh error:', err);
            showState('error', '⚠️ Error al iniciar scanner');
            // Silently fallback
            setTimeout(() => router.navigate('/cuestionario'), 1500);
          }
        }

        function onResults(results) {
          if (!scannerActive || !canvasElement) return;
          canvasElement.width  = videoElement.videoWidth;
          canvasElement.height = videoElement.videoHeight;
          const ctx = canvasElement.getContext('2d');
          ctx.save();
          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

          if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
            const landmarks = results.multiFaceLandmarks[0];
            if (typeof drawConnectors !== 'undefined') {
              drawConnectors(ctx, landmarks, FACEMESH_TESSELATION,  { color: '#C39BD370', lineWidth: 0.5 });
              drawConnectors(ctx, landmarks, FACEMESH_RIGHT_EYE,    { color: '#FE0182',   lineWidth: 1.5 });
              drawConnectors(ctx, landmarks, FACEMESH_LEFT_EYE,     { color: '#FE0182',   lineWidth: 1.5 });
              drawConnectors(ctx, landmarks, FACEMESH_FACE_OVAL,    { color: '#FE0182',   lineWidth: 1.5 });
            }

            accumulatedFrames.push(landmarks);
            const count = accumulatedFrames.length;
            const progressPercent = Math.min(100, Math.round((count / 30) * 100));

            const progBar = document.getElementById('scanner-progress-bar');
            if (progBar) {
              progBar.style.width = `${progressPercent}%`;
            }

            if (count < 10) {
              scannerText.textContent = `Estabilizando rostro... ${progressPercent}%`;
              scannerText.style.color = '#FE0182';
            } else if (count < 25) {
              scannerText.textContent = `Analizando textura y zonas... ${progressPercent}%`;
              scannerText.style.color = '#FE0182';
            } else if (count < 30) {
              scannerText.textContent = `Calculando métricas... ${progressPercent}%`;
              scannerText.style.color = '#4CAF82';
            } else {
              scannerText.textContent = '✨ ¡Análisis completado!';
              scannerText.style.color = '#4CAF82';
              scannerActive = false;
              if (camera) camera.stop();

              // Compute average landmarks
              const avgLandmarks = [];
              const numFrames = accumulatedFrames.length;
              for (let i = 0; i < 468; i++) {
                let sumX = 0, sumY = 0, sumZ = 0;
                for (let f = 0; f < numFrames; f++) {
                  sumX += accumulatedFrames[f][i].x;
                  sumY += accumulatedFrames[f][i].y;
                  sumZ += accumulatedFrames[f][i].z || 0;
                }
                avgLandmarks.push({
                  x: sumX / numFrames,
                  y: sumY / numFrames,
                  z: sumZ / numFrames
                });
              }

              const diagnostico = analyzeFromLandmarks(avgLandmarks, store.state.perfilUsuario);
              store.setState({ diagnostico });
              setTimeout(() => router.navigate('/procesando'), 800);
            }
          } else {
            // Reset if face is lost
            accumulatedFrames = [];
            const progBar = document.getElementById('scanner-progress-bar');
            if (progBar) progBar.style.width = '0%';
            scannerText.textContent = 'Mantén tu rostro en el óvalo...';
            scannerText.style.color = 'white';
          }
          ctx.restore();
        }
      });
    }
  },


  // ════════════════════════════════════════════════
  // 4. PROCESANDO
  // ════════════════════════════════════════════════
  processing: {
    render: () => `
      <div class="card fade-in">
        <div class="processing-container">
          <div class="pulse-ring">
            <div class="pulse-inner">🔬</div>
          </div>
          <div>
            <h3 id="loading-msg" style="margin:0; color:var(--color-primary);">Analizando tu piel...</h3>
            <p class="caption" style="margin:6px 0 0;">Un momento por favor</p>
          </div>
          <div class="progress-container" style="width:80%; margin:0;">
            <div class="progress-bar" id="proc-bar" style="width:0%;"></div>
          </div>
        </div>
      </div>
    `,
    init: () => {
      const msgs = [
        'Analizando tu piel...',
        'Cruzando con el catálogo ARUMA...',
        'Aplicando criterios dermatológicos...',
        'Generando tu rutina ideal...'
      ];
      let i = 0;
      const el  = document.getElementById('loading-msg');
      const bar = document.getElementById('proc-bar');

      const interval = setInterval(() => {
        i++;
        if (i < msgs.length && el) el.textContent = msgs[i];
        if (bar) bar.style.width = `${Math.min(90, (i / msgs.length) * 100)}%`;
      }, 600);

      setTimeout(() => {
        clearInterval(interval);
        if (bar) bar.style.width = '100%';

        let diag = store.state.diagnostico;
        if (!diag) {
          diag = {
            tipoPielDetectado: store.state.perfilUsuario.tipoPiel || 'normal',
            nivelHidratacion:  65,
            homogeneidadTono:  'Media',
            indiceLuminosidad: 62
          };
          store.setState({ diagnostico: diag });
        }

        const payload = { ...store.state.perfilUsuario, tipoPiel: diag.tipoPielDetectado };
        const rutina  = generarRutina(payload);
        store.setState({ rutinaGenerada: rutina });

        setTimeout(() => router.navigate('/resultados'), 400);
      }, 2600);
    }
  },


  // ════════════════════════════════════════════════
  // 5. RESULTADOS (AM/PM columns + mejor UX)
  // ════════════════════════════════════════════════
  results: {
    render: () => {
      const diag = store.state.diagnostico;
      const rut  = store.state.rutinaGenerada;
      if (!diag || !rut) return `
        <div class="card fade-in" style="text-align:center;">
          <p style="color:var(--color-error);">Error cargando resultados.</p>
          <button onclick="router.navigate('/')" class="btn-primary">Volver al inicio</button>
        </div>`;

      // ── Diagnóstico card: "Tu perfil de piel"
      const diagHTML = `
        <div class="card fade-in" style="background: linear-gradient(135deg, var(--color-primary-light), #FCE4F1); border: 1.5px solid var(--color-primary);">
          <h3 style="color:var(--color-primary); margin-bottom:8px;">🌸 Tu Perfil de Piel</h3>
          <p style="font-size:1.15em; font-weight:700; margin: 4px 0 12px; color:var(--color-primary-dark);">
            Tipo: ${(diag.tipoPielDetectado || 'N/A').toUpperCase()} (${rut.codigoBaumann || 'N/A'})
          </p>

          <!-- SVG Explanatory Graphs -->
          <div style="display:flex; justify-content:space-around; align-items:center; margin: 15px 0;">
            <!-- Hydration Circle -->
            <div style="text-align:center;">
              <svg width="65" height="65" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" stroke-width="3"/>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#34D399" stroke-width="3" stroke-dasharray="${diag.nivelHidratacion || 50}, 100"/>
                <text x="18" y="20.5" font-family="Poppins" font-size="7.5" font-weight="700" fill="#065F46" text-anchor="middle">${diag.nivelHidratacion || 50}%</text>
              </svg>
              <div style="font-size:0.75em; font-weight:600; margin-top:4px; color:var(--color-text);">Hidratación</div>
            </div>
            
            <!-- Luminosity Circle -->
            <div style="text-align:center;">
              <svg width="65" height="65" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" stroke-width="3"/>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="${diag.indiceLuminosidad || 50}, 100"/>
                <text x="18" y="20.5" font-family="Poppins" font-size="7.5" font-weight="700" fill="#92400E" text-anchor="middle">${diag.indiceLuminosidad || 50}%</text>
              </svg>
              <div style="font-size:0.75em; font-weight:600; margin-top:4px; color:var(--color-text);">Luminosidad</div>
            </div>

            <!-- Tono Circle -->
            <div style="text-align:center;">
              <svg width="65" height="65" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" stroke-width="3"/>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#60A5FA" stroke-width="3" stroke-dasharray="${diag.homogeneidadTono === 'Alta' ? 100 : diag.homogeneidadTono === 'Media' ? 66 : 33}, 100"/>
                <text x="18" y="20.5" font-family="Poppins" font-size="7" font-weight="700" fill="#1E40AF" text-anchor="middle">${diag.homogeneidadTono || 'Media'}</text>
              </svg>
              <div style="font-size:0.75em; font-weight:600; margin-top:4px; color:var(--color-text);">Tono</div>
            </div>
          </div>

          <div style="font-size:0.82em; color:var(--color-text-soft); line-height:1.45; border-top:1.5px solid rgba(254,1,130,0.15); padding-top:8px; margin-top:8px;">
            <div>• <strong>Subtono:</strong> ${diag.subtono || 'Neutro'}</div>
            <div>• <strong>Zonas de atención:</strong> ${(diag.zonasPreocupacion || []).join(', ') || 'Frente y mejillas'}</div>
          </div>
          
          <button class="btn-secondary" id="btn-why-products" style="margin-top:10px; font-size:0.85em; width:100%; border-color: var(--color-primary); color: var(--color-primary); background: transparent;">
            ❓ ¿Por qué estos productos?
          </button>
          
          <div id="explanation-box" style="display:none; margin-top:12px; padding:12px; border-radius:12px; background:rgba(255,255,255,0.7); border: 1px dashed var(--color-primary); font-size:0.82em; line-height:1.45; color:var(--color-text);">
            <strong>Explicación de tu prescripción personalizada:</strong><br>
            • El <strong>Limpiador</strong> purifica manteniendo la barrera cutánea sana.<br>
            • El <strong>Tratamiento/Sérum</strong> introduce activos de alta eficacia contra tus principales inquietudes.<br>
            • La <strong>Hidratante</strong> sella la humedad y previene la tirantez.<br>
            • El <strong>Protector Solar</strong> bloquea la radiación UV previniendo envejecimiento prematuro y manchas.<br>
            • Todos los productos están alineados con tu código Baumann <strong>${rut.codigoBaumann}</strong> y presupuesto <strong>${store.state.perfilUsuario.presupuesto === 'bajo' ? 'Básico (< S/ 50)' : store.state.perfilUsuario.presupuesto === 'medio' ? 'Moderado (S/ 50 - S/ 120)' : 'Premium'}</strong>.
          </div>
          
          <p class="caption" style="margin:14px 0 0; text-align:center; padding-top:12px; border-top:1px solid rgba(0,0,0,0.05); font-size: 0.72em;">
            ⚠️ Análisis orientativo de Aruma. No reemplaza un diagnóstico médico.
          </p>
        </div>
      `;

      // ── Alerta principiante
      const alertHTML = rut.esPrincipiante ? `
        <div class="card fade-in" style="background:rgba(254,1,130,0.04); border-color:rgba(254,1,130,0.15);">
          <p style="font-size:0.9em; margin:0; font-weight:500; line-height:1.6;">
            🌱 Como es tu primera rutina, ARI te recomienda empezar con lo esencial. En 4–6 semanas, cuando tu piel se haya adaptado, podrás añadir más pasos.
          </p>
        </div>
      ` : '';

      // ── Separar productos en AM, PM, AMPM y numerar los pasos
      const productos = rut.rutina || [];
      const amProds   = productos.filter(p => {
        const t = getRoutineTime(p.pasoRutina);
        return t === 'AM' || t === 'AMPM';
      });
      const pmProds   = productos.filter(p => {
        const t = getRoutineTime(p.pasoRutina);
        return t === 'PM' || t === 'AMPM';
      });

      let amHTML = '';
      let pmHTML = '';
      
      if (!productos || productos.length === 0) {
        const fallback = PRODUCTOS_CATALOGO.filter(p => p.apto_para_todos);
        const fbAm = fallback.filter(p => getRoutineTime(p.pasoRutina) !== 'PM').slice(0, 2);
        const fbPm = fallback.filter(p => getRoutineTime(p.pasoRutina) !== 'AM').slice(0, 2);
        amHTML = fbAm.map((p, idx) => renderCompactCard(p, 'am', idx + 1)).join('');
        pmHTML = fbPm.map((p, idx) => renderCompactCard(p, 'pm', idx + 1)).join('');
        amHTML += `<p class="caption warning-text" style="padding:8px;">No encontramos compatibilidad perfecta. Recomendamos estos productos suaves.</p>`;
      } else {
        amHTML = amProds.map((p, idx) => renderCompactCard(p, 'am', idx + 1)).join('');
        pmHTML = pmProds.map((p, idx) => renderCompactCard(p, 'pm', idx + 1)).join('');
      }

      const rutinaHTML = `
        <div class="routine-header">
          <h2 style="font-size:1.1em;">Tu Rutina Ideal</h2>
          <div class="badge" style="margin:0;">${productos.length} productos</div>
        </div>
        <div class="routine-columns">
          <div class="routine-col">
            <div class="routine-col-header am-header">☀️ Mañana (AM)</div>
            ${amHTML || '<p class="caption" style="padding:8px;">Sin productos AM específicos.</p>'}
          </div>
          <div class="routine-col">
            <div class="routine-col-header pm-header">🌙 Noche (PM)</div>
            ${pmHTML || '<p class="caption" style="padding:8px;">Sin productos PM específicos.</p>'}
          </div>
        </div>
      `;

      // ── Upsell
      const upsellHTML = rut.upsellSugerencia ? `
        <div class="upsell-card fade-in" style="background:rgba(254,1,130,0.03); border:1.5px dashed var(--color-primary); border-radius:16px; padding:16px; margin: 12px 0;">
          <h4 style="margin:0 0 4px; color:var(--color-primary);">🎁 ¡Cerca del envío gratis!</h4>
          <p class="caption" style="margin:0 0 8px;">Agrega <strong>${rut.upsellSugerencia.nombre}</strong> para activar tu bolsa de muestras y envío gratuito.</p>
          <button class="btn-secondary add-to-cart" data-id="${rut.upsellSugerencia.id}" style="font-size:0.85em; padding:10px 20px; margin-top:4px; width:100%;">
            + Agregar por S/ ${rut.upsellSugerencia.precio.toFixed(2)}
          </button>
        </div>
      ` : '';

      return `
        <div style="width:100%;">
          ${diagHTML}
          ${alertHTML}
          ${rutinaHTML}
          ${upsellHTML}
          <div style="margin-top:20px;">
            <button onclick="router.navigate('/finalizar')" class="btn-primary">
              <i data-lucide="shopping-bag" style="margin-right:8px;vertical-align:middle;width:16px;"></i>
              Ir al Checkout
            </button>
            <button onclick="router.navigate('/')" class="btn-secondary">Volver a consultar</button>
          </div>
        </div>
      `;
    },

    init: () => {
      if (window.lucide) lucide.createIcons();

      // Bind explanation toggle
      const explainBtn = document.getElementById('btn-why-products');
      const explainBox = document.getElementById('explanation-box');
      if (explainBtn && explainBox) {
        explainBtn.addEventListener('click', () => {
          const isHidden = explainBox.style.display === 'none';
          explainBox.style.display = isHidden ? 'block' : 'none';
        });
      }

      document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id   = parseInt(btn.getAttribute('data-id'));
          const prod = PRODUCTOS_CATALOGO.find(p => p.id === id);
          if (prod) {
            store.addToCart(prod);
            const orig = btn.textContent;
            btn.textContent = '✓ Añadido';
            btn.style.background = 'var(--color-success)';
            btn.style.color = 'white';
            setTimeout(() => {
              btn.textContent = orig;
              btn.style.background = '';
              btn.style.color = '';
            }, 2000);
          }
        });
      });

      // Show chat contextually after 1.5s
      setTimeout(() => {
        document.getElementById('ari-chat-widget')?.classList.remove('collapsed');
      }, 1500);

      // Award points
      setTimeout(() => store.addMagentaPoints(50, 'escaner_completado'), 3000);
    }
  },


  // ════════════════════════════════════════════════
  // 6. DETALLE DE PRODUCTO
  // ════════════════════════════════════════════════
  productDetail: {
    render: (params) => {
      const prod = PRODUCTOS_CATALOGO.find(p => p.id === parseInt(params.id));
      if (!prod) return `
        <div class="card fade-in" style="text-align:center;">
          <p>Producto no encontrado.</p>
          <button onclick="window.history.back()" class="btn-primary">Volver</button>
        </div>`;

      const imgSrc  = getProductImgSrc(prod);
      const time    = getRoutineTime(prod.pasoRutina);
      const timeTag = time === 'AM'   ? '<span class="tag-am">☀️ Mañana (AM)</span>'
                    : time === 'PM'   ? '<span class="tag-pm">🌙 Noche (PM)</span>'
                    :                   '<span class="tag-ampm">☀️🌙 AM & PM</span>';
      const badges  = (prod.ingredientesActivos || [])
        .map(i => `<span class="badge" style="margin-right:4px; margin-bottom:6px;">${i}</span>`)
        .join('');

      return `
        <div class="fade-in" style="width:100%;">
          <button class="btn-back" onclick="window.history.back()">
            <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Volver
          </button>

          <div class="card" style="padding:0; overflow:hidden; margin-top:0;">
            <div class="product-img-container" style="height:280px; background:white;">
              <img src="${imgSrc}" class="product-img" alt="${prod.nombre}"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
              <div class="product-img-fallback" style="display:none; background:${prod.imagenFallback};">
                <span style="font-size:3em;">${getStepEmoji(prod.pasoRutina)}</span>
                <span style="color:#fff; font-weight:700; font-family:'Poppins';">${prod.marca}</span>
              </div>
            </div>
            <div style="padding:24px;">
              <div class="product-brand">${prod.marca}</div>
              <h2 style="margin-bottom:8px; font-size:1.1em;">${prod.nombre}</h2>
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; flex-wrap:wrap;">
                <span class="product-price" style="font-size:1.3em; margin:0;">S/ ${prod.precio ? prod.precio.toFixed(2) : '---'}</span>
                ${timeTag}
                ${prod.precioVariable ? '<span class="badge warning">Precio variable</span>' : ''}
              </div>
              <div style="margin-bottom:16px; display:flex; flex-wrap:wrap; gap:6px;">${badges}</div>
              <p style="font-size:0.92em; line-height:1.6; color:var(--color-text-soft);">
                ${prod.descripcionLarga || prod.descripcionCorta}
              </p>
              <p style="font-size:0.82em; font-weight:600; color:var(--color-primary); margin-bottom:16px;">
                ${getStepEmoji(prod.pasoRutina)} ${prod.pasoRutina}
              </p>
              <button class="btn-primary add-to-cart" data-id="${prod.id}" id="btn-add-detail">
                <i data-lucide="shopping-bag" style="margin-right:8px;vertical-align:middle;width:16px;"></i>
                Añadir a bolsa
              </button>
            </div>
          </div>

          <div class="card">
            <h3 style="font-size:1em; margin-bottom:6px;">🔬 Verificador de Compatibilidad</h3>
            <p class="caption">Escribe otro ingrediente para verificar si son seguros juntos.</p>
            <input type="text" id="compat-input" placeholder="Ej. Retinol, Niacinamida, Vitamina C...">
            <div id="compat-result" style="margin-top:10px;"></div>
          </div>
        </div>
      `;
    },

    init: (params) => {
      if (window.lucide) lucide.createIcons();
      const prod = PRODUCTOS_CATALOGO.find(p => p.id === parseInt(params.id));

      document.getElementById('btn-add-detail')?.addEventListener('click', (e) => {
        if (prod) {
          store.addToCart(prod);
          e.target.textContent = '✓ ¡Añadido a tu bolsa!';
          e.target.style.background = 'var(--color-success)';
          setTimeout(() => {
            e.target.innerHTML = '<i data-lucide="shopping-bag" style="margin-right:8px;vertical-align:middle;width:16px;"></i> Añadir a bolsa';
            e.target.style.background = '';
            if (window.lucide) lucide.createIcons();
          }, 2200);
        }
      });

      const input  = document.getElementById('compat-input');
      const result = document.getElementById('compat-result');

      input?.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        if (val.length < 3) { result.innerHTML = ''; return; }

        const found = INCOMPATIBILIDADES.find(inc =>
          (inc.activo1.toLowerCase().includes(val) || inc.activo2.toLowerCase().includes(val)) &&
          prod.ingredientesActivos.some(act =>
            inc.activo1.toLowerCase().includes(act.toLowerCase()) ||
            inc.activo2.toLowerCase().includes(act.toLowerCase())
          )
        );

        if (found) {
          const color = found.nivel === 'evitar'     ? 'var(--color-error)'
                      : found.nivel === 'compatible' ? 'var(--color-success)'
                      :                               '#B58400';
          const bg    = found.nivel === 'evitar'     ? 'rgba(255,107,107,0.1)'
                      : found.nivel === 'compatible' ? 'rgba(76,175,130,0.1)'
                      :                               'rgba(255,200,87,0.15)';
          result.innerHTML = `<div style="padding:12px;border-radius:12px;background:${bg};color:${color};font-size:0.88em;line-height:1.5;">${found.mensaje}</div>`;
        } else {
          result.innerHTML = `<div style="padding:12px;border-radius:12px;background:rgba(76,175,130,0.1);color:var(--color-success);font-size:0.88em;">✅ No se detectaron incompatibilidades conocidas con este producto.</div>`;
        }
      });
    }
  },


  // ════════════════════════════════════════════════
  // 7. CHECKOUT
  // ════════════════════════════════════════════════
  checkout: {
    render: () => {
      const carrito = store.state.carrito;
      let total = 0;
      let itemsHTML = '';

      if (carrito.length === 0) {
        itemsHTML = `
          <div style="text-align:center; padding:20px 0;">
            <div style="font-size:3em; margin-bottom:8px;">🛍️</div>
            <p style="color:var(--color-text-soft);">Tu bolsa está vacía.</p>
            <button onclick="router.navigate('/')" class="btn-primary" style="margin-top:8px;">
              Descubrir productos
            </button>
          </div>`;
      } else {
        carrito.forEach(item => {
          total += (item.precio || 0) * item.cantidad;
          itemsHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid rgba(0,0,0,0.05);">
              <div style="flex:1; padding-right:10px;">
                <div style="font-size:0.8em; color:var(--color-text-soft); text-transform:uppercase; letter-spacing:0.5px;">${item.marca}</div>
                <strong style="font-size:0.9em; line-height:1.3;">${item.nombre}</strong>
                <div class="caption" style="margin-top:2px;">Cant: ${item.cantidad}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-weight:700; color:var(--color-primary);">S/ ${((item.precio || 0) * item.cantidad).toFixed(2)}</div>
                <button onclick="store.removeFromCart('${item.id}'); router.navigate('/finalizar');"
                  style="background:none;border:none;cursor:pointer;color:var(--color-text-soft);font-size:0.75em;margin-top:4px;">
                  Eliminar
                </button>
              </div>
            </div>
          `;
        });
      }

      return `
        <div class="fade-in" style="width:100%;">
          <button class="btn-back" onclick="window.history.back()">
            <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Volver
          </button>
          <h2 style="margin-top:4px;">Finalizar Compra</h2>

          <div class="biosecurity-banner">
            <i data-lucide="shield-alert" style="vertical-align:middle; margin-right:6px; width:15px;"></i>
            <strong>Política de Bioseguridad:</strong> Por razones de higiene, los productos cosméticos no pueden devolverse si han sido abiertos o usados. Cambios en 7 días calendario.
          </div>

          <div class="card">
            <h3 style="font-size:1em; margin-bottom:16px;">Tu Bolsa 🛍️</h3>
            ${itemsHTML}
            ${carrito.length > 0 ? `
              <div style="display:flex; justify-content:space-between; padding-top:14px; font-size:1.05em; font-weight:700; border-top:2px solid rgba(254,1,130,0.15);">
                <span>Total</span>
                <span style="color:var(--color-primary);">S/ ${total.toFixed(2)}</span>
              </div>
            ` : ''}
          </div>

          ${carrito.length > 0 ? `
            <button class="btn-primary" id="btn-show-payment">
              <i data-lucide="credit-card" style="margin-right:8px;vertical-align:middle;width:16px;"></i>
              Continuar al Pago
            </button>
          ` : ''}

          <!-- Task 11: Payment Modal -->
          <div id="payment-modal" class="payment-modal" style="display:none;">
            <div class="payment-overlay" id="payment-overlay"></div>
            <div class="payment-content card fade-in">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h3 style="margin:0;">Método de Pago</h3>
                <button id="btn-close-payment" style="background:none; border:none; cursor:pointer; font-size:1.2em;">✕</button>
              </div>
              <p style="margin-top:0; font-weight:700; color:var(--color-primary);">Total a Pagar: S/ ${total.toFixed(2)}</p>

              <div class="payment-options">
                <button class="payment-option active" data-method="yape">🟣 Yape</button>
                <button class="payment-option" data-method="card">💳 Tarjeta</button>
                <button class="payment-option" data-method="collect">🛍️ Click & Collect</button>
              </div>

              <!-- Yape Flow -->
              <div id="pay-flow-yape" class="pay-flow" style="display:block;">
                <div style="text-align:center; margin:16px 0;">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/QR_code_for_mobile_English_Wikipedia.svg" alt="Yape QR" style="width:120px; height:120px; border-radius:12px;">
                  <p class="caption">Escanea el QR para pagar S/ ${total.toFixed(2)} a Aruma</p>
                </div>
                <div class="form-group" style="margin-bottom:10px;">
                  <input type="text" placeholder="Número de celular origen (9 dígitos)" id="yape-phone">
                </div>
                <button class="btn-primary" id="btn-confirm-yape">Confirmar Pago con Yape</button>
              </div>

              <!-- Card Flow -->
              <div id="pay-flow-card" class="pay-flow" style="display:none;">
                <div class="form-group" style="margin-bottom:10px;">
                  <input type="text" placeholder="Número de Tarjeta" disabled>
                </div>
                <div style="display:flex; gap:10px;">
                  <div class="form-group" style="flex:1; margin-bottom:10px;">
                    <input type="text" placeholder="MM/YY" disabled>
                  </div>
                  <div class="form-group" style="flex:1; margin-bottom:10px;">
                    <input type="text" placeholder="CVV" disabled>
                  </div>
                </div>
                <button class="btn-primary" id="btn-confirm-card" disabled>Pagar (Simulado)</button>
              </div>

              <!-- Collect Flow -->
              <div id="pay-flow-collect" class="pay-flow" style="display:none;">
                <div class="form-group" style="margin-bottom:10px;">
                  <select id="collect-store">
                    <option value="jockey">Tienda Jockey Plaza</option>
                    <option value="sanmiguel">Tienda Plaza San Miguel</option>
                    <option value="miraflores">Tienda Larco Miraflores</option>
                  </select>
                </div>
                <div style="text-align:center;">
                  <p class="caption">Muestra este código al recoger:</p>
                  <div id="qr-container" class="qr-container"></div>
                </div>
                <button class="btn-primary" id="btn-confirm-collect">Generar Pedido para Recojo</button>
              </div>
            </div>
          </div>
        </div>
      `;
    },
    init: () => {
      if (window.lucide) lucide.createIcons();
      const total = store.state.carrito.reduce((s, i) => s + (i.precio || 0) * i.cantidad, 0);

      // Payment modal logic
      const btnShow = document.getElementById('btn-show-payment');
      const modal = document.getElementById('payment-modal');
      const btnClose = document.getElementById('btn-close-payment');
      const overlay = document.getElementById('payment-overlay');

      if (btnShow) {
        btnShow.addEventListener('click', () => modal.style.display = 'block');
        btnClose.addEventListener('click', () => modal.style.display = 'none');
        overlay.addEventListener('click', () => modal.style.display = 'none');
      }

      // Tabs
      document.querySelectorAll('.payment-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.payment-option').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.pay-flow').forEach(f => f.style.display = 'none');
          
          btn.classList.add('active');
          const method = btn.getAttribute('data-method');
          document.getElementById(`pay-flow-${method}`).style.display = 'block';

          if (method === 'collect' && typeof QRCode !== 'undefined' && store.state.carrito.length > 0) {
            const container = document.getElementById('qr-container');
            container.innerHTML = ''; // clear previous
            const qrData = JSON.stringify({
              items: store.state.carrito.map(c => ({ id: c.id, qty: c.cantidad })),
              ts:    Date.now()
            });
            new QRCode(container, {
              text:         qrData,
              width:        120,
              height:       120,
              colorDark:    '#FE0182',
              colorLight:   '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            });
          }
        });
      });

      // Confirm Handlers (Task 10: Create Order)
      const handleConfirm = async (btn) => {
        btn.disabled = true;
        btn.textContent = 'Procesando...';
        
        // Save order to supabase
        const items = store.state.carrito.map(c => ({
          id: c.id, name: c.nombre, qty: c.cantidad, price: c.precio
        }));
        await sbCreateOrder(items, total);
        
        router.navigate('/gracias');
      };

      document.getElementById('btn-confirm-yape')?.addEventListener('click', (e) => {
        if (document.getElementById('yape-phone').value.length >= 9) {
          handleConfirm(e.target);
        } else {
          alert('Ingresa un número válido');
        }
      });
      document.getElementById('btn-confirm-collect')?.addEventListener('click', (e) => {
        handleConfirm(e.target);
      });
    }
  },


  // ════════════════════════════════════════════════
  // 8. GRACIAS
  // ════════════════════════════════════════════════
  thanks: {
    render: () => `
      <div class="card fade-in" style="text-align:center; padding:40px 24px;">
        <div class="thanks-icon">🎉</div>
        <h2 style="margin:16px 0 8px;">¡Gracias por tu compra!</h2>
        <p style="color:var(--color-text-soft); font-size:0.95em; margin-bottom:20px;">
          Tu pedido está siendo procesado. Muestra tu código QR en cualquier tienda ARUMA para recogerlo.
        </p>
        <div class="badge success" style="font-size:0.9em; margin-bottom:20px;">
          💖 +100 Magenta Points añadidos a tu cuenta
        </div>
        <button onclick="router.navigate('/')" class="btn-primary">
          Volver al Inicio
        </button>
        <button onclick="router.navigate('/cuestionario')" class="btn-secondary">
          Nueva consulta de piel
        </button>
      </div>
    `,
    init: () => {
      if (window.lucide) lucide.createIcons();
      store.setState({ carrito: [] });
      store.addMagentaPoints(100, 'compra_completada');
    }
  },


  // ════════════════════════════════════════════════
  // 9. LOGIN / REGISTRO
  // ════════════════════════════════════════════════
  auth: {
    render: () => `
      <div class="fade-in" style="width:100%;">
        <button class="btn-back" onclick="window.history.back()">
          <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Volver
        </button>

        <div class="auth-hero">
          <div class="auth-avatar-big">✦</div>
          <h2 style="margin:12px 0 4px;">Bienvenida a ARI</h2>
          <p class="caption" style="margin:0 0 20px;">Tu asistente de belleza personal</p>
        </div>

        <div class="card auth-card">
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-login" data-tab="login">Iniciar Sesión</button>
            <button class="auth-tab" id="tab-register" data-tab="register">Crear Cuenta</button>
          </div>

          <!-- LOGIN FORM -->
          <form id="form-login" class="auth-form">
            <div class="form-group">
              <label class="form-label" for="login-email">📧 Correo electrónico</label>
              <input type="email" id="login-email" placeholder="tu@email.com" required autocomplete="email">
            </div>
            <div class="form-group">
              <label class="form-label" for="login-pass">🔒 Contraseña</label>
              <input type="password" id="login-pass" placeholder="••••••••" required autocomplete="current-password">
            </div>
            <button type="submit" class="btn-primary" id="btn-login">
              Iniciar Sesión
            </button>
            <p id="login-error" class="auth-error"></p>
          </form>

          <!-- REGISTER FORM -->
          <form id="form-register" class="auth-form" style="display:none;">
            <div class="form-group">
              <label class="form-label" for="reg-name">👤 Nombre completo</label>
              <input type="text" id="reg-name" placeholder="María García" required autocomplete="name">
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-email">📧 Correo electrónico</label>
              <input type="email" id="reg-email" placeholder="tu@email.com" required autocomplete="email">
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-pass">🔒 Contraseña</label>
              <input type="password" id="reg-pass" placeholder="Mínimo 6 caracteres" required minlength="6" autocomplete="new-password">
            </div>
            <div class="form-group">
              <label class="form-label" for="reg-skin">🌸 Tipo de piel (opcional)</label>
              <select id="reg-skin">
                <option value="">— Seleccionar después —</option>
                <option value="grasa">🫧 Grasa</option>
                <option value="seca">🌵 Seca</option>
                <option value="mixta">✨ Mixta</option>
                <option value="normal">💫 Normal</option>
                <option value="sensible">🌹 Sensible</option>
              </select>
            </div>
            <button type="submit" class="btn-primary" id="btn-register">
              Crear mi Cuenta
            </button>
            <p id="register-error" class="auth-error"></p>
          </form>
        </div>

        <p class="caption" style="text-align:center; margin-top:16px;">
          🔒 Tus datos están protegidos con cifrado de extremo a extremo.
        </p>
      </div>
    `,

    init: () => {
      if (window.lucide) lucide.createIcons();

      // If already logged in, redirect to profile
      if (store.state.authUser) {
        router.navigate('/perfil');
        return;
      }

      // Tab switching
      const tabLogin    = document.getElementById('tab-login');
      const tabRegister = document.getElementById('tab-register');
      const formLogin   = document.getElementById('form-login');
      const formRegister = document.getElementById('form-register');

      tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        formLogin.style.display = 'block';
        formRegister.style.display = 'none';
      });

      tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        formRegister.style.display = 'block';
        formLogin.style.display = 'none';
      });

      // Login submit
      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const pass  = document.getElementById('login-pass').value;
        const btn   = document.getElementById('btn-login');
        const errEl = document.getElementById('login-error');
        errEl.textContent = '';
        btn.disabled = true;
        btn.textContent = 'Entrando...';

        try {
          await sbSignIn(email, pass);
          showToast('¡Bienvenida de vuelta! 💖', 'success');
          setTimeout(() => router.navigate('/'), 600);
        } catch (err) {
          errEl.textContent = err.message === 'Invalid login credentials'
            ? 'Correo o contraseña incorrectos.'
            : err.message;
          btn.disabled = false;
          btn.textContent = 'Iniciar Sesión';
        }
      });

      // Register submit
      formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name  = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const pass  = document.getElementById('reg-pass').value;
        const skin  = document.getElementById('reg-skin').value;
        const btn   = document.getElementById('btn-register');
        const errEl = document.getElementById('register-error');
        errEl.textContent = '';
        btn.disabled = true;
        btn.textContent = 'Creando cuenta...';

        try {
          await sbSignUp(email, pass, name, skin);
          showToast('¡Cuenta creada exitosamente! Revisa tu correo para confirmar. 🎉', 'success');
          setTimeout(() => router.navigate('/'), 1200);
        } catch (err) {
          const msg = err.message.includes('already registered')
            ? 'Este correo ya tiene una cuenta. Intenta iniciar sesión.'
            : err.message;
          errEl.textContent = msg;
          btn.disabled = false;
          btn.textContent = 'Crear mi Cuenta';
        }
      });
    }
  },


  // ════════════════════════════════════════════════
  // 10. PERFIL DE USUARIO
  // ════════════════════════════════════════════════
  profile: {
    render: () => {
      const user    = store.state.authUser;
      const profile = store.state.authProfile;

      if (!user) {
        return `
          <div class="card fade-in" style="text-align:center;">
            <p>No has iniciado sesión.</p>
            <button onclick="router.navigate('/login')" class="btn-primary">Iniciar Sesión</button>
          </div>`;
      }

      const name     = profile?.full_name || user.email?.split('@')[0] || 'Usuario';
      const initial  = name.charAt(0).toUpperCase();
      const skinType = profile?.skin_type || 'Sin definir';
      const skinEmoji = { grasa: '🫧', seca: '🌵', mixta: '✨', normal: '💫', sensible: '🌹' };
      const createdAt = new Date(user.created_at).toLocaleDateString('es-PE', {
        year: 'numeric', month: 'long', day: 'numeric'
      });

      // Historial de escaneo
      let lastScanHTML = '';
      if (profile && profile.last_scan_result) {
        const scan = profile.last_scan_result;
        const scanDate = profile.updated_at ? new Date(profile.updated_at).toLocaleDateString() : 'Reciente';
        lastScanHTML = `
          <div class="card">
            <h3 style="font-size:1em; margin-bottom:12px;">🧴 Mi Último Diagnóstico (${scanDate})</h3>
            <div class="diag-row">
              <span class="diag-label">Tipo de Piel</span>
              <span class="diag-value" style="font-weight:700; color:var(--color-primary);">${(scan.tipoPielDetectado || 'N/A').toUpperCase()}</span>
            </div>
            <div class="diag-row">
              <span class="diag-label">💧 Hidratación</span>
              <span class="diag-value">${scan.nivelHidratacion || 0}%</span>
            </div>
            <div class="diag-row">
              <span class="diag-label">✨ Luminosidad</span>
              <span class="diag-value">${scan.indiceLuminosidad || 0}%</span>
            </div>
            <div class="diag-row" style="border-bottom:none;">
              <span class="diag-label">Zonas de Atención</span>
              <span class="diag-value">${(scan.zonasPreocupacion || []).join(', ') || 'General'}</span>
            </div>
            <button id="btn-reload-last-scan" class="btn-primary" style="font-size:0.85em; padding:8px 16px; margin-top:10px;">
              🔄 Cargar Rutina de este Escaneo
            </button>
          </div>
        `;
      } else {
        lastScanHTML = `
          <div class="card" style="text-align:center;">
            <h3 style="font-size:1em; margin-bottom:12px;">🧴 Mi Último Diagnóstico</h3>
            <p class="caption">Aún no has guardado ningún diagnóstico de escaneo.</p>
            <button onclick="router.navigate('/escaneo')" class="btn-secondary" style="font-size:0.85em; padding:8px 16px; margin-top:4px;">
              📷 Realizar Escaneo con IA
            </button>
          </div>
        `;
      }

      return `
        <div class="fade-in" style="width:100%;">
          <button class="btn-back" onclick="router.navigate('/')">
            <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Inicio
          </button>

          <div class="profile-hero">
            <div class="profile-avatar-big">${initial}</div>
            <h2 style="margin:12px 0 4px;">${name}</h2>
            <p class="caption" style="margin:0;">${user.email}</p>
          </div>

          <div class="card">
            <h3 style="font-size:1em; margin-bottom:16px;">✦ Mi Perfil de Belleza</h3>

            <div class="diag-row">
              <span class="diag-label">Nombre</span>
              <span class="diag-value">${name}</span>
            </div>
            <div class="diag-row">
              <span class="diag-label">Tipo de piel</span>
              <span class="diag-value">${skinEmoji[skinType] || '🌿'} ${skinType.charAt(0).toUpperCase() + skinType.slice(1)}</span>
            </div>
            <div class="diag-row" style="border-bottom:none;">
              <span class="diag-label">Miembro desde</span>
              <span class="diag-value" style="font-size:0.82em;">${createdAt}</span>
            </div>
          </div>

          ${lastScanHTML}

          <!-- Task 10: Historial de pedidos -->
          <div class="card">
            <h3 style="font-size:1em; margin-bottom:12px;">🛍️ Mis Últimos Pedidos</h3>
            <div id="orders-container">
              <p class="caption" style="text-align:center;">Cargando pedidos...</p>
            </div>
          </div>

          <div class="card">
            <h3 style="font-size:1em; margin-bottom:12px;">✏️ Editar Perfil</h3>
            <form id="form-edit-profile">
              <div class="form-group">
                <label class="form-label" for="edit-name">Nombre</label>
                <input type="text" id="edit-name" value="${name}">
              </div>
              <div class="form-group">
                <label class="form-label" for="edit-skin">Tipo de piel</label>
                <select id="edit-skin">
                  <option value="" ${!profile?.skin_type ? 'selected' : ''}>— Sin definir —</option>
                  <option value="grasa" ${skinType === 'grasa' ? 'selected' : ''}>🫧 Grasa</option>
                  <option value="seca" ${skinType === 'seca' ? 'selected' : ''}>🌵 Seca</option>
                  <option value="mixta" ${skinType === 'mixta' ? 'selected' : ''}>✨ Mixta</option>
                  <option value="normal" ${skinType === 'normal' ? 'selected' : ''}>💫 Normal</option>
                  <option value="sensible" ${skinType === 'sensible' ? 'selected' : ''}>🌹 Sensible</option>
                </select>
              </div>
              <button type="submit" class="btn-primary" id="btn-save-profile">Guardar Cambios</button>
            </form>
          </div>

          <button class="btn-secondary" id="btn-logout" style="margin-top:8px;">
            Cerrar Sesión
          </button>
        </div>
      `;
    },

    init: () => {
      if (window.lucide) lucide.createIcons();

      if (!store.state.authUser) {
        router.navigate('/login');
        return;
      }

      // Load last scan reload button
      const reloadBtn = document.getElementById('btn-reload-last-scan');
      if (reloadBtn && store.state.authProfile?.last_scan_result) {
        reloadBtn.addEventListener('click', () => {
          store.setState({ diagnostico: store.state.authProfile.last_scan_result });
          router.navigate('/procesando');
        });
      }

      // Load orders
      sbGetOrders(store.state.authUser.id, 5).then(orders => {
        const container = document.getElementById('orders-container');
        if (!orders || orders.length === 0) {
          container.innerHTML = '<p class="caption" style="text-align:center;">Aún no tienes pedidos.</p>';
          return;
        }
        
        container.innerHTML = orders.map(o => `
          <div style="padding:10px; border:1px solid rgba(0,0,0,0.05); border-radius:12px; margin-bottom:10px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span style="font-weight:600; font-size:0.9em;">Pedido</span>
              <span class="badge" style="margin:0; padding:2px 8px;">${o.status.toUpperCase()}</span>
            </div>
            <div class="caption">Fecha: ${new Date(o.created_at).toLocaleDateString()}</div>
            <div class="caption">Total: <strong style="color:var(--color-primary)">S/ ${o.total.toFixed(2)}</strong></div>
            <div class="caption" style="margin-top:4px;">${o.items.length} items</div>
          </div>
        `).join('');
      });

      // Edit profile form
      const form = document.getElementById('form-edit-profile');
      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-save-profile');
        btn.disabled = true;
        btn.textContent = 'Guardando...';

        try {
          const newName = document.getElementById('edit-name').value.trim();
          const newSkin = document.getElementById('edit-skin').value;
          const updated = await sbUpdateProfile(store.state.authUser.id, {
            full_name: newName,
            skin_type: newSkin || null
          });
          store.setState({ authProfile: updated });

          // Also update local skin type for the engine
          if (newSkin) store.updatePerfil('tipoPiel', newSkin);

          showToast('Perfil actualizado correctamente 💖', 'success');
          updateAuthUI();
          setTimeout(() => router.navigate('/perfil'), 800);
        } catch (err) {
          showToast('Error al guardar: ' + err.message, 'error');
          btn.disabled = false;
          btn.textContent = 'Guardar Cambios';
        }
      });

      // Logout
      document.getElementById('btn-logout')?.addEventListener('click', async () => {
        try {
          await sbSignOut();
          showToast('Sesión cerrada. ¡Hasta pronto! 👋', 'success');
          setTimeout(() => router.navigate('/'), 500);
        } catch (err) {
          showToast('Error: ' + err.message, 'error');
        }
      });
    }
  },

  privacy: {
    render: () => `
      <div class="card fade-in" style="line-height:1.6;">
        <button class="btn-back" onclick="router.navigate('/')">
          <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Inicio
        </button>
        <h2 style="color:var(--color-primary); margin-bottom:12px;">🔒 Política de Privacidad de ARI</h2>
        <p style="color:var(--color-text-soft); font-size:0.92em; margin-bottom:20px;">
          En Aruma, la seguridad y la privacidad de tus datos son nuestra máxima prioridad. Aquí te explicamos cómo protegemos tu información:
        </p>

        <h4 style="margin:16px 0 6px; color:var(--color-text);">1. Análisis Facial 100% Local</h4>
        <p style="font-size:0.88em; color:var(--color-text-soft); margin-top:0;">
          El escáner de rostro utiliza <strong>MediaPipe FaceMesh</strong> ejecutándose localmente en tu propio dispositivo mediante WebAssembly. <strong>Ninguna imagen o video de tu rostro se envía a Internet ni a servidores de terceros</strong>.
        </p>

        <h4 style="margin:16px 0 6px; color:var(--color-text);">2. Datos Sincronizados de Forma Segura</h4>
        <p style="font-size:0.88em; color:var(--color-text-soft); margin-top:0;">
          Si decides registrarte para guardar tu historial, tus preferencias y el diagnóstico resumido de tu piel se guardarán de forma encriptada en la base de datos de <strong>Supabase</strong>. Nadie más tiene acceso a tus diagnósticos.
        </p>

        <h4 style="margin:16px 0 6px; color:var(--color-text);">3. Control Total de tus Datos</h4>
        <p style="font-size:0.88em; color:var(--color-text-soft); margin-top:0;">
          Puedes editar tu tipo de piel o tu nombre, o bien cerrar tu sesión en cualquier momento desde tu panel de perfil. Si decides darte de baja, tus datos se eliminarán de inmediato.
        </p>

        <button onclick="router.navigate('/')" class="btn-primary" style="margin-top:20px;">
          Entendido, Volver al Inicio
        </button>
      </div>
    `,
    init: () => {
      if (window.lucide) lucide.createIcons();
    }
  },

  // ════════════════════════════════════════════════
  // 11. CATALOG (Task 8)
  // ════════════════════════════════════════════════
  catalog: {
    _state: {
      query: '',
      fase: 'all',
      sort: 'asc'
    },
    render: () => `
      <div class="fade-in" style="width:100%;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h2 style="margin:0;">Catálogo Aruma</h2>
          <button class="icon-btn-small" onclick="router.navigate('/')" style="background:none; border:none; font-size:1.5em; cursor:pointer;">✕</button>
        </div>

        <div class="card" style="margin-bottom:16px;">
          <div class="form-group" style="margin-bottom:10px;">
            <input type="text" id="cat-search" placeholder="🔍 Buscar producto o marca..." value="${Screens.catalog._state.query}">
          </div>
          
          <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:8px; scrollbar-width:none;">
            <button class="filter-chip ${Screens.catalog._state.fase === 'all' ? 'active' : ''}" data-fase="all">Todos</button>
            <button class="filter-chip ${Screens.catalog._state.fase === '1' ? 'active' : ''}" data-fase="1">Limpieza</button>
            <button class="filter-chip ${Screens.catalog._state.fase === '2' ? 'active' : ''}" data-fase="2">Tónicos</button>
            <button class="filter-chip ${Screens.catalog._state.fase === '3' ? 'active' : ''}" data-fase="3">Sérums</button>
            <button class="filter-chip ${Screens.catalog._state.fase === '4' ? 'active' : ''}" data-fase="4">Hidratación</button>
            <button class="filter-chip ${Screens.catalog._state.fase === '5' ? 'active' : ''}" data-fase="5">Solares</button>
          </div>

          <div style="display:flex; justify-content:flex-end;">
            <button id="cat-sort" style="background:none; border:none; color:var(--color-primary); font-weight:600; cursor:pointer;">
              Ordenar por Precio ${Screens.catalog._state.sort === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>

        <div id="cat-results"></div>
      </div>
    `,
    init: () => {
      const renderResults = () => {
        let results = [...PRODUCTOS_CATALOGO];
        const st = Screens.catalog._state;
        
        // Filter query
        if (st.query) {
          const q = st.query.toLowerCase();
          results = results.filter(p => 
            p.nombre.toLowerCase().includes(q) || 
            p.marca.toLowerCase().includes(q)
          );
        }
        
        // Filter fase
        if (st.fase !== 'all') {
          results = results.filter(p => p.fase === parseInt(st.fase));
        }

        // Sort
        results.sort((a, b) => st.sort === 'asc' ? a.precio - b.precio : b.precio - a.precio);

        // Limit to 40 for perf
        const html = results.slice(0, 40).map(p => renderCompactCard(p, '')).join('');
        const container = document.getElementById('cat-results');
        if (container) {
          container.innerHTML = html || '<p class="caption" style="text-align:center;">No se encontraron productos.</p>';
        }

        // Rebind add to cart
        document.querySelectorAll('#cat-results .add-to-cart').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            const prod = PRODUCTOS_CATALOGO.find(p => p.id === id);
            if (prod) {
              store.addToCart(prod);
              const orig = btn.textContent;
              btn.textContent = '✓ Añadido';
              btn.style.background = 'var(--color-success)';
              btn.style.color = 'white';
              setTimeout(() => {
                btn.textContent = orig;
                btn.style.background = '';
                btn.style.color = '';
              }, 2000);
            }
          });
        });
      };

      // Initial render
      renderResults();

      // Bind events
      const searchInput = document.getElementById('cat-search');
      searchInput?.addEventListener('input', (e) => {
        Screens.catalog._state.query = e.target.value;
        renderResults();
      });

      document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          Screens.catalog._state.fase = chip.getAttribute('data-fase');
          renderResults();
        });
      });

      document.getElementById('cat-sort')?.addEventListener('click', (e) => {
        Screens.catalog._state.sort = Screens.catalog._state.sort === 'asc' ? 'desc' : 'asc';
        e.target.textContent = `Ordenar por Precio ${Screens.catalog._state.sort === 'asc' ? '↑' : '↓'}`;
        renderResults();
      });
    }
  }

};

