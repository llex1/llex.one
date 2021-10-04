import { Fragment } from "react";

import Header from "../components/Header";
import Hero from '../components/Hero';
import Skills from '../components/Skills';


function Main() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Skills/>
    </Fragment>
  );
}

export default Main;


/* <Hero openChat={handleOpenChat} /> */
/* <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat} /> */