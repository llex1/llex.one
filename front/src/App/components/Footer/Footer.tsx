
import icons from '../../assets/img/icons.svg';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F6F8FF" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,245.3C480,256,600,256,720,250.7C840,245,960,235,1080,192C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg> */}
      <div className="container">
        <p className={styles.footerTitle}>Contact Me</p>


      </div>
    </footer>
  )
}



export default Footer