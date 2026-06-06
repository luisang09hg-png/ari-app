// app.js - Main Application Entry

document.addEventListener('DOMContentLoaded', () => {

  // ── Lucide Icons
  if (window.lucide) lucide.createIcons();

  // ── Header: Dark Mode & A11Y & Navigation
  document.getElementById('toggle-dark')?.addEventListener('click', () => store.toggleDarkMode());
  document.getElementById('toggle-a11y')?.addEventListener('click', () => store.toggleA11y());
  document.getElementById('btn-catalogo')?.addEventListener('click', () => router.navigate('/catalogo'));
  document.getElementById('btn-home')?.addEventListener('click', () => window.location.hash='#/');
  document.getElementById('cart-btn')?.addEventListener('click', () => router.navigate('/finalizar'));

  // ── Widget: Magenta Points
  const magentaWidget = document.getElementById('magenta-points-widget');
  const magentaToggleBtn = document.getElementById('btn-toggle-magenta');
  const magentaCloseBtn  = document.getElementById('btn-close-magenta');

  magentaToggleBtn.addEventListener('click', () => {
    magentaWidget.classList.toggle('collapsed');
  });
  magentaCloseBtn.addEventListener('click', () => {
    magentaWidget.classList.add('collapsed');
  });

  // Close Magenta widget clicking outside
  document.addEventListener('click', (e) => {
    if (!magentaWidget.classList.contains('collapsed')) {
      if (!magentaWidget.contains(e.target) && e.target !== magentaToggleBtn) {
        magentaWidget.classList.add('collapsed');
      }
    }
  });

  // ── Widget: Chat ARI
  const chatWidget   = document.getElementById('ari-chat-widget');
  const chatToggleBtn = document.getElementById('btn-toggle-chat');
  const chatCloseBtn  = document.getElementById('btn-close-chat');
  const chatMessages  = document.getElementById('chat-messages');

  const toggleChat = () => chatWidget.classList.toggle('collapsed');
  chatToggleBtn.addEventListener('click', toggleChat);
  chatCloseBtn.addEventListener('click', () => chatWidget.classList.add('collapsed'));

  // Claude API Proxy (Edge Function)

  const appendMessage = (text, type = 'user-msg') => {
    const msgs = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${type} fade-in`;
    msgDiv.textContent = text;
    msgs.appendChild(msgDiv);
    msgs.scrollTop = msgs.scrollHeight;
  };

  // Chat widget option buttons
  document.querySelectorAll('.chat-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const q = e.target.getAttribute('data-q');
      const text = e.target.textContent;
      appendMessage(text, 'user-msg');
      
      // Hide options
      document.getElementById('chat-options').style.display = 'none';
      
      // Fallback local logic for predefined questions
      setTimeout(() => {
        let ans = 'Interesante pregunta, te sugiero consultar con tu dermatólogo.';
        if (q === 'embarazo') ans = 'Algunos activos como el retinol no se recomiendan. Los productos sugeridos aquí son seguros, pero siempre consulta a tu médico.';
        if (q === 'economico') ans = 'He priorizado opciones de gran valor. También puedes revisar la sección de "Click & Collect" para ahorrar en envío.';
        if (q === 'resultados') ans = 'La constancia es clave. Normalmente verás cambios en textura a las 2 semanas, y mejoras profundas a las 6-8 semanas.';
        if (q === 'fragancia') ans = 'Hemos priorizado fórmulas dermatológicas; la mayoría no tiene fragancia añadida o es muy baja para no irritar.';
        if (q === 'pielsensible') ans = '¡Sí! He tenido en cuenta tu sensibilidad al recomendar fórmulas suaves y testeadas.';
        appendMessage(ans, 'ai-msg');
      }, 800);
    });
  });

  // Task 6: Free text input to Claude via Proxy + Rate limiting
  let claudeTimeout = null;
  let isLoadingClaude = false;

  const sendToClaude = async (userText) => {
    if (isLoadingClaude) return;
    
    // UI update before debounce
    appendMessage(userText, 'user-msg');
    const input = document.getElementById('chat-free-input');
    input.value = '';

    const msgs = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai-msg fade-in';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    msgs.appendChild(typingDiv);
    msgs.scrollTop = msgs.scrollHeight;

    if (claudeTimeout) clearTimeout(claudeTimeout);
    
    const btnSend = document.getElementById('btn-send-chat');
    if (btnSend) btnSend.disabled = true;
    isLoadingClaude = true;

    claudeTimeout = setTimeout(async () => {
      try {
        // Build headers — include auth if user is logged in
        const headers = { 'content-type': 'application/json' };
        try {
          const session = (await supabase.auth.getSession()).data?.session;
          if (session?.access_token) headers['Authorization'] = `Bearer ${session.access_token}`;
        } catch (_) { /* no-op: auth is optional for chat */ }

        const response = await fetch('https://copqlbydujqhgomtwpfi.supabase.co/functions/v1/ari-chat', {
          method: 'POST',
          headers,
          body: JSON.stringify({ message: userText })
        });
        
        const data = await response.json();

        typingDiv.remove();

        if (!response.ok || data.error) {
          const errMsg = data?.error || 'Error desconocido';
          console.error('Claude API Error:', errMsg);
          appendMessage('Uy, tuve un pequeño problema técnico. ¿Puedes intentarlo de nuevo?', 'ai-msg');
        } else {
          const text = data?.content?.[0]?.text;
          if (text) {
            appendMessage(text, 'ai-msg');
          } else {
            appendMessage('No pude generar una respuesta. Intenta con otra pregunta.', 'ai-msg');
          }
        }
      } catch (err) {
        typingDiv.remove();
        console.error('Claude API Error:', err);
        appendMessage('Uy, tuve un pequeño problema técnico. ¿Puedes intentarlo de nuevo?', 'ai-msg');
      } finally {
        isLoadingClaude = false;
        if (btnSend) btnSend.disabled = false;
      }
    }, 1500); // 1.5s debounce
  };

  const chatInput = document.getElementById('chat-free-input');
  const btnSend = document.getElementById('btn-send-chat');

  btnSend?.addEventListener('click', () => {
    if (chatInput.value.trim()) sendToClaude(chatInput.value.trim());
  });

  chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) sendToClaude(chatInput.value.trim());
  });

  // ── Store subscription: update cart badge + Magenta points UI
  store.subscribe((state) => {
    // Cart counter
    const count  = state.carrito.reduce((s, i) => s + i.cantidad, 0);
    const badge  = document.getElementById('cart-count');
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('visible', count > 0);
    }
  });

  // ── Points float animation helper (called from store.addMagentaPoints)
  window.showPointsFloat = (points, targetEl) => {
    const el = document.createElement('div');
    el.className = 'points-float';
    el.textContent = `+${points} pts 💖`;
    const rect = (targetEl || document.getElementById('btn-toggle-magenta')).getBoundingClientRect();
    el.style.left = `${rect.left}px`;
    el.style.top  = `${rect.top}px`;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  };

  // ── Iniciar Router
  router.init();

  // ── Init Supabase Auth state
  if (typeof initAuth === 'function') initAuth();

  // ── Register Service Worker
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch(console.error);
  }
});
