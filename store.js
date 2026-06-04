// store.js - Global State Management

const store = {
  state: {
    perfilUsuario: {
      tipoPiel:      'normal',
      preocupaciones: [],
      experiencia:   'principiante',
      presupuesto:   'medio',
      sensibilidad:  'baja'
    },
    diagnostico:      null,
    rutinaGenerada:   null,
    carrito:          [],
    magentaPoints:    1240,
    nivelMagenta:     'Magenta Lover 💖',
    darkMode:         false,
    a11yMode:         false,
    regaloMode:       false,
    authUser:         null,
    authProfile:      null
  },

  listeners: [],

  subscribe(listener) { this.listeners.push(listener); },

  notify() { this.listeners.forEach(fn => fn(this.state)); },

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  },

  updatePerfil(key, value) {
    this.state.perfilUsuario[key] = value;
    this.notify();
  },

  addToCart(producto) {
    const itemIndex = this.state.carrito.findIndex(p => p.id === producto.id);
    if (itemIndex !== -1) {
      const item = this.state.carrito[itemIndex];
      if (item.cantidad < 2) {
        const newCarrito = [...this.state.carrito];
        newCarrito[itemIndex] = { ...item, cantidad: item.cantidad + 1 };
        this.state.carrito = newCarrito;
        this.notify();
        this._syncCartToSupabase();
      } else {
        // Friendly inline alert instead of browser alert
        const msg = document.createElement('div');
        msg.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#fff;border:2px solid #FE0182;color:#FE0182;padding:10px 20px;border-radius:20px;font-weight:600;font-size:14px;z-index:9999;box-shadow:0 4px 16px rgba(254,1,130,0.2)';
        msg.textContent = '⚠️ Máximo 2 unidades del mismo producto.';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 2500);
      }
    } else {
      this.state.carrito.push({ ...producto, cantidad: 1 });
      this.notify();
      this._syncCartToSupabase();
    }
  },

  removeFromCart(id) {
    this.state.carrito = this.state.carrito.filter(p => p.id !== id);
    this.notify();
    this._syncCartRemove(id);
  },

  // ── Supabase cart sync (Task 9) ──
  async _syncCartToSupabase() {
    if (!this.state.authUser) return;
    try {
      const userId = this.state.authUser.id;
      // Upsert all current cart items
      const upserts = this.state.carrito.map(item => ({
        user_id: userId,
        product_id: item.id,
        cantidad: item.cantidad
      }));
      if (upserts.length > 0) {
        await supabase
          .from('cart_items')
          .upsert(upserts, { onConflict: 'user_id,product_id' });
      }
    } catch (e) {
      console.warn('Cart sync error:', e.message);
    }
  },

  async _syncCartRemove(productId) {
    if (!this.state.authUser) return;
    try {
      await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', this.state.authUser.id)
        .eq('product_id', productId);
    } catch (e) {
      console.warn('Cart remove sync error:', e.message);
    }
  },

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
    if (this.state.darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    // Update icon
    const btn = document.getElementById('toggle-dark');
    if (btn) {
      btn.innerHTML = this.state.darkMode
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';
      if (window.lucide) lucide.createIcons();
    }
  },

  toggleA11y() {
    this.setState({ a11yMode: !this.state.a11yMode });
    document.body.classList.toggle('a11y-mode', this.state.a11yMode);
  },

  async addMagentaPoints(points, reason = 'Actividad ARI') {
    this.setState({ magentaPoints: this.state.magentaPoints + points });

    // Update UI text
    const mpText = document.getElementById('mp-puntos-text');
    if (mpText) mpText.textContent = `${this.state.magentaPoints.toLocaleString()} pts`;

    // Update progress bar (simulated: max 2000 pts to next level)
    const progress = Math.min(100, Math.round((this.state.magentaPoints / 2000) * 100));
    const bar = document.getElementById('mp-progress-bar');
    if (bar) bar.style.width = `${progress}%`;

    // Float animation
    if (window.showPointsFloat) {
      window.showPointsFloat(points);
    }

    // ── Persist to Supabase (Task 7) ──
    if (this.state.authUser) {
      try {
        await supabase.from('magenta_points').insert({
          user_id: this.state.authUser.id,
          points: points,
          reason: reason
        });
      } catch (e) {
        console.warn('Magenta points sync error:', e.message);
      }
    }
  }
};
