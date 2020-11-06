import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Inventory from './pages/inventory/Inventory'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={Landing} exact></Route>
        <Route path='/inventory' component={Inventory}></Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
