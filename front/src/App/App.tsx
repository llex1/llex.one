import { Fragment } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import './App.scss'
//components
import Main from './views/Main'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/">
          <Main/>
        </Route>
      </BrowserRouter>
    </Fragment>
  )

}

export default App;


