import React, { Component } from 'react';
import {Tabs, Card, Icon, Button } from 'antd'

const TabPane = Tabs.TabPane;

class ITabs extends Component {

    state = {
        activeKey: '1',
        panes: [
            {
                tab: 'tab 1',
                key: '1',
                content: 'tab 1'
            },
            {
                tab: 'tab 2',
                key: '2',
                content: 'tab 2'
            },
            {
                tab: 'tab 3',
                key: '3',
                content: 'tab 3'
            }
        ]
    }

    handleChange = (key) => {
        this.setState({
            activeKey:key
        })
    }

    //执行增加删除操作时的回调
    handleEdit = (targetKey,action) => {
        // console.log(targetKey,x);
        this[action](targetKey);
    }

    add = () => {
        let { panes, activeKey } = this.state;
        if(panes.length){
            activeKey = panes[panes.length - 1].key + 1 ;
        } else {
            activeKey = '1';
        }
        panes.push({
            tab: 'new tab',
            key: activeKey,
            content: 'new content'
        });
        this.setState({
            activeKey,
            panes
        })
    }

    remove = (targetKey) => {
        let {activeKey, panes} = this.state;
        let targetIndex;
        if(targetKey === activeKey) {
            panes.forEach( (data, index) => {
                if(data.key === targetKey){
                    if(index !== 0){
                        targetIndex = index - 1;
                    } else {
                        targetIndex = 0;
                    }
                }
                //console.log(index, targetIndex);
            })
        }
        panes = panes.filter( data=> data.key !== targetKey);
        if(panes.length&&(targetKey===activeKey)){
            activeKey = panes[targetIndex].key;
        }
        //console.log(activeKey, panes);
        this.setState({
            activeKey,
            panes
        })
    }

    render() {
        return (
            <div>
                <Card title='Tab页签' className='card'>
                    <Tabs defaultActiveKey='1' onChange={this.handleChange}>
                        <TabPane tab='tab 1' key='1'>tab 1</TabPane>
                        <TabPane tab='tab 2' key='2' disabled>tab 2</TabPane>
                        <TabPane tab='tab 3' key='3'>tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab带图的页签' className='card'>
                    <Tabs defaultActiveKey='1' onChange={this.handleChange} type='card'>
                        <TabPane tab={<span><Icon type='apple' />apple</span>} key='1'>Apple</TabPane>
                        <TabPane tab={<span><Icon type='android' />android</span>} key='2'>Android</TabPane>
                    </Tabs>
                </Card>
                <Card title='动态修改Tabs' className='card'>
                    <Button icon='plus' type='primary' onClick={this.add}>Add</Button>
                    <Tabs defaultActiveKey='1' activeKey={this.state.activeKey} hideAdd type='editable-card' onChange={this.handleChange} onEdit={this.handleEdit}>
                        {this.state.panes.map( data => <TabPane tab={data.tab} key={data.key}>{data.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default ITabs;