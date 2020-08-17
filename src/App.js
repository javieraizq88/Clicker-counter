import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App3 from '.';
import injectContext from './components/store/appContext';
import Counter2 from './counter2';


function App1() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/1.b" component={App3} />
        <Route exact path="/1.c" component={Counter2} />
      </Switch>
    </BrowserRouter>
  );
}

export default injectContext(App1);
