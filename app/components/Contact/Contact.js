import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Contact Section - Contacto
          </h2>
          <p className={styles.subtitle}>
            [Placeholder] Formulario de contacto y información
          </p>
        </div>
      </div>
    </section>
  )
} 