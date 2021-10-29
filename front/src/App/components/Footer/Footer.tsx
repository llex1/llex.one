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
        <div className={'styles.formBlock'}>
          <form className={'styles.form'}>
            <label htmlFor=""></label>
            <input className={'styles.formInput'} id="" type="text" />
            <label htmlFor=""></label>
            <input className={'styles.formInput'} id="" type="text" />
            <label htmlFor=""></label>
            <input className={'styles.formInput'} id="" type="text" />
            <label htmlFor=""></label>
            <input className={'styles.formInput'} id="" type="text" />
             <input type="file" />

          </form>
        </div>
      </div>
    </footer>
  )
}
export default Footer