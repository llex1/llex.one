import { Fragment } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.scss'
//components
import Main from './views/Main'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )

}

export default App;


