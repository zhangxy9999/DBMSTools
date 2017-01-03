import React, { Component } from 'react';
import { Steps, Row, Col } from 'antd';
import 'antd/lib/steps/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';


export default class SecReqPanel extends Component {
    render () {
        const steps = [
            {
                title: 'Requested',
                description: 'Request is pending for approval'
            },
            {
                title: 'Approved',
                description: 'Request ready to be activated'
            },
            {
                title: 'Declined',
                description: 'Request was declined, try contact approver'
            },
            {
                title: 'Activated',
                description: 'Temporary token is ready to be used'
            },
            {
                title: 'Expired',
                description: 'You may re-request'
            }];
        
        var details = [];
        
        for(var p in this.props.data) {
            if (this.props.data.hasOwnProperty(p)) {
                details.push(
                    <Row key={p} className="detail-row">
                        <Col span={11} className="detail-key-col">
                            {p}
                        </Col>
                        <Col span={1} />
                        <Col span={12}>
                            { this.props.data[p] ? this.props.data[p] : 'null' }
                        </Col>
                    </Row>
                );
            }
        }

        return (
            

            <div>
                <Steps current={1}>
                    {steps.map((s, i) => <Steps.Step key={i} title={s.title} description={s.description} />)}
                </Steps>
                <div className="detail-wrapper">
                    {details}
                </div>
            </div>
        )
    }
}