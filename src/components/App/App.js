import React, { Component } from 'react';
import { hashHistory, Router, Route } from 'react-router';

import Dashboard from '../Dashboard/Dashboard';
import DeployRequests from '../DeployRequests/DeployRequests';
import DeployExecutions from '../DeployExecutions/DeployExecutions';
import SecurityRequests from '../SecurityRequests/SecurityRequests';
import SecurityApprovals from '../SecurityApprovals/SecurityApprovals';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Dashboard} />
                <Route path='/sql-deploy-requests' component={DeployRequests} />
                <Route path='/sql-deploy-executions' component={DeployExecutions} />
                <Route path='/security-requests' component={SecurityRequests} />
                <Route path='/security-approvals' component={SecurityApprovals} />
            </Router>
        )
    }
}
