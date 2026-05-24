Dashboard.vue: <template>
  <div class="app-shell">

    <!-- HEADER -->
    <header class="topbar">
      <div class="brand-wrapper">
        <div class="brand-avatar"></div>
        <span class="brand-title">Nutrilist</span>
      </div>

      <button class="icon-btn">
        <span class="material-symbols-outlined">settings</span>
      </button>
    </header>

    <!-- CONTENT -->
    <main class="content">

      <!-- HERO -->
      <section class="hero">
        <h1>Dashboard</h1>
        <p>Tu despensa inteligente en un solo vistazo</p>

        <div class="status-card">
          <div>
            <span class="status-label">Estado general</span>
            <h2>3 críticos</h2>
          </div>

          <div class="divider"></div>

          <div>
            <span class="status-label">Total items</span>
            <h3>128 productos</h3>
          </div>
        </div>
      </section>

      <!-- QUICK CARDS -->
      <section class="quick-grid">

        <a
          href="/despensa"
          @click.prevent="router.push('/despensa')"
          class="quick-card"
        >
          <span class="material-symbols-outlined">inventory_2</span>
          <h3>Despensa</h3>
          <p>Gestiona alimentos</p>
        </a>

        <a
          href="/list"
          @click.prevent="router.push('/list')"
          class="quick-card"
        >
          <span class="material-symbols-outlined">shopping_basket</span>
          <h3>Lista</h3>
          <p>Compras pendientes</p>
        </a>

        <a
          href="/recetas"
          @click.prevent="router.push('/recetas')"
          class="quick-card"
        >
          <span class="material-symbols-outlined">restaurant_menu</span>
          <h3>Recetas</h3>
          <p>Ideas automáticas</p>
        </a>

      </section>

      <!-- ALERT -->
<section class="alert-card" @click="router.push('/vence')">
          <span class="material-symbols-outlined icon">
          notification_important
        </span>

        <div>
          <span class="alert-label">Acción urgente</span>
          <h3>3 productos vencen pronto</h3>
          <p>Revisa tu despensa hoy</p>
        </div>
      </section>

      <!-- INSIGHT -->
      <section class="insight-card">
        <h2>💡 Insight nutricional</h2>

        <p>
          La guayaba contiene más vitamina C que la naranja y fortalece el
          sistema inmune.
        </p>

        <button>Ver más</button>
      </section>

    </main>

    <!-- FAB -->
    <button class="fab">
      <span class="material-symbols-outlined">add</span>
    </button>

    <!-- BOTTOM NAV -->
    <nav class="bottom-nav">
      <button
        v-for="item in navItems"
        :key="item.label"
        :class="{ active: item.active }"
        @click="setActiveNav(item)"
      >
        <span class="material-symbols-outlined">
          {{ item.icon }}
        </span>

        <span>{{ item.label }}</span>
      </button>
    </nav>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const navItems = ref([
  {
    icon: "dashboard",
    label: "Inicio",
    route: "/dashboard",
    active: true,
  },
  {
    icon: "inventory_2",
    label: "Despensa",
    route: "/despensa",
    active: false,
  },
  {
    icon: "shopping_basket",
    label: "Lista",
    route: "/list",
    active: false,
  },
  {
    icon: "restaurant_menu",
    label: "Recetas",
    route: "/recetas",
    active: false,
  },
])

const setActiveNav = (item) => {
  navItems.value.forEach((nav) => {
    nav.active = nav.label === item.label
  })

  router.push(item.route)
}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");

/* RESET */
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* APP */
.app-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  background: #faf9f5;
  font-family: "Inter", sans-serif;
  position: relative;
}
.alert-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.alert-card:hover {
  transform: translateY(-2px);
}
/* HEADER */
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;

  width: 100%;

  background: rgba(250, 249, 245, 0.96);
  backdrop-filter: blur(12px);

  padding: 14px 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #eaeaea;
}

.brand-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2a674c;
  flex-shrink: 0;
}

.brand-title {
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #2a674c;
  font-size: 14px;
}

.icon-btn {
  border: none;
  background: transparent;
  color: #2a674c;
  cursor: pointer;
}

/* CONTENT */
.content {
  padding: 12px 16px 130px;
}

/* HERO */
.hero h1 {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  margin: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  line-height: 1.1;
}

.hero p {
  font-size: clamp(13px, 2vw, 16px);
  color: #777;
  margin-top: 6px;
}

/* STATUS CARD */
.status-card {
  margin-top: 18px;

  background: #f2eee8;
  border-radius: 26px;
  padding: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 18px;
  flex-wrap: wrap;
}

.status-label {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #888;
  font-weight: 700;
}

.status-card h2,
.status-card h3 {
  margin: 4px 0 0;
  font-weight: 800;
}

.status-card h2 {
  color: #b6171e;
}

.status-card h3 {
  color: #2a674c;
}

.divider {
  width: 1px;
  height: 40px;
  background: #ddd;
}

/* QUICK GRID */
.quick-grid {
  margin-top: 22px;

  display: grid;

grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}

.quick-card {
  background: white;
  border-radius: 22px;
  padding: 18px;

  text-decoration: none;
  color: inherit;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);

  transition: transform 0.2s ease;
}

.quick-card:hover {
  transform: translateY(-3px);
}

.quick-card .material-symbols-outlined {
  font-size: 30px;
  color: #2a674c;
}

.quick-card h3 {
  margin: 10px 0 0;
  font-weight: 800;
}

.quick-card p {
  margin: 6px 0 0;
  font-size: 13px;
  color: #777;
}

/* ALERT */
.alert-card {
  margin-top: 20px;
  flex-wrap: wrap; 
  background: #ffe5e5;
  border-radius: 22px;
  padding: 16px;

  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.alert-card .icon {
  color: #b6171e;
  font-size: 28px;
  flex-shrink: 0;
}

.alert-label {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 800;
  color: #b6171e;
}

.alert-card h3 {
  margin: 4px 0;
}

.alert-card p {
  margin: 0;
  color: #666;
}

/* INSIGHT */
.insight-card {
  overflow: hidden;
  margin-top: 20px;

  background: #2a674c;
  color: white;

  padding: 20px;
  border-radius: 26px;
}

.insight-card h2 {
  margin: 0;
  font-size: clamp(18px, 3vw, 24px);
}

.insight-card p {
  font-size: 14px;
  opacity: 0.92;
  line-height: 1.5;
}

.insight-card button {
  margin-top: 14px;

  border: none;
  background: white;
  color: #2a674c;

  padding: 10px 16px;
  border-radius: 999px;

  font-weight: 700;
  cursor: pointer;
}

/* FAB */
.fab {
  position: fixed;

  bottom: 92px;
right: max(20px, calc((100vw - 1100px) / 2 + 20px));
  width: 56px;
  height: 56px;

  border-radius: 50%;

  background: #2a674c;
  color: white;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 8px 24px rgba(0,0,0,0.18);

  cursor: pointer;

  z-index: 60;
}

/* BOTTOM NAV */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 1100px;

  background: rgba(250, 249, 245, 0.98);

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 10px 8px 14px;

  border-top: 1px solid #eee;

  z-index: 55;

  backdrop-filter: blur(14px);
}

.bottom-nav button {
  border: none;
  background: transparent;

  color: #808080;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4px;

  font-size: 10px;
  font-weight: 600;

  padding: 8px 12px;

  border-radius: 18px;

  transition: all 0.2s ease;

  min-width: 68px;

  cursor: pointer;
}

.bottom-nav button.active {
  background: #2f7a57;
  color: white;
}

.bottom-nav .material-symbols-outlined {
  font-size: 22px;
}

/* MATERIAL ICONS */
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}

/* TABLET */
@media (min-width: 768px) {

  .content {
    padding: 20px 24px 140px;
  }
.app-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
  .quick-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .status-card {
    padding: 24px;
  }

}

/* DESKTOP */
@media (min-width: 1200px) {

  .content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .quick-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero {
    margin-bottom: 26px;
  }

  .alert-card,
  .insight-card {
    max-width: 800px;
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {

  .content {
    padding: 10px 12px 120px;
  }

  .status-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .divider {
    width: 100%;
    height: 1px;
  }

  .quick-grid {
    grid-template-columns: 1fr;
  }

  .bottom-nav button {
    min-width: auto;
    padding: 8px;
  }

  .bottom-nav span:last-child {
    font-size: 9px;
  }
}
</style>