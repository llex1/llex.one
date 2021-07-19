import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from './Logo.module.scss'
// import imgMan from  '../../assets/img/man.webp'


function Logo() {

  return (
    <Fragment>
      <Link to='/' className={styles.logo}>hello</Link>
    </Fragment>
  )

}

export default Logo