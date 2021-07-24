import styles from './Services.module.scss';
import icons from '../../assets/img/icons.svg';

function Services() {


  return (
    <section className="container">
      <p className={styles.servicesTitle}>Services</p>
      <h2 className={styles.servicesH2}>What  actually I love to do</h2>
      <ul>
        <li>
          <p><span>
            <svg className={styles.iconApi} width="62px">
              <use href={`${icons}#services`}></use>
            </svg>
            <svg className={styles.iconApi} width="62px">
              <use href={`${icons}#api`}></use>
            </svg>
            <svg className={styles.iconApi} width="62px">
              <use href={`${icons}#code`}></use>
            </svg>
          </span>API Design</p>
        </li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}

export default Services
