import { Fragment } from "react";

import Header from "../components/Header";
import Hero from '../components/Hero';


function Main() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
    </Fragment>
  );
}

export default Main;


/* <Hero openChat={handleOpenChat} /> */
/* <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat} /> */