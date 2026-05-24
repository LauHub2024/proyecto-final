<template>
  <div class="login-page">

    <!-- HEADER -->
    <header class="login-header">
      <button class="back-btn" @click="goHome">
        <span class="material-symbols-outlined">
          arrow_back
        </span>
      </button>

      <h1>Iniciar sesión</h1>
    </header>

    <!-- LOGIN CARD -->
    <div class="login-card">

      <h2>Bienvenido de nuevo 🌱</h2>

      <p class="subtitle">
        Ingresa tus datos para continuar con Nutrilist
      </p>

      <form @submit.prevent="handleLogin">

        <!-- EMAIL -->
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="ejemplo@correo.com"
          required
        />

        <!-- PASSWORD -->
        <label>Contraseña</label>
        <input
          type="password"
          v-model="password"
          placeholder="••••••••"
          required
        />

        <!-- BUTTON -->
        <button class="login-btn" type="submit">
          Entrar
        </button>

      </form>

      <p class="register-text">
        ¿No tienes cuenta?
        <span @click="goDashboard">Crear una</span>
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

const goHome = () => {
  router.push("/")
}

const goDashboard = () => {
  router.push("/dashboard")
}

const handleLogin = () => {
  // 🔥 aquí luego puedes conectar backend
  if (email.value && password.value) {
    router.push("/dashboard")
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #faf9f5;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
}

/* HEADER */
.login-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  background: rgba(250, 249, 245, 0.9);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
}

.login-header h1 {
  font-size: 20px;
  color: #2a674c;
  margin: 0;
  font-weight: 800;
}

/* BACK BUTTON */
.back-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #2a674c;
  cursor: pointer;
}

/* CARD */
.login-card {
  width: 90%;
  max-width: 420px;
  margin: 40px auto;
  background: white;
  padding: 28px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}

.login-card h2 {
  margin-bottom: 6px;
  color: #1a1c1a;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* FORM */
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 13px;
  font-weight: 600;
  color: #2a674c;
}

input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;
}

input:focus {
  border-color: #2a674c;
}

/* BUTTON */
.login-btn {
  margin-top: 10px;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: #2a674c;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

/* REGISTER */
.register-text {
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: #666;
}

.register-text span {
  color: #2a674c;
  font-weight: 700;
  cursor: pointer;
}
</style>