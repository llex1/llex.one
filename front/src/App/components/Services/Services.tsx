import styles from './Services.module.scss';
import icons from '../../assets/img/icons.svg';

function Services() {


  return (
    <section className={`${styles.services} container`}>
      <p className={styles.servicesTitle}>Services</p>
      <h2 className={styles.servicesH2}>What  actually I love to do</h2>
      <ul className={styles.servicesList}>
        <li>
          <p className={styles.servicesListTitle}> 
            <svg className={styles.iconBg}>
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.icon}>
              <use href={`${icons}#web`}></use>
            </svg>
            Web Development
          </p>
          <p className={styles.servicesListText}>New demos are continually added and buying a single license for Mak gives you access to all of
            what's shown below, plus everything that will be added in the future.</p>
        </li>
        {/* <svg className={styles.iconApi} width="62px">
              <use href={`${icons}#http`}></use>
            </svg>
            <svg className={styles.iconApi} width="62px">
              <use href={`${icons}#micro`}></use>
            </svg> */}
        <li>
        <p className={styles.servicesListTitle}> 
            <svg className={styles.iconBg}>
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.icon}>
              <use href={`${icons}#web`}></use>
            </svg>
            Web Development
          </p>
          <p className={styles.servicesListText}>New demos are continually added and buying a single license for Mak gives you access to all of
            what's shown below, plus everything that will be added in the future.</p>
        </li>
        <li>
        <p className={styles.servicesListTitle}> 
            <svg className={styles.iconBg}>
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.icon}>
              <use href={`${icons}#web`}></use>
            </svg>
            Web Development
          </p>
          <p className={styles.servicesListText}>New demos are continually added and buying a single license for Mak gives you access to all of
            what's shown below, plus everything that will be added in the future.</p>
        </li>
      </ul>
    </section>
  )
}

export default Services
