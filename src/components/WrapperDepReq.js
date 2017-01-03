import React, { Component } from 'react';
import { Row, Col, Button, Modal, Form, Input, Icon, Upload, message, Table } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/collapse/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/upload/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/table/style/css';

export default class WrapperDepReq extends Component {
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

    render () {
        const columns = [
            {
                title: 'Locked',
                dataIndex: 'locked',
                key: 'locked',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, 
            {
                title: 'Description',
                dataIndex: 'Description',
                key: 'Description',
            }, 
            {
                title: 'Actions',
                dataIndex: 'actions',
                key: 'actions',
            }
        ];


        const draggerprops = {
            name: 'file',
            multiple: true,
            showUploadList: true,
            action: '/upload.do',
            onChange(info) {
                const status = info.file.status;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`, 10);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`, 10);
                }
            },
        };

        return (
            <div>
                <Row>
                    <Col span="1"></Col>
                    <Col span="22">
                        <Button onClick={this.showModal} style={{ width: '100%', height: '40px' }} className="button-addnew">Add SQL Script Deployment Request</Button>
                    </Col>
                    <Col span="1"></Col>
                </Row>
                <Row>
                <Col span="1"></Col>
                    <Col span="22">
                        <Table columns={columns} dataSource={this.state.data} />
                    </Col>
                    <Col span="1"></Col>
                </Row>



                <Modal
                    title="New SQL Script Deployment Request"
                    visible={this.state.modalVisible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                    confirmLoading={this.state.confirmLoading}
                    okText="Submit"
                    cancelText="Cancel"
                    width="650px"
                >
                    <Form horizontal>
                        <Form.Item
                            label="Name"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 16 }}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 16 }}
                        >
                            <Input placeholder="Description" />
                        </Form.Item>
                        <Upload.Dragger {...draggerprops}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag .sql file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                        </Upload.Dragger>
                    </Form>
                </Modal>
            </div>
        )
    }
}