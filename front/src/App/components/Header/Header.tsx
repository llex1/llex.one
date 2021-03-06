import { Link } from "react-router-dom";

import styles from './Header.module.scss';

function Header() {
  // const [isBurgerMenuOpen, handleBurgerMenu] = useState(false)
  const handleBurgerMenu = (e:any)=>{
    // console.log(e);
  }

  return (
    <header className={`container ${styles.header}`}>
      <Link to='/' className={styles.logo}></Link>
      <ul className={styles.navlist}>
        <li className={styles.navlistItem}><Link to='/'>About</Link></li>
        <li className={styles.navlistItem}><Link to='/'>Services</Link></li>
        <li className={styles.navlistItem}><Link to='/'>Works</Link></li>
        <li className={styles.navlistItem}><Link to='/'>{document.documentElement.clientWidth}</Link></li>
        <li className={styles.navlistItem}><Link to='/'>{document.documentElement.clientHeight}</Link></li>
      </ul>
      {/* <button className={styles.buttonMenu} onClick={()=>handleBurgerMenu(!isBurgerMenuOpen)} ><span className={`${styles.burgerIcon} ${isBurgerMenuOpen && styles.close}`}></span></button> */}
      {/* <div className={`container ${styles.header}`}>llex.one</div> */}
      <button className={styles.navButton} onClick={handleBurgerMenu}><span className={styles.navButtonIcon}></span></button>
    </header>
  )
}
export default Header