import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {
  // const handleFile = (ev:React.ChangeEvent<HTMLInputElement>)=>{
  //   console.log(ev);
  // }


  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className={styles.title}>Contact Me</p>
        {/* -------------top block---------------- */}
        <div className={styles.topBlock}>
          <p className={styles.footerText}>Let me know if you want to talk about a potential collaboration. I'm available for freelance work.</p>
          <Link to="/portfolio" className={styles.more}>
            <span className={styles.moreArrow}></span>
          </Link>
        </div>
        {/* -------------form block---------------- */}
        <form className={styles.formBlock}>
          <input type="text" className={styles.inputText} placeholder="What’s your name?" />
          <input type="text" className={styles.inputText} placeholder="Your email" />
          <input type="text" className={styles.inputText} placeholder="Tell me about your project" />
          <input type="submit" className={styles.footerButton} value="Get a Quote" />
        </form>
      </div>
    </footer>
  )
}
export default Footer