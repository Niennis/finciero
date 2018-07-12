// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Login from './components/login/login';
import User from './components/user/user';
import Recharge from './components/recharge/recharge';
import PayMode from './components/recharge/payMode';
import Caja from './components/recharge/cajavecina/cajaVecina';
import RechargeHistory from './components/rechargehistory/rechargeHistory';
import Commerces from './components/commerces/commerces';
import Transactions from './components/transactions/transactions';
import Profile from './components/profile/profile';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/user" component={User}/>
      <Route path="/login" component={Login}/>
      <Route path="/recharge" component={Recharge}/>
      <Route path="/paymode" component={PayMode}/>
      <Route path="/caja" component={Caja}/>
      <Route path="/history" component={RechargeHistory}/>
      <Route path="/commerces" component={Commerces}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/" component={User}/>      
    </Switch>
  </App>

export default AppRoutes;