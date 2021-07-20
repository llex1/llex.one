import './App.scss'

import { Fragment, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header'
import Hero from './components/Hero'
import Chat from './components/Chat'

function App() {
  const [isOpenChat, handleOpenChat] = useState(false)

  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/">
          <Header />
          <Hero/>
        </Route>
        {/* <Hero openChat={handleOpenChat} /> */}
        {/* <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat} /> */}
      </BrowserRouter>
    </Fragment>
  )

}

export default App;


