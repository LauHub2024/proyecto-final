<template>
  
  <div class="app-shell">

    <!-- HEADER -->
    <header class="topbar">
      <div class="topbar-left">

        <button class="back-btn" @click="goHome">
  <span class="material-symbols-outlined">
    arrow_back
  </span>
</button>

        <h1>¿Cómo funciona?</h1>
      </div>

      <span class="brand">
        Nutrilist
      </span>
    </header>

    <!-- CONTENT -->
    <main class="content">

      <!-- HERO -->
      <section class="hero">

        <span class="hero-label">
          El Archivista Botánico
        </span>

        <h2>
          Domina tu cocina con la precisión de un experto.
        </h2>

        <p>
          Nutrilist transforma la gestión de tus alimentos
          en una experiencia curada, reduciendo el desperdicio
          y optimizando tu nutrición.
        </p>

      </section>

      <!-- GRID -->
      <section class="steps-grid">

        <!-- STEP 1 -->
        <article class="step-card large-card">

          <div class="step-content">

            <div class="step-number">
              1
            </div>

            <h3>
              Organiza tu despensa
            </h3>

            <p>
              Registra tus productos de forma rápida.
              Escanea o añade manualmente para crear
              un inventario digital exacto de lo que
              tienes en casa.
            </p>

          </div>

          <img
            class="floating-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsmw9vfyZxLKgb1kaYPDO6jPGw0oqBdmGDTR050plS681qNavLamrtzvWy3Xd0BIOQwwQ8w5OIheIxvthzvKMlzrCDmrKEEtsHhBa6N_JMg7FauWetUirvPs7FzAjCxqOFsScGjvOe2u-YL1C_dnWodzDI2vSBkghgOKlNcOCi6EoasZTesvV9cIXWBUs0rtReF1wJrMqHiKuPeY1DipTx4j0xwOku2_WVEJZ3VtJiB3m1Y7gmR37Ga9-B0P-uuApk3eYespqVlCwO"
            alt="Pantry"
          />

        </article>

        <!-- STEP 2 -->
        <article class="step-card white-card">

          <div class="step-number">
            2
          </div>

          <h3>
            Lista inteligente
          </h3>

          <p>
            Tu lista de compras se genera sola.
            Nutrilist detecta qué falta en tu
            despensa y lo añade automáticamente.
          </p>

          <div class="mini-list">

            <div class="mini-item">
              <span class="material-symbols-outlined">
                check_circle
              </span>

              <span>
                Leche de Almendras
              </span>
            </div>

            <div class="mini-item">
              <span class="material-symbols-outlined">
                check_circle
              </span>

              <span>
                Aguacates Hass
              </span>
            </div>

          </div>

        </article>

        <!-- STEP 3 -->
        <article class="step-card white-card danger-card">

          <div class="step-number danger-number">
            3
          </div>

          <h3>
            Cero desperdicio
          </h3>

          <p>
            Recibe alertas inteligentes antes
            de que tus alimentos venzan.
            Priorizamos lo que debe consumirse primero.
          </p>

          <div class="expiry-badge">

            <span class="material-symbols-outlined">
              warning
            </span>

            Vence: 12 Oct

          </div>

        </article>

        <!-- STEP 4 -->
        <article class="step-card healthy-card">

          <div class="healthy-content">

            <div class="step-number">
              4
            </div>

            <h3>
              Come saludable
            </h3>

            <p>
              Recetas personalizadas basadas
              exclusivamente en lo que ya tienes.
            </p>

          </div>

          <div class="recipe-preview">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_4OyEsgdq7IVTiDRIfuBoZNg-e_tYIp88NG4HtER-fOKMzSgPi_dW0-cUg3Fj8irf2Qjdnd3NW_1fwVME_2Lwa9s5bBhVrbnUqZgdUzW-lp8GN3kF2hy5nHlkiilU92QYtUtILAQLi1essW7IFPyA1X-T3vHn3WkfaSoH5IHg0CsC2kDhtdQba02XWlHc16Eo2IDVjF4txQ3HOL6wYCuVO8sYE1LpZaVKSPPdznB4NItF7MdCLpy-Evu5MMoy9ayHavAzL084D6AC"
              alt="Healthy Bowl"
            />

            <div class="recipe-info">

              <span>
                Sugerencia hoy
              </span>

              <h4>
                Bowl de Salmón y Aguacate
              </h4>

            </div>

          </div>

        </article>

      </section>

      <!-- CTA -->
      <section class="cta-section">

        <h3>
          ¿Listo para transformar tu forma de comer?
        </h3>

        <button
          class="primary-btn"
          @click="goHome"
        >
          Comenzar ahora
        </button>

        <button class="secondary-btn" @click="goList">
  Saber más sobre el ahorro
</button>

      </section>

    </main>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const goHome = () => {
  router.push("/")
}

const goList = () => {
  router.push("/list")
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap");

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
  max-width: 1100px;
margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background: #faf9f5;
  color: #1a1c1a;
  font-family: "Inter", sans-serif;
}

/* HEADER */

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;

  width: 100%;

  padding: 18px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(250, 249, 245, 0.92);

  backdrop-filter: blur(16px);
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.back-btn {
  width: 38px;
  height: 38px;

  border: none;
  border-radius: 50%;

  background: transparent;
  color: #2a674c;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  cursor: pointer;
}

.topbar h1 {
  margin: 0;

  font-size: clamp(18px, 3vw, 24px);

  font-weight: 700;
  color: #2a674c;

  font-family: "Plus Jakarta Sans", sans-serif;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand {
  font-size: 14px;
  font-weight: 800;
  color: #2a674c;
  font-family: "Plus Jakarta Sans", sans-serif;

  flex-shrink: 0;
}

/* CONTENT */

.content {
  padding: 24px 20px 80px;
  max-width: 1400px;
  margin: 0 auto;
}

/* HERO */

.hero {
  margin-bottom: 40px;
}

.hero-label {
  font-size: 11px;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 2px;

  color: #2a674c;
}

.hero h2 {
  margin: 12px 0 16px;

  font-size: clamp(34px, 7vw, 72px);

  line-height: 1.05;
  letter-spacing: -1.5px;

  font-weight: 800;

  font-family: "Plus Jakarta Sans", sans-serif;

  max-width: 900px;
}

.hero p {
  max-width: 640px;

  font-size: clamp(15px, 2vw, 18px);

  line-height: 1.7;

  color: #666;
}

/* GRID */

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* CARDS */

.step-card {
  border-radius: 30px;
  padding: 28px;

  position: relative;
  overflow: hidden;
}

.large-card {
  background: #f0eee8;
  min-height: 320px;
}

.white-card {
  background: white;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
}

.healthy-card {
  background: #f0eee8;
}

.step-number {
  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: #b1f0ce;
  color: #184530;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;

  margin-bottom: 18px;

  flex-shrink: 0;
}

.danger-number {
  background: #ffd9d5;
  color: #b6171e;
}

.step-card h3 {
  margin: 0 0 12px;

  font-size: clamp(24px, 4vw, 36px);

  line-height: 1.1;

  font-weight: 800;

  font-family: "Plus Jakarta Sans", sans-serif;
}

.step-card p {
  margin: 0;

  color: #666;

  line-height: 1.7;

  font-size: 15px;
}

/* FLOATING IMAGE */

.floating-image {
  position: absolute;

  width: min(220px, 45vw);

  right: -40px;
  bottom: -20px;

  opacity: 0.22;

  transform: rotate(12deg);

  border-radius: 24px;

  pointer-events: none;
}

/* MINI LIST */

.mini-list {
  margin-top: 24px;

  background: #f4f4f0;

  border-radius: 18px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mini-item {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 600;

  word-break: break-word;
}

.mini-item .material-symbols-outlined {
  color: #2a674c;
  font-size: 18px;

  flex-shrink: 0;
}

/* DANGER */

.danger-card {
  border-left: 5px solid #b6171e;
}

.expiry-badge {
  margin-top: 22px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 10px 14px;

  border-radius: 999px;

  background: rgba(182, 23, 30, 0.1);

  color: #b6171e;

  font-size: 11px;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 1px;

  flex-wrap: wrap;
}

.expiry-badge .material-symbols-outlined {
  font-size: 16px;
}

/* HEALTHY */

.recipe-preview {
  margin-top: 24px;

  background: white;

  border-radius: 24px;
  overflow: hidden;

  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
}

.recipe-preview img {
  width: 100%;
  height: clamp(220px, 35vw, 320px);
  object-fit: cover;
}

.recipe-info {
  padding: 16px;
}

.recipe-info span {
  font-size: 10px;
  font-weight: 800;

  color: #2a674c;

  text-transform: uppercase;
  letter-spacing: 1px;
}

.recipe-info h4 {
  margin: 8px 0 0;

  font-size: 18px;
  line-height: 1.2;

  font-weight: 700;
}

/* CTA */

.cta-section {
  margin-top: 60px;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-section h3 {
  max-width: 500px;

  margin: 0 0 28px;

  font-size: clamp(28px, 5vw, 44px);

  line-height: 1.2;

  font-weight: 800;

  font-family: "Plus Jakarta Sans", sans-serif;
}

.primary-btn {
  border: none;

  background: linear-gradient(
    135deg,
    #2a674c,
    #448064
  );

  color: white;

  padding: 18px 38px;

  border-radius: 20px;

  font-size: 16px;
  font-weight: 700;

  margin-bottom: 18px;

  box-shadow: 0 12px 24px rgba(42, 103, 76, 0.2);

  cursor: pointer;

  transition: transform 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
}

.secondary-btn {
  border: none;
  background: transparent;

  color: #2a674c;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
}

/* MATERIAL ICONS */

.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}

/* TABLET */

@media (min-width: 768px) {

  .content {
    padding: 40px 32px 100px;
  }

  .steps-grid {
    grid-template-columns: repeat(12, 1fr);
  }

  .large-card {
    grid-column: span 7;
  }

  .white-card:nth-child(2) {
    grid-column: span 5;
  }

  .white-card:nth-child(3) {
    grid-column: span 5;
  }

  .healthy-card {
    grid-column: span 7;

    display: flex;
    align-items: center;
    gap: 32px;
  }

  .healthy-content {
    flex: 1;
  }

  .recipe-preview {
    flex: 1;
    margin-top: 0;
  }
}

/* DESKTOP */

@media (min-width: 1200px) {

  .content {
    padding: 60px 48px 120px;
  }

  .steps-grid {
    gap: 28px;
  }

  .step-card {
    padding: 36px;
  }

  .floating-image {
    width: 260px;
  }
}

/* MOBILE */

@media (max-width: 480px) {

  .topbar {
    padding: 14px 16px;
  }

  .brand {
    display: none;
  }

  .content {
    padding: 20px 14px 70px;
  }

  .hero {
    margin-bottom: 30px;
  }

  .step-card {
    padding: 22px;
    border-radius: 24px;
  }

  .cta-section {
    margin-top: 42px;
  }

  .primary-btn {
    width: 100%;
    max-width: 340px;
  }

  .secondary-btn {
    font-size: 13px;
  }

  .floating-image {
    opacity: 0.16;
  }
}
</style>