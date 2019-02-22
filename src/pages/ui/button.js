import React, { Component } from 'react';
import { Card, Button, Icon, Radio } from "antd";

import './index.less'

const ButtonGroup = Button.Group;

class Buttons extends Component {

    state = {
        loading: false,
        iconLoading: false,
        size: 'default'
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }

    toggleSize = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title='基础按钮' className='card'>
                    <Button type='primary'>Immoc</Button>
                    <Button>Immoc</Button>
                    <Button type='dashed'>Immoc</Button>
                    <Button type='danger'>Immoc</Button>
                </Card>
                <Card title='图形按钮' className='card'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search' />
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='加载按钮' className='card'>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                        Click me!
                    </Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                        Click me!
                    </Button>
                    <Button shape="circle" loading />
                    <Button type="primary" shape="circle" loading />
                </Card>
                <Card title='按钮组' className='card'>
                    <ButtonGroup className='group'>
                        <Button type='primary'><Icon type='left'></Icon>返回</Button>
                        <Button type='primary'>前进<Icon type='right'></Icon></Button>
                    </ButtonGroup>
                </Card>
                <Card title='按钮尺寸' className='card'>
                    <Radio.Group value={this.state.size} onChange={this.toggleSize}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>你号没了</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;