import React from 'react';
import classes from './App.module.css';
import WatchPage from './WatchPage/WatchPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className={classes.App}>
      <p className={classes.HomeBtn}>Back to Home</p>
      <h1 className={classes.Title}>The Video Player</h1>
      <div className={classes.WatchPage}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/1' />} />
            <Route path='/:VideoId' component={WatchPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
