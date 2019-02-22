import React, { Component } from 'react';
import { Card, Spin, Alert, Icon, Switch } from "antd";

class Loadings extends Component {

    state = {
        loading: false
    }

    toggle = (value) => {
        this.setState({
            loading: value
        })
    }

    render() {
        const icon = <Icon type='loading'></Icon>;
        return (
            <div>
                <Card title='基本用法' className='card'>
                    <Spin size='small' />
                    <Spin style={{margin: '0 20px'}} />
                    <Spin size='large' />
                    <Spin indicator={icon} style={{marginLeft: '20px'}} />
                </Card>
                <Card title='容器加载' className='card'>
                    <Spin spinning={this.state.loading}>
                        <Alert
                        message='Alert Message Title'
                        description='看我的圈圈'
                        type='info'
                        />
                    </Spin>
                    <br/>
                    <Spin spinning={this.state.loading} indicator={icon} tip='加载中。。。'>
                        <Alert
                        message='Alert Message Title'
                        description='看我的圈圈'
                        type='info'
                        />
                    </Spin>
                    <Switch checked={this.state.loading} onChange={this.toggle} />
                </Card>
            </div>
        );
    }
}

export default Loadings;