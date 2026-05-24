List.vue: <template>
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
        <h1>Mi Lista</h1>

        <p>
          Presupuesto estimado:
          <span class="highlight">$245.000 COP</span>
        </p>

        <!-- ACTION BUTTONS -->
        <button
        class="primary-btn"
         @click="router.push('/automatic')"
>
          <span class="material-symbols-outlined">auto_awesome</span>
          Generar lista automática
        </button>

       <div class="share-wrapper">
  <button class="share-btn" @click="router.push('/compartir')">
    <span class="material-symbols-outlined">share</span>
    Compartir lista
  </button>
</div>
      </section>

      <!-- TABS -->
      <div class="tabs">
        <button class="active">Consumo Semanal</button>
        <button>Reserva Mensual</button>
      </div>

      <!-- CATEGORIES -->
      <section class="categories">

        <div
          v-for="category in categories"
          :key="category.title"
          class="category-card"
        >

          <!-- HEADER -->
          <div class="category-header">
            <div class="left">
              <span class="material-symbols-outlined icon">
                {{ category.icon }}
              </span>

              <h2>{{ category.title }}</h2>
            </div>

            <span class="badge">
              {{ category.badge }}
            </span>
          </div>

          <!-- ITEMS -->
          <div class="items">
            <label
              v-for="item in category.items"
              :key="item.name"
              class="item"
              :class="{ checked: item.checked }"
            >

              <div class="left-item">

                <input type="checkbox" v-model="item.checked" />

                <div class="info">
                  <span class="name">
                    {{ item.name }}
                  </span>

                  <span class="details">
                    {{ item.details }}
                  </span>
                </div>

              </div>

              <div class="price">
                <span>{{ item.price }}</span>
              </div>

            </label>
          </div>

        </div>

      </section>

      <!-- PROGRESS -->
      <section class="progress-card">

        <h3>Estado de compra</h3>

        <div class="big">
          <span class="percent">{{ progress }}%</span>
          <span class="label">completado</span>
        </div>

        <div class="bar">
          <div class="fill" :style="{ width: progress + '%' }"></div>
        </div>

        <p>
          Has completado {{ checkedItems }} de {{ totalItems }} productos.
        </p>

      </section>

      <!-- RECIPE -->
      <section class="recipe-card">
        <div class="overlay"></div>

        <div class="content-recipe">
          <span class="tag">Sugerencia</span>
          <h3>Bowl de Quinoa y Aguacate</h3>
        </div>
      </section>

      <!-- SUMMARY -->
      <section class="summary-card">

        <h3>Desglose estimado</h3>

        <div class="row">
          <span>Frescos</span>
          <strong>$85.000</strong>
        </div>

        <div class="row">
          <span>No perecederos</span>
          <strong>$142.000</strong>
        </div>

        <div class="row">
          <span>Otros</span>
          <strong>$18.000</strong>
        </div>

        <div class="total">
          <span>Total</span>
          <strong>$245.000</strong>
        </div>

      </section>

    </main>

    <!-- FAB -->
    <button class="fab">
      <span class="material-symbols-outlined">add</span>
    </button>

    <!-- NAV -->
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
import { reactive, computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = reactive([
  {
    title: "Frutas y Verduras",
    icon: "potted_plant",
    badge: "FRESCOS",
    items: [
      { name: "Banano", details: "1 racimo", price: "$4.500", checked: false },
      { name: "Aguacate", details: "2 unid", price: "$12.000", checked: false },
      { name: "Tomate", details: "500g", price: "$3.200", checked: true },
    ],
  },
  {
    title: "Proteínas",
    icon: "restaurant",
    badge: "FRÍO",
    items: [
      { name: "Pollo", details: "1kg", price: "$22.000", checked: false },
    ],
  },
]);

const totalItems = computed(() =>
  categories.reduce((a, c) => a + c.items.length, 0)
);

const checkedItems = computed(() =>
  categories.reduce(
    (a, c) => a + c.items.filter(i => i.checked).length,
    0
  )
);

const progress = computed(() =>
  Math.round((checkedItems.value / totalItems.value) * 100)
);
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
    active: false,
  },
  {
    icon: "shopping_basket",
    label: "Lista",
    route: "/list",
    active: true,   // ← Lista is active on THIS page
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
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");

* {
  box-sizing: border-box;
}
.share-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 8px;

  background: #eaeaea;
  color: #333;

  border: none;
  padding: 12px 18px;
  border-radius: 14px;

  font-weight: 700;
  cursor: pointer;

  transition: all 0.2s ease;
}

.share-btn:hover {
  background: #dddddd;
}

.share-btn .material-symbols-outlined {
  font-size: 18px;
}
.app-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  background: #faf9f5;
  font-family: "Inter", sans-serif;
}

/* HEADER */
.topbar {
  position: sticky;
  top: 0;
  background: #faf9f5;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
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
  font-weight: 800;
  color: #2a674c;
}

/* CONTENT */
.content {
  padding: 16px 16px 120px;
}

.hero h1 {
  font-size: 34px;
  font-weight: 800;
}

.hero p {
  font-size: 12px;
  color: #666;
}

.highlight {
  color: #2f7a57;
  font-weight: 800;
}

/* BUTTONS */
.primary-btn,
.secondary-btn {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  margin-top: 10px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.primary-btn {
  background: #2f7a57;
  color: white;
  border: none;
}

.secondary-btn {
  background: white;
  border: 1px solid #eee;
}

/* TABS */
.tabs {
  display: flex;
  gap: 8px;
  background: #e8e5de;
  padding: 4px;
  border-radius: 999px;
  width: fit-content;
  margin: 20px 0;
}

.tabs button {
  border: none;
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  background: transparent;
}

.tabs .active {
  background: #2f7a57;
  color: white;
}

/* CATEGORY */
.category-card {
  background: #f2eee8;
  padding: 16px;
  border-radius: 26px;
  margin-bottom: 16px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.left {
  display: flex;
  gap: 8px;
  align-items: center;
}

.badge {
  background: #f6d8cf;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
}

/* ITEMS */
.item {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 8px;
}

.item.checked {
  opacity: 0.5;
  text-decoration: line-through;
}

.left-item {
  display: flex;
  gap: 10px;
}

.name {
  font-weight: 700;
}

.details {
  font-size: 10px;
  color: #777;
}

/* PROGRESS */
.progress-card {
  background: #2f7a57;
  color: white;
  padding: 18px;
  border-radius: 26px;
}

.bar {
  height: 6px;
  background: rgba(255,255,255,0.3);
  border-radius: 10px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: white;
}

/* RECIPE */
.recipe-card {
  margin-top: 16px;
  height: 450px;
  border-radius: 26px;
  overflow: hidden;

  background-image: url("https://hips.hearstapps.com/hmg-prod/images/quinoa-aguacate-receta-elle-gourmet-68f08f8f2ce51.jpg?crop=1.00xw:0.708xh;0,0.176xh&resize=1200:*");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
}
.content-recipe {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 18px;
  color: white;
}
/* SUMMARY */
.summary-card {
  margin-top: 16px;
  background: white;
  padding: 16px;
  border-radius: 26px;
}

.row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin: 8px 0;
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 800;
  color: #2f7a57;
  margin-top: 10px;
}

/* FAB + NAV */
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

/* RESPONSIVE */

@media (min-width: 768px) {
  .app-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  background: #faf9f5;
  font-family: "Inter", sans-serif;
}

  .bottom-nav {
      z-index: 50;
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
}
</style>
