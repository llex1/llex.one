import './App.scss'

import { Fragment, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Boast from './components/Boast'
import Footer from './components/Footer'


import Chat from './components/Chat'

function App() {
  const [isOpenChat, handleOpenChat] = useState(false)

  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/">
          <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat}/>
          <Header />
          <Hero openChat={handleOpenChat}/>
          <Services/>
          <Portfolio/>
          <Boast/>
          <Footer/>
        </Route>
        {/* <Hero openChat={handleOpenChat} /> */}
        {/* <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat} /> */}
      </BrowserRouter>
    </Fragment>
  )

}

export default App;


