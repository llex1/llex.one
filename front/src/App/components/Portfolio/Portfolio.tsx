import { Link } from 'react-router-dom';

import styles from './Portfolio.module.scss';
import royalPark01 from '../../assets/img/royalPark01.jpg'
import royalPark02 from '../../assets/img/royalPark02.jpg'

function Portfolio() {

  return (
    <section className={styles.portfolio}>
      <div className='container'>
        <p className={styles.portfolioTitle}>Portfolio</p>
        <div className={styles.textBlock}>
          <h2 className={styles.textBlockH2}>All Creative
            Projects</h2>
          <Link to="/" className={styles.textBlockShowMore}>Explore More</Link>
        </div>
        <ul className={styles.contentBlock}>
          <li className={styles.contentBlockItem__blue}>
            <img className={styles.contentBlock__img1} src={royalPark02} alt="" />
            <img className={styles.contentBlock__img2} src={royalPark01} alt="" />
          </li>
          <li className={styles.contentBlockItem__yellow}>
            <img className={styles.contentBlock__img1} src={royalPark02} alt="" />
            <img className={styles.contentBlock__img2} src={royalPark01} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio