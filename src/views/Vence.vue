<template>
  <div class="app-shell">

    <!-- HEADER -->
    <header class="topbar">
      <button class="back-btn" @click="router.push('/dashboard')">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>

      <h1>Productos por vencer</h1>
    </header>

    <!-- CONTENT -->
    <main class="content">

      <section class="hero">
        <h2>⚠️ Atención</h2>
        <p>Estos productos están próximos a vencer. Consúmelos pronto.</p>
      </section>

      <section class="list">

        <article
          v-for="item in expiring"
          :key="item.name"
          class="item-card"
        >
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.detail }}</p>
          </div>

          <span class="badge">
            {{ item.days }}
          </span>
        </article>

      </section>

    </main>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const expiring = [
  {
    name: "Leche",
    detail: "Producto lácteo esencial",
    days: "1 día",
  },
  {
    name: "Huevos",
    detail: "Proteína básica diaria",
    days: "2 días",
  },
  {
    name: "Pasta",
    detail: "Carbohidrato básico",
    days: "3 días",
  },
]
</script>

<style scoped>
.app-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  background: #faf9f5;
  font-family: "Inter", sans-serif;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  position: sticky;
  top: 0;
  background: rgba(250,249,245,0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
}

.back-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  color: #2a674c;
}

.content {
  padding: 20px;
}

.hero h2 {
  margin: 0;
  font-size: 26px;
}

.hero p {
  color: #666;
  margin-top: 6px;
}

.list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-card {
  background: white;
  padding: 16px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 12px rgba(0,0,0,0.05);
}

.item-card h3 {
  margin: 0;
}

.item-card p {
  font-size: 12px;
  color: #777;
}

.badge {
  background: #ffe5e5;
  color: #b6171e;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}
</style>