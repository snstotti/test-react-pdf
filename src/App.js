import React from 'react'
import Main from './Main/Main';

import { Route, Redirect, Switch, withRouter } from "react-router-dom"
import PdfComponent from './PdfComponent/PdfComponent';
import Nav from './Nav/Nav';

function App() {
  return (
    <div className='container'>
     <Nav />
      <Switch>
        <Route path='/home' component={Main} />
        <Route path='/create-pdf' component={PdfComponent} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

export default App;
