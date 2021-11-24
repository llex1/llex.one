// import {useState, useEffect} from 'react';
import styles from './Hero.module.scss';
import heroImg from '../../assets/img/heroImg.png'
import heroImg2x from '../../assets/img/heroImg@2x.png'
import icons from '../../assets/img/icons.svg';

// import Chat from '../Chat'

function Hero(/* prop:{openChat:(value:boolean) => void} */) {


  return (
    <section className={`container ${styles.heroSection}`}>

      <div className={styles.heroImageBlock}>
        <picture >
          {/* media="(min-width: 1200px) */}
          <source srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}></source>
          <img className={styles.heroImage} src={heroImg} alt="MDN"></img>
        </picture>
        <svg className={styles.heroPolygonBack}>
          <use href={`${icons}#heroPolygonBack`}></use>
        </svg>
        <svg className={styles.heroPolygonFront}>
          <use href={`${icons}#heroPolygonFront`}></use>
        </svg>
      </div>

      <div className={styles.heroTextBlock}>
        <p className={styles.heroTitle}>Hello,</p>
        <h1 className={styles.heroH1}>Alex Tsurka</h1>
        <p className={styles.heroArticle}>a full stack developer</p>
        <button className={styles.heroButton}>Let’s Talk</button>

      </div>



    </section>
  )
}
export default Hero