import React from 'react';
import { Row, Col } from "antd";
import axios from 'axios';

import './index.less'
import MenuConfig from './../../config/menuConfig'

export default class Header extends React.Component {

    state = {
        img: '/favicon.ico',
    }

    componentWillMount () {
        let timeNow;
        setInterval(() => {
            timeNow = this.renderTime();
            this.setState({
                time: timeNow
            })
        }, 1000);

        let url = window.location.href;
        this.parseUrl(url);
    }

    componentDidMount () {
        axios.post('http://freecityid.market.alicloudapi.com/whapi/json/alicityweather/briefforecast3days',{
        },{
            headers: {
                'Authorization':'APPCODE 7a3c2065c1d642569566dba45becace0'
            },
            params: {
                'cityId': '2'
            }
        }).then( res => {
            //console.log(res.data.data.forecast[0]);
            const result = res.data.data.forecast[0];
            let weather;
            if(result.conditionDay !== result.conditionNight){
                weather = result.conditionDay + '转' + result.conditionNight;
            } else {
                weather = result.conditionNight;
            }
            this.setState({
                weather
            });
        }).catch( err => {
            console.log(err.message);
        })
    }

    componentWillReceiveProps (newProps) {
        let url = window.location.href;
        this.parseUrl(url);
    }

    parseTime = (part) => {
        if(part < 10){
            part = '0' + part;
        }
        return part;
    }

    renderTime = () => {
        const a = new Date();
        const time = a.getFullYear() + '-' + this.parseTime(a.getMonth() + 1) + '-' + this.parseTime(a.getDate()) + '  ' + this.parseTime(a.getHours()) + ':' + this.parseTime(a.getMinutes()) + ':' + this.parseTime(a.getSeconds());
        return time;
    }

    parseUrl = (url) => {
        var start = url.indexOf('#') + 1;
        let path = url.slice(start);
        if(path === '/'){
            path = '/home';
        }
        MenuConfig.map( item => {
            if(item.children){
                item.children.map( data => {
                    //console.log(data.key === path)
                    if(data.key === path){
                        this.setState({
                            title: data.title
                        })
                    }
                } );
            }
            //console.log(item.title === path)
            if(item.key === path){
                this.setState({
                    title: item.title
                })
            }
        });
        //console.log(path);  
    }

    render() {
        return (
            <div>
                <Row className='userinfo'>
                    <Col span={24}>
                        <span>欢迎，   河畔一角</span>
                        <a href="javascript:void(0);">退出</a>
                    </Col>
                </Row>
                <Row className='weainfo'>
                    <Col span={6} className='title'>{this.state.title}</Col>
                    <Col span={18} className='weather-info'>
                        <span className='time'>
                            {this.state.time}
                        </span>
                        <span className='weather'>
                            <img src={this.state.img} alt="" />
                            <span>{this.state.weather}</span>
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}