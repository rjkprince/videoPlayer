import React from 'react';
import classes from './App.module.css';
import WatchPage from './WatchPage/WatchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className={classes.App}>
      <a href='#' className={classes.HomeBtn}>
        Back to Home
      </a>
      <h1 className={classes.Title}>The Video Player</h1>
      <div className={classes.WatchPage}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={WatchPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
