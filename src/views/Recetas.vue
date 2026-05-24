Recetas.vue: <template> 
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
        <h1>Recetas del día</h1>

        <p>
          Ideas deliciosas basadas en los ingredientes que ya tienes
          disponibles en casa.
        </p>
      </section>

      <!-- RECIPE CAROUSEL -->
      <section class="recipes-scroll">
        <article
          v-for="recipe in recipes"
          :key="recipe.title"
          class="recipe-card"
        >
          <div class="recipe-image-wrapper">
            <img :src="recipe.image" :alt="recipe.title" />
            <div class="recipe-badge">
              {{ recipe.badge }}
            </div>
          </div>

          <div class="recipe-content">
            <h2>{{ recipe.title }}</h2>

            <p>
              {{ recipe.description }}
            </p>

            <div class="macros">
              <div>
                <span>Prot</span>
                <strong>{{ recipe.protein }}</strong>
              </div>

              <div>
                <span>Carb</span>
                <strong>{{ recipe.carbs }}</strong>
              </div>

              <div>
                <span>Grasas</span>
                <strong>{{ recipe.fats }}</strong>
              </div>
            </div>

            <button class="recipe-btn">
              Ver Receta Completa
            </button>
          </div>
        </article>
      </section>

      <!-- EXPIRING -->
      <section class="expiring-section">
        <div class="section-header">
          <h2>Usa esto pronto</h2>

          <span class="section-badge">
            Próximos a vencer
          </span>
        </div>

        <article
          v-for="item in expiringItems"
          :key="item.name"
          class="expiring-card"
        >
          <div class="expiring-icon">
            <span class="material-symbols-outlined">
              {{ item.icon }}
            </span>
          </div>

          <div class="expiring-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.expiry }}</p>
          </div>

          <span class="expiring-qty">
            {{ item.quantity }}
          </span>
        </article>
      </section>

      <!-- SHOPPING -->
      <section class="shopping-card">
        <div class="shopping-icon">
          <span class="material-symbols-outlined">
            shopping_basket
          </span>
        </div>

        <div class="shopping-content">
          <h2>Completa tu menú semanal</h2>

          <p>
            Te faltan algunos ingredientes para preparar todas las recetas.
          </p>

          <button>
            Agregar faltantes
          </button>
        </div>
      </section>
    </main>

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
const recipes = [
  {
    title: "Bowl de Quinua & Aguacate",
    description:
      "Perfecto para aprovechar tus vegetales frescos y aguacates.",
    protein: "12g",
    carbs: "45g",
    fats: "18g",
    badge: "Saludable",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/quinoa-aguacate-receta-elle-gourmet-68f08f8f2ce51.jpg?crop=1.00xw:0.708xh;0,0.176xh&resize=1200:*",
  },
  {
    title: "Salmón al Horno",
    description:
      "Una receta alta en proteína con vegetales y romero fresco.",
    protein: "34g",
    carbs: "15g",
    fats: "22g",
    badge: "Alta proteína",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
  },
  {
  title: "Pasta Integral Mediterránea",
  description:
    "Una opción balanceada con vegetales y sabores mediterráneos.",
  protein: "18g",
  carbs: "52g",
  fats: "16g",
  badge: "Balanceado",
  image:
    "https://cdn.pixabay.com/photo/2016/08/15/17/11/pasta-salad-1595916_1280.jpg",
}
];

const expiringItems = [
  {
    name: "Huevos AA",
    expiry: "Expira en 2 días",
    quantity: "12 und",
    icon: "egg",
  },
  {
    name: "Yogurt Griego",
    expiry: "Expira hoy",
    quantity: "500g",
    icon: "nutrition",
  },
];

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
    active: false,
  },
  {
    icon: "restaurant_menu",
    label: "Recetas",
    route: "/recetas",
    active: true,
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
  display: flex;
  align-items: center;
  justify-content: center;
}

/* CONTENT */

.content {
  padding: 0 16px 110px;
}

.hero {
  margin-top: 12px;
}

.hero h1 {
  margin: 0;
  font-size: 34px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -1px;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.hero p {
  margin-top: 10px;
  font-size: 13px;
  color: #777;
  line-height: 1.5;
}

/* RECIPES */

.recipes-scroll {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  margin-top: 24px;
  padding-bottom: 12px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding-left: 16px;
}

.recipe-card {
  flex: 0 0 85%;
  max-width: 420px;
  background: white;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
  scroll-snap-align: start;
}

.recipe-image-wrapper {
  position: relative;
  height: 240px;
}

.recipe-image-wrapper img {
  width: 100%;
  height: 100%;
    display: block;
  object-fit: cover;
}

.recipe-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(42, 103, 76, 0.95);
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 999px;
}

.recipe-content {
  padding: 22px;
}

.recipe-content h2 {
  margin: 0;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.recipe-content p {
  margin-top: 10px;
  color: #777;
  font-size: 13px;
  line-height: 1.5;
}

.macros {
  margin-top: 18px;
  background: #f4f1ec;
  border-radius: 20px;
  padding: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

.macros span {
  display: block;
  font-size: 10px;
  color: #8b8b8b;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.macros strong {
  color: #2a674c;
  font-size: 14px;
}

.recipe-btn {
  width: 100%;
  margin-top: 18px;
  border: none;
  border-radius: 20px;
  background: #2f7a57;
  color: white;
  padding: 15px;
  font-size: 13px;
  font-weight: 700;
}

/* EXPIRING */

.expiring-section {
  margin-top: 34px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.section-badge {
  background: #ffe3df;
  color: #b6171e;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.expiring-card {
  background: white;
  border-radius: 22px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.expiring-icon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: #f4f1ec;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b6171e;
}

.expiring-info {
  flex: 1;
}

.expiring-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 800;
}

.expiring-info p {
  margin-top: 4px;
  font-size: 12px;
  color: #b6171e;
  font-weight: 600;
}

.expiring-qty {
  background: #f6d8cf;
  color: #7c5c52;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

/* SHOPPING */

.shopping-card {
  margin-top: 32px;
  background: #e7f5eb;
  border-radius: 28px;
  padding: 22px;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.shopping-icon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: #2f7a57;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.shopping-content h2 {
  margin: 0;
  font-size: 20px;
  line-height: 1.1;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.shopping-content p {
  margin-top: 8px;
  font-size: 13px;
  color: #4b5b52;
  line-height: 1.5;
}

.shopping-content button {
  margin-top: 16px;
  border: none;
  background: #2f7a57;
  color: white;
  border-radius: 999px;
  padding: 12px 18px;
  font-size: 12px;
  font-weight: 700;
}

/* NAV */

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
  padding: 8px 14px;
  border-radius: 18px;
  transition: all 0.2s ease;
}

.bottom-nav button.active {
  background: #2f7a57;
  color: white;
}

/* ICONS */

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
    margin: 0 auto;
  }

  .recipe-card {
    flex: 0 0 380px;
  }
}
</style>