import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
