import styles from './Hero.module.scss';
import heroImg from  '../../assets/img/hero.png';

function Hero(props:any){

  return(
    <section className={`container ${styles.heroSection}`}>
      <p className={styles.heroTitle}>Hello,</p>
      <h1 className={styles.h1}>Alex Tsurka</h1>
      <p className={styles.heroText}> Full Stack Developer</p>
      <button className={styles.heroButton}>Let’s Talk</button>


      <div className={styles.bgYellow}></div>
      <div className={styles.bgPink}></div>
      <div className={styles.bgBlue}></div>
      <div className={styles.bgOrange}></div>
      <img className={styles.heroImg} src={heroImg} alt="The boy is at the computer." />





    </section>
  )
}
export default Hero