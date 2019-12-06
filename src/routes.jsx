import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import App from './components/App';
import Home from './components/pages/Home/Home';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </App>


export default withRouter(AppRoutes)
