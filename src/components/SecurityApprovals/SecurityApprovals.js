import React, { Component } from 'react';
import NavBar from '../NavBar';
import 'antd/lib/button/style/css';
import '../layout.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="layout-aside">
                <aside className="layout-sider">
                    <div className="layout-logo">
                        <img src="http://ahbainbridge.org/wp-content/images/rbc-logo.jpg" alt="rbc-logo"></img>    
                    </div>
                    <NavBar current="SecurityApprovals" />
                </aside>
                <div className="layout-main">
                    <div className="layout-header">
                        <h1>Hello, Rain Zhang App</h1>
                    </div>
                    <div className="layout-container">
                        Approval
                    </div>
                    <div className="layout-footer">
                        Royal Bank of Canada Website, © 1995 - 2017
                    </div>
                </div>
            </div>
        )
    }
}