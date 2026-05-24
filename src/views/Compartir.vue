<template>
  <div class="app-shell">

    <!-- HEADER -->
    <header class="topbar">
      <button class="back-btn" @click="router.push('/list')">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>

      <h1>Compartir lista</h1>
    </header>

    <!-- CONTENT -->
    <main class="content">

      <section class="hero">
        <h2>Comparte tu lista de compras</h2>
        <p>
          Envía tu lista de alimentos a familiares, pareja o amigos para que todos estén sincronizados.
        </p>
      </section>

      <!-- CARD -->
      <section class="share-card">

        <h3>Tu lista está lista para compartir</h3>

        <p>
          Puedes copiar el enlace o enviarlo directamente por tus apps favoritas.
        </p>

        <div class="actions">
          <button @click="copyLink">
            Copiar enlace
          </button>

          <button class="secondary" @click="shareFake">
            Compartir
          </button>
        </div>

        <p v-if="copied" class="copied">
          ✔ Enlace copiado al portapapeles
        </p>

      </section>

    </main>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const copied = ref(false)

const copyLink = async () => {
  await navigator.clipboard.writeText("https://nutrilist.app/lista-compartida")
  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const shareFake = () => {
  alert("Simulando compartir lista...")
}
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
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: sticky;
  top: 0;
  background: rgba(250, 249, 245, 0.95);
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
  font-size: 28px;
  margin: 0;
}

.hero p {
  color: #666;
  margin-top: 8px;
}

.share-card {
  margin-top: 24px;
  background: white;
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

button {
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  background: #2f7a57;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

button.secondary {
  background: #eaeaea;
  color: #333;
}

.copied {
  margin-top: 10px;
  font-size: 12px;
  color: #2f7a57;
}
</style>