import styles from './Hero.module.scss';
import heroImg from '../../assets/img/hero.png';
import heroImg2x from '../../assets/img/hero@2x.png';
import icons from '../../assets/img/icons.svg';
// import { useEffect } from 'react';

function Hero(props: any) {




  // useEffect(
  //   () => {
  //     function handler(ev:MouseEvent) {
  //       console.log(ev && ev.target);
  //     }
  //     document.addEventListener('click', handler)
  //     return () => {
  //       document.removeEventListener('click', handler);
  //     }
  //   }
  // )


  return (
    // <section className={`container ${styles.heroSection}`}>
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>

        <p className={styles.heroTitle}>Hello,</p>
        <h1 className={styles.h1}>Alex Tsurka</h1>
        <p className={styles.heroText}> Full Stack Developer</p>
        <button className={styles.heroButton}>Let’s Talk</button>

        <svg className={styles.polygonOne}>
          <use href={`${icons}#polygon1`}></use>
        </svg>
        <svg className={styles.polygonTwo}>
          <use href={`${icons}#polygon2`}></use>
        </svg>
        {/* <span className={`${styles.bg} ${styles.bgYellow}`}></span>
        <span className={`${styles.bg} ${styles.bgPink}`}></span>
        <span className={`${styles.bg} ${styles.bgBlue}`}></span>
        <span className={`${styles.bg} ${styles.bgOrange}`}></span> */}
        <picture>
          {/* <source srcset="./images/......webp 1x, ./images/.....@2x.webp 2x" media="(min-width: 1440px)" type="image/webp"> */}
          <source srcSet={`${heroImg} 1x, ${heroImg2x} 2x`} media="(min-width: 1280px)" />
          <img className={styles.heroImg} src={heroImg} alt="The boy is at the computer." />
        </picture>
        <svg className={`${styles.wave} ${styles.wavePink}`} width="62px">
          <use href={`${icons}#wave`}></use>
        </svg>
        <svg className={`${styles.wave} ${styles.waveGreen}`} width="48px">
          <use href={`${icons}#wave`}></use>
        </svg>
        <svg className={`${styles.wave} ${styles.waveWhite}`} width="48px">
          <use href={`${icons}#wave`}></use>
        </svg>


        {/* <span className={styles.dots}></span> */}
        <span className={`${styles.circle} ${styles.circleOne}`}></span>
        <span className={`${styles.circle} ${styles.circleTwo}`}></span>
        <span className={`${styles.circle} ${styles.circleThrie}`}></span>
        <span className={`${styles.circle} ${styles.circleFour}`}></span>
        {/* <span className={`${styles.cros} ${styles.crosOne}`}></span> */}
        <span className={`${styles.cros} ${styles.crosTwo}`}></span>



      </div>
      
    </section>
  )
}
export default Hero