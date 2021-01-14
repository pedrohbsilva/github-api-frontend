import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route'
import Home from '../pages/home';
import Users from '../pages/users';
import Details from '../pages/details';

const Routes: React.FC = () => {
  const notFoundPage = (): JSX.Element => (
    <h1 style={{ color: 'black' }}>Page not found</h1>
  );
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users/:page?" exact component={Users} isPrivate/>
        <Route path="/details/:username" exact component={Details} isPrivate/>
        <Route path="*" component={notFoundPage} />
      </Switch>
    </BrowserRouter>
    
  );
};

export default Routes;
