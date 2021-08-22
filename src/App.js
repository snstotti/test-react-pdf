import React from 'react'
import Main from './Main/Main';
import { Route, Redirect, HashRouter, withRouter } from "react-router-dom"
import Nav from './Nav/Nav';
import GetData from './GetData/GetData';

function App() {
  return (
    <div className='container'>
     <Nav />
      <HashRouter>
        <Route path='/home' component={Main} />
        <Route path='/create-pdf' component={GetData} />
        <Redirect from='/' to='/home' />
      </HashRouter>
    </div>
  );
}

export default withRouter(App);
