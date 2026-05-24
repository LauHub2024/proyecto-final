Despensa.vue:   <template>
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
        <h1>Mi Despensa</h1>

        <p>
          Gestiona tus ingredientes con la precisión de un archivista
          botánico.
        </p>

        <!-- STATUS CARD -->
        <div class="status-card">
          <div>
            <span class="status-label">Estado Crítico</span>
            <h2>3 por vencer</h2>
          </div>

          <div class="divider"></div>

          <div>
            <span class="status-label">Total Items</span>
            <h3>42 productos</h3>
          </div>
        </div>
      </section>

      <!-- SEARCH -->
      <section class="search-section">
        <div class="search-box">
          <span class="material-symbols-outlined">search</span>

          <input
            type="text"
            placeholder="Buscar alimento en casa..."
          />
        </div>

        <!-- FILTERS -->
        <div class="filters">
  <button
    v-for="filter in filters"
    :key="filter.name"
    :class="{ active: filter.active }"
    @click="setActiveFilter(filter.name)"
  >
    {{ filter.name }}
  </button>
</div>

      </section>

      <!-- INVENTORY -->
      <section class="inventory-grid">
        <article
  v-for="item in inventory"
  :key="item.name"
  class="inventory-card"
  :class="{ selected: item.selected }"
  role="button"
  tabindex="0"
  @click="selectItem(item)"
>
          <!-- IMAGE -->
          <div class="card-image-wrapper">
            <img
              :src="item.image"
              :alt="item.name"
              class="card-image"
            />

            <div
              v-if="item.badge"
              class="badge"
              :class="item.badgeClass"
            >
              {{ item.badge }}
            </div>
          </div>

          <!-- CONTENT -->
          <div class="card-content">
            <div class="card-header">
              <h3>{{ item.name }}</h3>

              <span class="quantity">
                {{ item.quantity }}
              </span>
            </div>

            <p class="description">
              {{ item.category }} • {{ item.price }}
            </p>

            <div class="card-footer">
              <div class="expiry">
                <span
                  class="material-symbols-outlined expiry-icon"
                >
                  {{ item.icon }}
                </span>

                <span>{{ item.expiry }}</span>
              </div>

              <button class="manage-btn" @click.stop>
  GESTIONAR
</button>
            </div>
          </div>
        </article>

        <!-- RECIPE CARD -->
        <article class="recipe-card">
          <div class="recipe-image-wrapper">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2vj_umAOso_hfF6GtPTMErw4ybON8arzaZ6_lN1GaAuJWnI450TCj26-3RbkS2e192XqysdbD0PbzvaT00B4NgBXiWPQj4xhc48r7I-N58ft9yqNhFVXVjBnNF2qlPtylUBlPNto_HIogabTqV-vp9l19tQtSykZAhkDtRpIpgMq9rOpTqrk71DT1BtdFkcfkoTIzEBXbEqecfJ34P_Mfi6LFFhAsFuo8jFVVOaTO6YEe9uC3s_U1HK3cBIFvxcgcntBh0VAPO0k"
              alt="Recipe"
            />
          </div>

          <div class="recipe-content">
            <span class="recipe-label">
              SUGERENCIA DE RECETA
            </span>

            <h2>
              Tienes todo para una Ensalada de Temporada
            </h2>

            <p>
              Usa tus tomates y espinacas antes de que pierdan su
              frescura.
            </p>

            <button>
              Ver Receta Completa
            </button>
          </div>
        </article>
      </section>
    </main>

    <!-- FAB -->
    <button class="fab">
      <span class="material-symbols-outlined">
        add
      </span>
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
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const filters = ref([
  { name: "Todos", active: true },
  { name: "Proteínas", active: false },
  { name: "Verduras", active: false },
]);

const setActiveFilter = (selected) => {
  filters.value.forEach((filter) => {
    filter.active = filter.name === selected;
  });
};

const inventory = ref([
  {
    name: "Tomates Chonto",
    quantity: "1.5 kg",
    category: "Verduras",
    price: "$ 8.500 COP",
    expiry: "Expira: 24 Oct",
    icon: "event_busy",
    badge: "VENCE HOY",
    badgeClass: "danger",
    selected: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgfDiBmE-kOVgZomudM923UGwF5rQLrVyb26Q56OhjJl74v4ZfAWSyylNRJlz00-jpso-ZwhXEUHZmgw7uP-4SZfNhTDvzIVNrjoOVEgQN2JSTXc0_ayx2ZT_JE4SyN-ivMeZxZ1B0chDzSQUA7LXkJ84-YZKBIQUp60i1IkMZLR976lr8VHe73vnnn4KVMleF-whr7qlHMnIv60BKDvhOju68TTlR0panLoaSbGDfV19Y70A4ekReM5S-0myTvQD6jGL4FqZIGwk3",
  },
  {
    name: "Leche Entera",
    quantity: "2 lts",
    category: "Lácteos",
    price: "$ 12.000 COP",
    expiry: "Expira: 27 Oct",
    icon: "schedule",
    badge: "PRONTO",
    badgeClass: "warning",
    selected: false,
    image:
      "https://saludconlupa.com/media/images/Leche2.width-1920.jpg",
  },
  {
    name: "Huevos AA",
    quantity: "1 docena",
    category: "Proteínas",
    price: "$ 15.600 COP",
    expiry: "Expira: 05 Nov",
    icon: "event_available",
    badge: "",
    selected: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6RnKF8nUfbPnDvGxTB7ht-zlzAZy5sJSQebcyX8Lol7Lig9YEqtJwjtX9tRFyOWE517BfwoPjMx0QuMyRTacr1W5CfO2REi0jYghqySJXT3dvDLLgxf9PKSghaubbfcDHr-7BgxSu7rEjcDOfNfYyWdkbTx9TcBtg3_xILxVA2Wij0KFedU57zvQypqppR36AEXUezSDu0Z4Loo3ovKpu12kuSyT3dBIhIKnCVUwgOZTtgsr1fhGC6_s52zt9bg1mNJwJ4G9znJ-i",
  },
  {
    name: "Arroz Integral",
    quantity: "5 kg",
    category: "Despensa",
    price: "$ 24.500 COP",
    expiry: "Larga duración",
    icon: "inventory",
    badge: "",
    selected: false,
    image:
      "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/7F99AEE8-50AA-4CAA-A340-81E4891F912F/Derivates/3de10392-9a13-48e5-9098-af5149c40c0a.jpg",
  },
  {
    name: "Aguacate Hass",
    quantity: "3 unid.",
    category: "Verduras",
    price: "$ 9.000 COP",
    expiry: "Expira: 29 Oct",
    icon: "event_available",
    badge: "",
    selected: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQWqNsH_Zcg3egafjs6-AmCszv9IMYZQ70zmEE06i6yMoUz_lX4CfReBsbnir_n2RbGVcFptHYE5g8zuF7ZslIG2LkpqPDYsLmA_4nbldJGqRpwlxlGk-d6hkxo_3dE0von19dc9DHceZc6pjKS3v_Iz5vVAngLvIuyqF2Ah3SY01CuOs8epgY61vYKyCfDGKYeX9odcTCdODrEP4rFDW1GoaRR3MiJe92sIrdir367Xi0Aq1ieuJ-f_G6SPgkwFGtxmjNPS_AGMhF",
  },
  {
    name: "Pasta Penne",
    quantity: "1 kg",
    category: "Despensa",
    price: "$ 6.800 COP",
    expiry: "Larga duración",
    icon: "inventory",
    badge: "",
    selected: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmLkGHAXcUEet6SkzQRH6hw122DlJgnhyW7J5v9V7md_hffcOVrhwmepF7hZXjSX-GLSkEj-p8DElElh8yT275Hxrl7HiUwr54NmiGd4F_W5sEfS9mzvyVzRlh6Vb3gcI8CFBlTq2fGwWVYRypqklRd3XZdH7w6-rFzxdfSOx9Ber-Z6DwogbNH9dvplAeZdurBziyM_PgHruJIRJ-eQjKt1Jed19iedMo6S1C10ka5jBof0fFp4Y0F-k9g_jrTQlt0QbrK4wPEc-l",
  }
]); 
const selectItem = (item) => {
  inventory.value.forEach((i) => {
    i.selected = i.name === item.name
  })
}
const navItems = ref([
  {
    icon: "dashboard",
    label: "Inicio",
    route: "/dashboard",
    active: false,
  },
  {
    icon: "inventory_2",
    label: "Despensa",
    route: "/despensa",
    active: true,
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
]);

const setActiveNav = (item) => {
  navItems.value.forEach((nav) => {
    nav.active = nav.label === item.label;
  });
  router.push(item.route);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #ececec;
  font-family: "Inter", sans-serif;
}

.app-shell {
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  background: #faf9f5;
  position: relative;
  overflow-x: hidden;
}

/* HEADER */

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 249, 245, 0.96);
  backdrop-filter: blur(12px);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.brand-title {
  font-size: 14px;
  font-weight: 800;
  color: #2a674c;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.icon-btn {
  border: none;
  background: transparent;
  color: #2a674c;
}

/* CONTENT */

.content {
  padding: 0 16px 120px;
}

.hero {
  margin-top: 10px;
}

.hero h1 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 34px;
  line-height: 1;
  margin: 0 0 8px;
  font-weight: 800;
  letter-spacing: -1px;
}

.hero p {
  font-size: 13px;
  color: #727272;
  line-height: 1.5;
  margin: 0;
}

/* STATUS */

.status-card {
  margin-top: 18px;
  background: #f2eee8;
  border-radius: 26px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-label {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #808080;
  margin-bottom: 4px;
  font-weight: 700;
}

.status-card h2 {
  margin: 0;
  color: #b6171e;
  font-size: 22px;
  font-weight: 800;
}

.status-card h3 {
  margin: 0;
  color: #2a674c;
  font-size: 22px;
  font-weight: 800;
}

.divider {
  width: 1px;
  height: 42px;
  background: #ddd;
}

/* SEARCH */

.search-section {
  margin-top: 24px;
}

.search-box {
  position: relative;
}

.search-box span {
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  color: #8b8b8b;
}

.search-box input {
  width: 100%;
  border: none;
  outline: none;
  background: #f2eee8;
  border-radius: 24px;
  padding: 15px 18px 15px 50px;
  font-size: 14px;
}

.filters {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  margin-top: 14px;
  padding-bottom: 4px;
}

.filters::-webkit-scrollbar {
  display: none;
}

.filters button {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: #ece7df;
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.filters button.active {
  background: #2f7a57;
  color: white;
}

/* GRID */

.inventory-grid {
  margin-top: 22px;
  display: grid;
  gap: 18px;
}

/* CARD */
.inventory-card {
    margin-bottom: 6px;
  background: white;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  border: 2px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.inventory-card.selected {
  background: #b1f0ce;
  border-color: #2f7a57;
  box-shadow: 0 6px 18px rgba(47, 122, 87, 0.18);
}
.inventory-card {
  background: white;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
}

.card-image-wrapper {
  position: relative;
  height: 500px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
  color: white;
}

.badge.danger {
  background: #b6171e;
}

.badge.warning {
  background: #75584d;
}

.card-content {
 padding: 18px 16px;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.quantity {
  background: #f6d8cf;
  color: #7c5c52;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.description {
  margin-top: 6px;
  font-size: 12px;
  color: #808080;
}

.card-footer {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.expiry {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #777;
  font-size: 11px;
  font-weight: 700;
}

.expiry-icon {
  font-size: 15px;
}

.manage-btn {
  border: none;
  background: transparent;
  color: #2a674c;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

/* RECIPE */

.recipe-card {
  background: #b1f0ce;
  border-radius: 26px;
  overflow: hidden;
}

.recipe-image-wrapper {
  height: 190px;
}

.recipe-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-content {
  padding: 22px;
}

.recipe-label {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #25543d;
}

.recipe-content h2 {
  margin: 10px 0;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.recipe-content p {
  margin: 0;
  color: #25543d;
  font-size: 13px;
  line-height: 1.5;
}

.recipe-content button {
  margin-top: 18px;
  border: none;
  background: #1d4d37;
  color: white;
  border-radius: 999px;
  padding: 12px 18px;
  font-size: 12px;
  font-weight: 700;
}

/* FAB */

.fab {
  position: fixed;
right: max(20px, calc((100vw - 1100px) / 2 + 20px));  bottom: 92px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #2f7a57;
  color: white;
  box-shadow: 0 10px 25px rgba(47, 122, 87, 0.28);
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
  backdrop-filter: blur(14px);
  border-top: 1px solid #ececec;
  display: flex;
  justify-content: space-around;
  padding: 10px 8px 16px;
}

.bottom-nav button {
  border: none;
  background: transparent;
  color: #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 18px;
  transition: all 0.2s ease;
}

.bottom-nav button.active {
  background: #2f7a57;
  color: white;
}

/* FILTERS */

.filters button {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: #ece7df;
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.filters button.active {
  background: #2f7a57;
  color: white;
}

.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}

/* RESPONSIVE */

@media (min-width: 768px) {
  .app-shell {
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  background: #faf9f5;
  position: relative;
  overflow-x: hidden;
}

  .bottom-nav {
     width: 100%;
  max-width: 1100px;
  }
}
</style>