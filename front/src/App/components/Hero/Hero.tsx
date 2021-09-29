// import {useState, useEffect} from 'react';
import styles from './Hero.module.scss';
import heroImg from '../../assets/img/heroImg.png'
import heroImg2x from '../../assets/img/heroImg@2x.png'
import icons from '../../assets/img/icons.svg';

// import Chat from '../Chat'

function Hero(/* prop:{openChat:(value:boolean) => void} */) {


  return (
    // <section className={`container ${styles.heroSection}`}>
    <section className={`container ${styles.heroSection}`}>
      <div className={styles.heroImageBlock}>
        <picture className={styles.heroImage}>
          <source srcSet={`${heroImg} 1x, ${heroImg2x} 2x`}></source> 
          <img src={heroImg} alt="MDN"></img>
        </picture>
        <svg className={styles.heroPolygonBack}>
          <use href={`${icons}#heroPolygonBack`}></use>
        </svg>
        <svg className={styles.heroPolygonFront}>
          <use href={`${icons}#heroPolygonFront`}></use>
        </svg>
      </div>
      <div>2fr


      </div>



    </section>
  )
}
export default Hero