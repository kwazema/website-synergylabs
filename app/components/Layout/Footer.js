import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Synergy Labs</h3>
            <p className={styles.tagline}>
              Automatizaciones con IA para PYMEs
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Servicios</h4>
              <ul>
                <li><a href="#automatizaciones">Automatizaciones</a></li>
                <li><a href="#proceso">Nuestro Proceso</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Empresa</h4>
              <ul>
                <li><a href="#equipo">Equipo</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; 2024 Synergy Labs. Todos los derechos reservados.</p>
          </div>
          
          <div className={styles.founders}>
            <p>Fundado por Diana Martín y Andreu Kwazema</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 