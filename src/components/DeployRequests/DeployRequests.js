import React, { Component } from 'react';
import WrapperDepReq from '../WrapperDepReq';
import NavBar from '../NavBar';
import '../layout.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="layout-aside">
                <aside className="layout-sider">
                    <div className="layout-logo">
                        <img src="http://ahbainbridge.org/wp-content/images/rbc-logo.jpg" alt="rbc-logo"></img>    
                    </div>
                    <NavBar current="DeployRequests" />
                </aside>
                <div className="layout-main">
                    <div className="layout-header">
                        <h1>Hello, Rain Zhang</h1>
                    </div>
                    <div className="layout-container">
                        <WrapperDepReq />
                    </div>
                    <div className="layout-footer">
                        Royal Bank of Canada Website, © 1995 - 2017
                    </div>
                </div>
            </div>
        )
    }
}