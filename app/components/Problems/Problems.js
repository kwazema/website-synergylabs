import styles from './Problems.module.css'

export default function Problems() {
  return (
    <section className={styles.problems} id="problemas">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Problems Section
          </h2>
          <p className={styles.subtitle}>
            [Placeholder] Problemas que enfrentan las PYMEs
          </p>
        </div>
      </div>
    </section>
  )
} 