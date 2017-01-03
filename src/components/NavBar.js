import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';

export default class NavBar extends Component {
    render () {
        return (
            <Menu style={{ width: 239 }}
                selectedKeys={[this.props.current]}
                openKeys={['DashboardGroup', 'DeployGroup', 'SecurityGroup']}
                mode="inline">
                <Menu.SubMenu key="DashboardGroup" title={<span><Icon type="line-chart" /><span>Dashboard</span></span>}>
                    <Menu.Item key="Dashboard"><Link to="/">Dashboard</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="DeployGroup" title={<span><Icon type="file-text" /><span>SQL Deployment</span></span>}>
                    <Menu.Item key="DeployRequests"><Link to="/sql-deploy-requests">Deployment Requests</Link></Menu.Item>
                    <Menu.Item key="DeployExecutions"><Link to="/sql-deploy-executions">Deployment Executions</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="SecurityGroup" title={<span><Icon type="lock" /><span>DB Security</span></span>}>
                    <Menu.Item key="SecurityRequests"><Link to="/security-requests">Security Requests</Link></Menu.Item>
                    <Menu.Item key="SecurityApprovals"><Link to="/security-approvals">Security Approvals</Link></Menu.Item>
                </Menu.SubMenu>
            </Menu>
        )
    }
}