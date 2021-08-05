import { Link } from 'react-router-dom';

import styles from './Portfolio.module.scss';
import royal1 from '../../assets/img/royal1.png'
import royal2 from '../../assets/img/royal2.png'
import kapusta1 from '../../assets/img/kapusta1.png'
import kapusta2 from '../../assets/img/kapusta2.png'

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
            <img className={styles.contentBlock__img2} src={royal2} alt="" />
            <img className={styles.contentBlock__img1} src={royal1} alt="" />
          </li>
          <li className={styles.contentBlockItem__yellow}>
            <img className={styles.contentBlock__img2} src={kapusta2} alt="" />
            <img className={styles.contentBlock__img1} src={kapusta1} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio