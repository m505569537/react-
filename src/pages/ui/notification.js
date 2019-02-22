import React, { Component } from 'react';
import { Card, Button, notification, Select } from "antd";

const {Option} = Select;
const options = ['topLeft','topRight','bottomLeft','bottomRight'];

class Notifications extends Component {

    openNotificationWindow = (type) => {
        notification[type]({
            message: '通知提醒栏',
            description: type
        })
    }

    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card'>
                    <Button type='primary' onClick={() => this.openNotificationWindow('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotificationWindow('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.openNotificationWindow('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.openNotificationWindow('error')}>Error</Button>
                    <Select
                        defaultValue='topRight'
                        onChange={(val) => notification.config({
                            placement:val
                        })}
                    >
                        {options.map( option => <Option key={option} value={option}>{option}</Option>)}
                    </Select>
                </Card>
            </div>
        );
    }
}

export default Notifications;