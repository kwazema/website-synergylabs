import styles from './Team.module.css'

export default function Team() {
  return (
    <section className={styles.team} id="equipo">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Team Section - Equipo
          </h2>
          <p className={styles.subtitle}>
            [Placeholder] Diana Martín y Andreu Kwazema
          </p>
        </div>
      </div>
    </section>
  )
} 