import React, { Component } from 'react';
import {Button, message, Card} from 'antd'

class Messages extends Component {

    showMessage = (type) => {
        message[type](type)
    }

    render() {
        return (
            <div>
                <Card title='全局提醒框'>
                    <Button type='primary' onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type='primary' onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}

export default Messages;