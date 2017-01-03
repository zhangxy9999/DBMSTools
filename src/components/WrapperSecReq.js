import React, { Component } from 'react';
import SecReqPanel from './SecReqPanel';
import { Row, Col, Button, Modal, Form, Radio, Cascader, Collapse, Icon } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/radio/style/css';
import 'antd/lib/cascader/style/css';
import 'antd/lib/collapse/style/css';
import 'antd/lib/icon/style/css';

export default class WrapperSecReq extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [], 
            ESD: [],
            RequestTypeList: [],
            RequestTimeframeList: [],
            modalVisible: false };
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleCascaderChange = this.handleCascaderChange.bind(this);
    }

    componentDidMount() {
        this.setState({ RequestTypeList: [
            {
                RequestTypeID: 1,
                Name: 'User'
            },
            {
                RequestTypeID: 2,
                Name: 'SQL Login'
            }
        ]});

        this.setState({ RequestTimeframeList: [
            {
                RequestTimeframeID: 1,
                Name: '1 Hour'
            },
            {
                RequestTimeframeID: 2,
                Name: '4 Hours'
            },
            {
                RequestTimeframeID: 3,
                Name: '8 Hours'
            },
            {
                RequestTimeframeID: 4,
                Name: '24 Hours'
            },
            {
                RequestTimeframeID: 5,
                Name: '48 Hours'
            },
        ]});

        this.setState({ ESD: [
            {
                value: 'PROD',
                label: 'PROD',
                children: [
                    {
                        value: 'dumb.server1.corp.net',
                        label: 'dumb.server1.corp.net',
                        children: [
                            {
                                value: 'DB1.database1',
                                label: 'DB1.database1'
                            },
                            {
                                value: 'DB3.database3',
                                label: 'DB3.database3'
                            },
                            {
                                value: 'DB2.database2',
                                label: 'DB2.database2'
                            },
                        ]
                    },
                    {
                        value: 'dumb.server2.corp.net',
                        label: 'dumb.server2.corp.net',
                        children: [
                            {
                                value: 'DB4.database1',
                                label: 'DB4.database1'
                            },
                            {
                                value: 'DB5.database3',
                                label: 'DB5.database3'
                            },
                            {
                                value: 'DB6.database2',
                                label: 'DB6.database2'
                            },
                        ]
                    },
                    {
                        value: 'dumb.server3.corp.net',
                        label: 'dumb.server3.corp.net',
                        children: [
                            {
                                value: 'DB7.database1',
                                label: 'DB7.database1'
                            },
                            {
                                value: 'DB8.database3',
                                label: 'DB8.database3'
                            },
                            {
                                value: 'DB9.database2',
                                label: 'DB9.database2'
                            },
                        ]
                    },
                    {
                        value: 'dumb.server4.corp.net',
                        label: 'dumb.server4.corp.net',
                        children: [
                            {
                                value: 'DB10.database1',
                                label: 'DB10.database1'
                            },
                            {
                                value: 'DB11.database3',
                                label: 'DB11.database3'
                            },
                            {
                                value: 'DB12.database2',
                                label: 'DB12.database2'
                            },
                        ]
                    },
                ]
            }
        ]});

        this.setState({ data: [
            {
                RequestHash: '12049GFSBJH8907FBJH23',
                Environment: 'PROD',
                Server: 'dumbserver1.corp.net',
                Database: 'DB2.testdatabase',
                AccountName: 'ORDB021',
                RequestDatetime: '2016-11-09T12:15:37.323',
                ApprovalStatusDatetime: null,
                SecurityActiveDatetime: null,
                SecurityExpireDatetime: null,
                SQLLoginName: null,
                SQLLoginPassword: null,
                RequestType: 'User',
                Timeframe: '1 Hour',
                NumberOfHours: 1,
                ApprovalStatus: 'Pending',
                ApprovalStatusCode: 1,
                SecurityStatus: null,
                SecurityStatusCode: null
            },
            {
                RequestHash: '12049GF865H8907FBJH23',
                Environment: 'PROD',
                Server: 'dumbserver1.corp.net',
                Database: 'DB2.testdatabase',
                AccountName: 'ORDB021',
                RequestDatetime: '2016-11-09T12:15:37.323',
                ApprovalStatusDatetime: null,
                SecurityActiveDatetime: null,
                SecurityExpireDatetime: null,
                SQLLoginName: null,
                SQLLoginPassword: null,
                RequestType: 'User',
                Timeframe: '1 Hour',
                NumberOfHours: 1,
                ApprovalStatus: 'Pending',
                ApprovalStatusCode: 1,
                SecurityStatus: null,
                SecurityStatusCode: null
            },
            {
                RequestHash: '12049GFSBJH8909512JH23',
                Environment: 'PROD',
                Server: 'dumbserver1.corp.net',
                Database: 'DB2.testdatabase',
                AccountName: 'ORDB021',
                RequestDatetime: '2016-11-09T12:15:37.323',
                ApprovalStatusDatetime: null,
                SecurityActiveDatetime: null,
                SecurityExpireDatetime: null,
                SQLLoginName: null,
                SQLLoginPassword: null,
                RequestType: 'User',
                Timeframe: '1 Hour',
                NumberOfHours: 1,
                ApprovalStatus: 'Approved',
                ApprovalStatusCode: 2,
                SecurityStatus: null,
                SecurityStatusCode: null
            },
            {
                RequestHash: '12049GFSBJH8907FBJ013',
                Environment: 'PROD',
                Server: 'dumbserver1.corp.net',
                Database: 'DB2.testdatabase',
                AccountName: 'ORDB021',
                RequestDatetime: '2016-11-09T12:15:37.323',
                ApprovalStatusDatetime: null,
                SecurityActiveDatetime: null,
                SecurityExpireDatetime: null,
                SQLLoginName: null,
                SQLLoginPassword: null,
                RequestType: 'User',
                Timeframe: '1 Hour',
                NumberOfHours: 1,
                ApprovalStatus: 'Denied',
                ApprovalStatusCode: 3,
                SecurityStatus: null,
                SecurityStatusCode: null
            },
            {
                RequestHash: '88749GFSBJH8907FBJH23',
                Environment: 'PROD',
                Server: 'dumbserver1.corp.net',
                Database: 'DB2.testdatabase',
                AccountName: 'ORDB021',
                RequestDatetime: '2016-11-09T12:15:37.323',
                ApprovalStatusDatetime: null,
                SecurityActiveDatetime: null,
                SecurityExpireDatetime: null,
                SQLLoginName: null,
                SQLLoginPassword: null,
                RequestType: 'User',
                Timeframe: '1 Hour',
                NumberOfHours: 1,
                ApprovalStatus: 'Approved',
                ApprovalStatusCode: 2,
                SecurityStatus: null,
                SecurityStatusCode: null
            }
        ]});
    }

    showModal() {
        this.setState({
            modalVisible: true
        });
    }

    handleSubmit() {
        this.setState({
            confirmLoading: true
        });

        setTimeout(() => {
            this.setState({
                modalVisible: false,
                confirmLoading: false
            });
        }, 2000);
    }

    handleCancel() {
        this.setState({
            modalVisible: false
        });
    }

    handleCascaderChange(value) {
        console.log(value);
    }

    render() {
        const radioRequestTimeframeList = this.state.RequestTimeframeList.map((d) => {
            return <Radio.Button key={d.RequestTimeframeID} value={d.RequestTimeframeID}>{d.Name}</Radio.Button>
        });

        const radioRequestTypeList = this.state.RequestTypeList.map((d) => {
            return <Radio.Button key={d.RequestTypeID} value={d.RequestTypeID}>{d.Name}</Radio.Button>
        });

        const collapsePanelList = this.state.data.map((d) => {
            const headerContent = d.ApprovalStatusCode === 1 ? 
                <span><Icon type="clock-circle-o" /><span>&emsp;{d.ApprovalStatus}&emsp;{d.Environment}&emsp;{d.Server}&emsp;{d.Database}</span></span> : 
                d.ApprovalStatusCode === 2 ? 
                <span><Icon type="check-circle-o" /><span>&emsp;{d.ApprovalStatus}&emsp;{d.Environment}&emsp;{d.Server}&emsp;{d.Database}</span></span> : 
                d.ApprovalStatusCode === 3 ?
                <span><Icon type="cross-circle-o" /><span>&emsp;{d.ApprovalStatus}&emsp;{d.Environment}&emsp;{d.Server}&emsp;{d.Database}</span></span> :
                <span>Error!</span>;
            return (
                <Collapse.Panel header={headerContent} key={d.RequestHash}>
                    <SecReqPanel data={d} />
                </Collapse.Panel>
            )
        });

        return (
            <div>
                <Row>
                    <Col span="1"></Col>
                    <Col span="22">
                        <Button onClick={this.showModal} style={{ width: '100%', height: '40px' }} className="button-addnew">Add New Security Request</Button>
                    </Col>
                    <Col span="1"></Col>
                </Row>
                <Row>
                    <Col span="1"></Col>
                    <Col span="22">
                        <Collapse>
                            {collapsePanelList}
                        </Collapse>
                    </Col>
                    <Col span="1"></Col>
                </Row>



                <Modal
                    title="New Security Request"
                    visible={this.state.modalVisible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                    confirmLoading={this.state.confirmLoading}
                    okText="Submit"
                    cancelText="Cancel"
                    width="650"
                >
                    <Form horizontal>
                        <Form.Item
                            label="RequestType"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 16 }}
                        >
                            <Radio.Group defaultValue="1">
                                {radioRequestTypeList}
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Timeframe"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 16 }}
                        >
                            <Radio.Group defaultValue="1">
                                {radioRequestTimeframeList}
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Destination"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 16 }}
                        >
                            <Cascader options={this.state.ESD} expandTrigger="hover" onChange={this.handleCascaderChange} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

