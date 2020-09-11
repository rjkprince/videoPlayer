import React from 'react';
import classes from './App.module.css';
import WatchPage from './WatchPage/WatchPage';
import Login from './Login/Login';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Link to='/' className={classes.HomeBtn}>
          Back to Home
        </Link>
        <Link to='/Register' className={classes.HomeBtn}>
          Register
        </Link>

        <h1 className={classes.Title}>The Video Player</h1>
        <div className={classes.WatchPage}>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/Video/1' />} />
            <Route exact path='/Video/:VideoId' component={WatchPage} />
            <Route exact path='/Register' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
