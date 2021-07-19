import Logo from '../Logo'




import styles from './Header.module.scss';

function Header() {

  return (
    <header className='container'>
      <Logo></Logo>
      {/* <div className={`container ${styles.header}`}>llex.one</div> */}
    </header>
  )
}

export default Header