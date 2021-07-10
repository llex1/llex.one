import './App.scss'

import { Fragment, useState } from "react";
// import Header from './components/Header'
import Hero from './components/Hero'
import Chat from './components/Chat'

function App() {
  const [isOpenChat, handleOpenChat] = useState(false)

  return (
    <Fragment>
      {/* <Header /> */}
      <Hero openChat={handleOpenChat} />
      <Chat isOpenChat={isOpenChat} closeChat={handleOpenChat} />
    </Fragment>
  )

}

export default App;


