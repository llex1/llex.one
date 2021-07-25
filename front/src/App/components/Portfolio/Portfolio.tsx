import styles from './Portfolio.module.scss';

function Portfolio() {

  return (
    <section className={styles.portfolio}>
      <div className='container'>
        <p className={styles.portfolioTitle}>Portfolio</p>
        <div className={styles.textBlock}>
          <h2 className={styles.textBlockH2}>All Creative
            Projects</h2>
            <p className={styles.textBlockShowMore}>Explore More</p>
        </div>
        

      </div>
    </section>
  )
}

export default Portfolio