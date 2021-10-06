import { Link } from 'react-router-dom';

import styles from './Portfolio.module.scss';
// import royal1 from '../../assets/img/royal1.png'
// import royal2 from '../../assets/img/royal2.png'
// import kapusta1 from '../../assets/img/kapusta1.png'
// import kapusta2 from '../../assets/img/kapusta2.png'

function Portfolio() {

  return (
    <section className={styles.portfolio}>
      <div className='container'>
        <p className={styles.title}>Portfolio</p>
        <div className={styles.headerBlock}>
          <h2 className={styles.h2}>All Creative Projects</h2>
          <Link to="/portfolio" className={styles.more}>
            <span className={styles.moreText}>Explore More</span>
            <span className={styles.moreArrow}></span>
          </Link>
        </div>
        <ul className={styles.contentBlock}>
          <li></li>
          <li></li>
        </ul>


      </div>
    </section>
  )
}

export default Portfolio