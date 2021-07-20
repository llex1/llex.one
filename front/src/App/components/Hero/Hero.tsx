import styles from './Hero.module.scss';
// import imgMan from  '../../assets/img/man.webp'

function Hero(props:any){

  return(
    <section className={`container ${styles.heroSection}`}>
      <p className={styles.heroTitle}>Hello,</p>
      <h1 className={styles.h1}>Alex Tsurka</h1>
      <p className={styles.heroText}> Full Stack Developer</p>
      <button className={styles.heroButton}>Let’s Talk</button>


      <div className={styles.bgOrange}></div>
      <div className={styles.bgBlue}></div>
      <div className={styles.bgPink}></div>





    </section>
  )
}
export default Hero