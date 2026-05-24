<template>
  <div class="home">

    <!-- LOGO -->
    <div class="logo">
      🌱
    </div>

    <h1>Bienvenido a Nutrilist</h1>

    <p>
      Tu asistente personal para una despensa organizada y una vida más saludable.
    </p>

    <!-- BOTONES -->
    <div class="buttons">

      <button class="btn primary" @click="goDashboard">
        Comenzar
      </button>

      <button class="btn secondary" @click="goLogin">
        Iniciar sesión
      </button>

    </div>

    <a class="link" href="#" @click.prevent="goHow">
      ¿Cómo funciona? →
    </a>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goDashboard = () => {
  router.push('/dashboard')
}

const goLogin = () => {
  router.push('/login')
}

const goHow = () => {
  router.push('/how')
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
  font-family: Arial;
  padding: 20px;
}

.logo {
  font-size: 60px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 220px;
}

.btn {
  padding: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.primary {
  background: #2a674c;
  color: white;
}

.secondary {
  background: #e5e5e5;
}

.link {
  margin-top: 10px;
  color: #2a674c;
  cursor: pointer;
  text-decoration: none;
}
</style>