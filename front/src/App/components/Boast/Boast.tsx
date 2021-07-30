import styles from './Boast.module.scss'

function Boast() {


  return (
    <section className={`container ${styles.boast}`}>
      <p className={styles.boastTitle}>Boast</p>
      <h2 className={styles.boastH2}>Some Aim</h2>
      <ul className={styles.boastList}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}
export default Boast