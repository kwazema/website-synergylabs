import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" aria-label="Ir a inicio">
            Synergy Labs
          </a>
        </div>
        
        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.navLink}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#automatizaciones" className={styles.navLink}>
                Automatizaciones
              </a>
            </li>
            <li>
              <a href="#proceso" className={styles.navLink}>
                Proceso
              </a>
            </li>
            <li>
              <a href="#equipo" className={styles.navLink}>
                Equipo
              </a>
            </li>
            <li>
              <a href="#contacto" className={styles.navLink}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        
        <div className={styles.cta}>
          <a href="#contacto" className={styles.ctaButton}>
            Hablemos
          </a>
        </div>
        
        {/* Botón menú móvil - para implementar después */}
        <button 
          className={styles.mobileMenuButton}
          aria-label="Abrir menú"
          aria-expanded="false"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  )
} 