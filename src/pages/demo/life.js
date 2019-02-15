import React from 'react';
import './index.less'
import { Button } from "antd";
import 'antd/dist/antd.css'

export default class Life extends React.Component {

    state = {
        count: 0
    }

    handleClick = () => {
        let {count} = this.state;
        count++;
        this.setState({
            count : count
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div className='app'>
                <button onClick={this.handleClick}>点我</button>
                <Button onClick={this.handleClick}>点我</Button>
                <p>{count}</p>
            </div>
        )
    }
}

