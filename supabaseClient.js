// supabaseClient.js - Supabase Connection

const SUPABASE_URL = 'https://copqlbydujqhgomtwpfi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcHFsYnlkdWpxaGdvbXR3cGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTg5ODQsImV4cCI6MjA5NjA3NDk4NH0.9OLq0TwvuYyCCxtiQDuyYIBjAoA_NgsHPhoQ0yVoDuk';

// Initialize the Supabase client (supabase-js loaded via CDN in index.html)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Auth Helper Functions ──

async function sbSignUp(email, password, fullName, skinType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName }
    }
  });
  if (error) throw error;

  // Update profile with skin_type if provided
  if (data.user && skinType) {
    await supabase
      .from('profiles')
      .update({ skin_type: skinType, full_name: fullName })
      .eq('id', data.user.id);
  }
  return data;
}

async function sbSignIn(email, password) {
  const { data, error } = await supabase.auth.signIn
    ? await supabase.auth.signIn({ email, password })
    : await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function sbSignOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

async function sbGetUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

async function sbGetProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

async function sbUpdateProfile(userId, updates) {
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ── Persistence Helpers (Tasks 7, 9, 10) ──

async function sbLoadMagentaPoints(userId) {
  const { data, error } = await supabase
    .from('magenta_points')
    .select('points')
    .eq('user_id', userId);
  
  if (!error && data) {
    const total = data.reduce((sum, row) => sum + row.points, 0);
    // Base 1240 points + db points
    const currentBase = 1240;
    store.setState({ magentaPoints: currentBase + total });
    
    // Update UI text without animating
    const mpText = document.getElementById('mp-puntos-text');
    if (mpText) mpText.textContent = `${store.state.magentaPoints.toLocaleString()} pts`;
    const progress = Math.min(100, Math.round((store.state.magentaPoints / 2000) * 100));
    const bar = document.getElementById('mp-progress-bar');
    if (bar) bar.style.width = `${progress}%`;
  }
}

async function sbSyncCart(userId) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('product_id, cantidad')
    .eq('user_id', userId);
  
  if (!error && data && data.length > 0) {
    // Reconstruct cart from db
    const cart = [];
    for (const row of data) {
      const prod = PRODUCTOS_CATALOGO.find(p => p.id === row.product_id);
      if (prod) {
        cart.push({ ...prod, cantidad: row.cantidad });
      }
    }
    // Update local state without triggering an immediate sync back
    store.state.carrito = cart;
    store.notify();
  }
}

async function sbCreateOrder(items, total) {
  const user = store.state.authUser;
  if (!user) return null;
  const { data, error } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      items: items, // JSONB
      total: total,
      status: 'pending'
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error creating order:', error);
    return null;
  }
  return data;
}

async function sbGetOrders(userId, limit = 5) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);
    
  if (error) {
    console.error('Error loading orders:', error);
    return [];
  }
  return data || [];
}

// ── Toast Notification ──
function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type} fade-in`;
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── Auth State Listener ──
supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_IN' && session?.user) {
    const profile = await sbGetProfile(session.user.id);
    store.setState({
      authUser: session.user,
      authProfile: profile
    });
    updateAuthUI();
    // Load persisted data
    sbLoadMagentaPoints(session.user.id);
    sbSyncCart(session.user.id);
  } else if (event === 'SIGNED_OUT') {
    store.setState({
      authUser: null,
      authProfile: null,
      carrito: [] // Clear local cart on logout
    });
    updateAuthUI();
  }
});

// ── Update Header UI based on auth state ──
function updateAuthUI() {
  const authBtn = document.getElementById('auth-btn');
  if (!authBtn) return;

  const user = store.state.authUser;
  const profile = store.state.authProfile;

  if (user) {
    const name = profile?.full_name || user.email?.split('@')[0] || 'Usuario';
    const initial = name.charAt(0).toUpperCase();
    authBtn.innerHTML = `<span class="auth-avatar">${initial}</span>`;
    authBtn.title = name;
    authBtn.onclick = () => router.navigate('/perfil');
  } else {
    authBtn.innerHTML = '<i data-lucide="user" style="width:18px;height:18px;"></i>';
    authBtn.title = 'Iniciar Sesión';
    authBtn.onclick = () => router.navigate('/login');
    if (window.lucide) lucide.createIcons();
  }
}

// ── Init auth state on page load ──
async function initAuth() {
  try {
    const user = await sbGetUser();
    if (user) {
      const profile = await sbGetProfile(user.id);
      store.setState({
        authUser: user,
        authProfile: profile
      });
      // Need to load here too if already signed in on page load
      sbLoadMagentaPoints(user.id);
      sbSyncCart(user.id);
    }
  } catch (e) {
    console.warn('Auth init:', e.message);
  }
  updateAuthUI();
}
