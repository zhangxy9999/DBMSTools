import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-main">
                <h1>Database Management Service Web Portal</h1>
                <ul>
                    <li><Link to="/security-requests"><h2>Security Requests</h2></Link></li>
                    <li><Link to="/security-approvals"><h2>Security Approvals</h2></Link></li>
                    <li><Link to="/sql-deploy-requests"><h2>SQL Script Deploy Requests</h2></Link></li>
                    <li><Link to="/sql-deploy-executions"><h2>SQL Script Deploy Executions</h2></Link></li>
                    
                </ul>
            </div>
        )
    }
}