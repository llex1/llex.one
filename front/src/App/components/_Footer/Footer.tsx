import icons from '../../assets/img/icons.svg';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <svg width="100%" height="320" className={styles.footerBg}>
        <use href={`${icons}#footer`}></use>
      </svg>
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.footerTitle}>Contact Me</p>
        <div className={styles.textBlock}>
          <h2 className={styles.textBlockH2}>Let me know if you want to talk about a potential collaboration. I'm available for freelance work.</h2>
          <a href="mailto:alex.tsurka@gmail.com" className={styles.textBlockEmail}>alex.tsurka@gmail.com</a>
        </div>
        <form className={styles.footerForm} action="/">
          <input type="text" placeholder="What’s your name?" />
          <input type="text" placeholder="Your email" />
          <input type="text" placeholder="Tell me about your project" />
          <div className={styles.buttonBlock}>
            <input className={styles.button} type="submit" />
            <label className={styles.attachLabel}>
              <svg className={styles.attachImg} width="18" height="18">
                <use href={`${icons}#attach`}></use>
              </svg>
              <input className={styles.attach} type="file" name="" id="" />
            </label>
          </div>
        </form>
        <p className={styles.socialListTitle}>Let’s be Friends</p>
        <ul className={styles.socialList}>
          <li>
            <svg className={styles.iconBg}>
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.icon}>
              <use href={`${icons}#web`}></use>
            </svg>
          </li>
          <li>
            <svg className={styles.iconBg}>
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.icon}>
              <use href={`${icons}#web`}></use>
            </svg>
          </li>
          <li>
            <svg className={styles.iconBg}>
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.icon}>
              <use href={`${icons}#web`}></use>
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  )
}



export default Footer