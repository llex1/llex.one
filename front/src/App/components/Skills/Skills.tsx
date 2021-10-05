import styles from './Skills.module.scss';
import icons from '../../assets/img/icons.svg';


function Skills() {
  return (
    <section className={`container ${styles.skills}`}>
      <p className={styles.title}>Skills</p>
      <h2 className={styles.h2}>What  actually I love to do</h2>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            <svg className={styles.polygonBack}>
              <use href={`${icons}#polygonBack`}></use>
            </svg>
            <svg className={styles.polygonFront}>
              <use href={`${icons}#polygonFront`}></use>
            </svg>
            UX Research
          </p>
          <p className={styles.listItemText}>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
        </li>



        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            <svg className={styles.polygonBack}>
              <use href={`${icons}#polygonBack`}></use>
            </svg>
            <svg className={styles.polygonFront}>
              <use href={`${icons}#polygonFront`}></use>
            </svg>
            UX Research
          </p>
          <p className={styles.listItemText}>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemTitle}>
            <svg className={styles.polygonBack}>
              <use href={`${icons}#polygonBack`}></use>
            </svg>
            <svg className={styles.polygonFront}>
              <use href={`${icons}#polygonFront`}></use>
            </svg>
            UX Research
          </p>
          <p className={styles.listItemText}>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
        </li>
      </ul>


    </section>
  )
}

export default Skills