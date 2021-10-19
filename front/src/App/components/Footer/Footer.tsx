import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className={styles.title}>Contact Me</p>
        <div className={styles.topBlock}>
          <p className={styles.footerText}>Let me know if you want to talk about a potential collaboration. I'm available for freelance work.</p>
          <Link to="/portfolio" className={styles.more}>
            <span className={styles.moreArrow}></span>
          </Link>
        </div>
        <form className={styles.footerForm}>
          <input className={styles.formInput} type="text" name="" id="" />
          <input className={styles.formInput} type="text" name="" id="" />
          <input className={styles.formInput} type="text" name="" id="" />
          <button className={styles.footerButton}>Send</button>
        </form>

      </div>
    </footer>
  )
}
export default Footer