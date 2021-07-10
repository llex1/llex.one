import styles from './Hero.module.scss';
import imgMan from  '../../assets/img/man.webp'

function Hero(props:any){

  return(
    <section className={styles.heroSection}>
      <img src={imgMan} alt="man" className={styles.img}/>
      <span className={styles.circles}></span>

      <div className={styles.container}>
        <p className={styles.heroTittle}>Hi there!</p>
        <p className={styles.heroTittle}>I’m Alex, <span className={styles.heroTittleAccent}>Junior</span></p>
        <h1 className={styles.h1}>Full-Stack developer</h1>
        <p className={styles.heroText}>Striving to find a team of professionals to work with pleasure and to create new software products, the team of like-minded people who hear each other and care about the details</p>
        
        
        
        <button type='button' className={`btn ${styles.cv}`} >Get CV</button>
        <button type='button' className={`btn ${styles.chat}`} onClick={()=>props.openChat(true)}>Chat me</button>

      </div>
    </section>
  )
}
export default Hero