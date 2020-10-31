import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './pages/main/Main'
import Inventory from './pages/inventory/Inventory'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={Main}></Route>
        <Route path='/inventory' component={Inventory}></Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
