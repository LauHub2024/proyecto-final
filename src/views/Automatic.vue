<template>
  <div class="app-shell">

    <!-- HEADER -->
    <header class="topbar">
      <div class="topbar-left">

        <button class="back-btn" @click="router.push('/list')">
          <span class="material-symbols-outlined">
            arrow_back
          </span>
        </button>

        <div class="brand-wrapper">
          <div class="brand-avatar"></div>
          <span class="brand-title">Nutrilist</span>
        </div>

      </div>

      <button class="icon-btn">
        <span class="material-symbols-outlined">auto_awesome</span>
      </button>
    </header>

    <!-- CONTENT -->
    <main class="content">

      <!-- HERO -->
      <section class="hero">
        <h1>Lista automática</h1>

        <p>
          Generamos una lista inteligente con alimentos esenciales
          para ayudarte a organizar tu semana.
        </p>
      </section>

      <!-- SUMMARY -->
      <section class="summary-card">

        <div class="summary-row">
          <div>
            <span class="summary-label">Productos</span>
            <h2>{{ totalItems }}</h2>
          </div>

          <div class="divider"></div>

          <div>
            <span class="summary-label">Categorías</span>
            <h2>4</h2>
          </div>
        </div>

      </section>

      <!-- CATEGORIES -->
      <section class="categories">

        <div
          v-for="category in categories"
          :key="category.title"
          class="category-card"
        >

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

          <div class="items">

            <label
              v-for="item in category.items"
              :key="item.name"
              class="item"
            >

              <div class="left-item">

                <input type="checkbox" v-model="item.checked" />

                <div class="info">
                  <span class="name">{{ item.name }}</span>
                  <span class="details">{{ item.details }}</span>
                </div>

              </div>

              <span class="qty">
                {{ item.qty }}
              </span>

            </label>

          </div>

        </div>

      </section>

      <!-- ACTION -->
      <section class="action-card">

        <h3>Lista generada correctamente</h3>

        <p>
          Puedes editar esta lista, marcar productos
          comprados o compartirla.
        </p>

        <button
          class="primary-btn"
          @click="router.push('/list')"
        >
          Guardar lista
        </button>

      </section>

    </main>

  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = reactive([
  {
    title: "Frutas",
    icon: "nutrition",
    badge: "FRESCOS",
    items: [
      { name: "Banano", details: "Rico en potasio", qty: "6 und", checked: false },
      { name: "Manzana", details: "Snack saludable", qty: "4 und", checked: false },
      { name: "Aguacate", details: "Grasas saludables", qty: "2 und", checked: false },
    ],
  },
  {
    title: "Verduras",
    icon: "eco",
    badge: "VEGETALES",
    items: [
      { name: "Tomate", details: "Ideal para ensaladas", qty: "500g", checked: false },
      { name: "Lechuga", details: "Fresca y ligera", qty: "1 und", checked: false },
      { name: "Zanahoria", details: "Alta en vitamina A", qty: "4 und", checked: false },
    ],
  },
  {
    title: "Carnes",
    icon: "restaurant",
    badge: "PROTEÍNA",
    items: [
      { name: "Pechuga de pollo", details: "Alta proteína", qty: "1kg", checked: false },
      { name: "Carne molida", details: "Para almuerzos", qty: "500g", checked: false },
    ],
  },
  {
    title: "Lácteos",
    icon: "breakfast_dining",
    badge: "REFRIGERADO",
    items: [
      { name: "Leche", details: "Entera", qty: "2L", checked: false },
      { name: "Yogurt griego", details: "Proteína y calcio", qty: "500g", checked: false },
      { name: "Queso mozzarella", details: "Ideal para recetas", qty: "300g", checked: false },
    ],
  },
]);

const totalItems = computed(() =>
  categories.reduce((a, c) => a + c.items.length, 0)
);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");

* {
  box-sizing: border-box;
}

.app-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  background: #faf9f5;
  font-family: "Inter", sans-serif;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 249, 245, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #ececec;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-btn,
.icon-btn {
  border: none;
  background: transparent;
  color: #2a674c;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: "Plus Jakarta Sans", sans-serif;
}

.content {
  padding: 16px 16px 120px;
}

.hero h1 {
  margin: 0;
  font-size: 34px;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.hero p {
  margin-top: 10px;
  color: #777;
  font-size: 13px;
  line-height: 1.5;
}

.summary-card {
  margin-top: 22px;
  background: #f2eee8;
  border-radius: 26px;
  padding: 18px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.divider {
  width: 1px;
  height: 44px;
  background: #ddd;
}

.category-card {
  background: #f2eee8;
  padding: 16px;
  border-radius: 26px;
  margin-bottom: 16px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}

.left {
  display: flex;
  gap: 8px;
  align-items: center;
}

.badge {
  background: #f6d8cf;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 10px;
}

.left-item {
  display: flex;
  gap: 12px;
}

.name {
  font-weight: 700;
}

.details {
  font-size: 11px;
  color: #777;
}

.qty {
  font-size: 12px;
  font-weight: 700;
  color: #2f7a57;
}

.action-card {
  margin-top: 22px;
  background: #2f7a57;
  color: white;
  padding: 22px;
  border-radius: 28px;
}

.primary-btn {
  width: 100%;
  margin-top: 18px;
  border: none;
  border-radius: 18px;
  background: white;
  color: #2f7a57;
  padding: 14px;
  font-weight: 800;
}

@media (max-width: 480px) {
  .summary-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .divider {
    width: 100%;
    height: 1px;
  }
}
</style>
