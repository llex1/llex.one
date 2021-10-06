import { Fragment } from "react";

import Header from "../components/Header";
import Hero from '../components/Hero';
import Skills from '../components/Skills';
//?
import Portfolio from "../components/Portfolio";

function Main() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Skills/>
      <Portfolio/>
    </Fragment>
  );
}

export default Main;


/* <Hero openChat={handleOpenChat} /> */
/* <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat} /> */