import { NavLink } from "react-router-dom";

import styles from './Header.module.scss';




function Header() {

  return (
    <header className={`container ${styles.header}`}>
      <NavLink to='/' className={styles.logo}></NavLink>
      <ul>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/'>Services</NavLink></li>
        <li><NavLink to='/'>Works</NavLink></li>
        <li><NavLink to='/'>Contacts</NavLink></li>
      </ul>
      {/* <div className={`container ${styles.header}`}>llex.one</div> */}
    </header>
  )
}

export default Header