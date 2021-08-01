import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <svg className={styles.footerBgWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#E3EFFF" fill-opacity="1" d="M0,320L120,293.3C240,267,480,213,720,186.7C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      <div className="container">
        footer
      </div>
    </footer>
  )
}
export default Footer