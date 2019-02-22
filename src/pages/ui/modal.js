import React, { Component } from 'react';
import { Modal, Button, Card } from 'antd'

import './index.less'

class Modals extends Component {

    state = {
        show1: false,
    }

    handleClick = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleCancle = (type) => {
        this.setState({
            [type]:false
        })
    }

    handleOk = (type) => {
        this.setState({
            [type]:false
        })
    }

    showConfirm = () => {
        Modal.confirm({
            title: '你确定要删除这条记录吗？',
            content: '请做出你的选择',
            onOk () {},
            onCancel () {},
            okText: '确认',
            cancelText: '取消'
        });
    }

    handleMessage = (type) => {
        Modal[type]({
            title: 'This is a notification message',
            content: (
                <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
                </div>
            )
        })
    }

    /* info = () => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
    }
      
    success = () => {
        Modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...',
        });
    }
      
    error = () => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
    }
      
    warning = () => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
    } */

    render() {
        return (
            <div>
                <Card title='基础模态框' className='card'>
                    <Button type='primary' onClick={() => this.handleClick('show1')}>open</Button>
                    <Button type='primary' onClick={() => this.handleClick('show2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => this.handleClick('show3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={() => this.handleClick('show4')}>水平垂直居中</Button>
                
                    <Modal title='React' visible={this.state.show1} onCancel={() => this.handleCancle('show1')} onOk={() => this.handleOk('show1')}>
                        你好啊，弟弟!
                    </Modal>
                    <Modal 
                    title='React' 
                    visible={this.state.show2} 
                    onCancel={() => this.handleCancle('show2')} 
                    onOk={() => this.handleOk('show2')} 
                    footer={[
                        <Button key='return' onClick={() => this.handleCancle('show2')}>Return</Button>,
                        <Button key='submit' type='primary' onClick={() => this.handleOk('show2')}>Submit</Button>
                    ]}
                    >
                        你好啊，弟弟!
                    </Modal>
                    <Modal
                    title='React'
                    style={{top: '20px'}}
                    visible={this.state.show3}
                    onCancel={() => this.handleCancle('show3')}
                    onOk={() => this.handleOk('show3')}
                    >
                    你好啊，弟弟!
                    </Modal>
                    <Modal
                    title='React'
                    centered
                    visible={this.state.show4}
                    onCancel={() => this.handleCancle('show4')}
                    onOk={() => this.handleOk('show4')}
                    >
                    你好啊，弟弟!
                    </Modal>
                </Card>
                <Card title='信息确认框' className='card'>
                    <Button type='primary' onClick={this.showConfirm}>Confirm</Button>
                    <Button type='primary' onClick={() => this.handleMessage('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.handleMessage('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.handleMessage('error')}>Error</Button>
                    <Button type='primary' onClick={() => this.handleMessage('warning')}>Warning</Button>
                </Card>
            </div>
        );
    }
}

export default Modals;