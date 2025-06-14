import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            ✅ Estudio de viabilidad gratuito
          </div>
          
          <h1 className={styles.title}>
            Automatiza tu PYME con Inteligencia Artificial
          </h1>
          
          <p className={styles.subtitle}>
            Transformamos tus procesos manuales en sistemas inteligentes que ahorran tiempo y dinero. 
            Especializados en PYMEs de 2-15 trabajadores que buscan crecer sin complicaciones.
          </p>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>⚡</span>
              <div>
                <strong>Ahorra 15+ horas semanales</strong> en tareas repetitivas
              </div>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🎯</span>
              <div>
                <strong>Reduce errores humanos</strong> hasta un 95% en procesos críticos
              </div>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>📈</span>
              <div>
                <strong>Incrementa productividad</strong> y escala sin contratar más personal
              </div>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <a href="#contacto" className={styles.ctaPrimary}>
              Analizar mi Negocio Gratis
            </a>
            <a href="#automatizaciones" className={styles.ctaSecondary}>
              Ver Casos de Éxito
            </a>
          </div>

          <p className={styles.trustText}>
            Casos de éxito con PYMEs como la tuya
          </p>
        </div>
      </div>
    </section>
  )
} 