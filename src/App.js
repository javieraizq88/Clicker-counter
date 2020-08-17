import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App3 from '.';
import injectContext from './components/store/appContext';


function App1() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/a" component={App3} />
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App1);
