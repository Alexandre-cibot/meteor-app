import {Meteor} from "meteor/meteor";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch, BrowserRouter} from "react-router-dom";

// Import all UI Component
import Signup from "../imports/ui/Signup";
import Dashboard from "../imports/ui/Dashboard";
import Login from "../imports/ui/Login";
import NoMatch from "../imports/ui/Notfound";

const routes = (
    <BrowserRouter>
        <div style={{height:'100%'}}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </div>
    </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.app'))
});