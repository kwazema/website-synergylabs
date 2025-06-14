import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hero Section - Synergy Labs
          </h1>
          <p className={styles.subtitle}>
            [Placeholder] Sección principal con mensaje de impacto
          </p>
        </div>
      </div>
    </section>
  )
} 