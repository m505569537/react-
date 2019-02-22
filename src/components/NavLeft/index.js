import React from 'react'
import {Menu} from 'antd'
import { Link } from "react-router-dom";

import MenuConfig from './../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {

    componentWillMount () {
        //得到menu树结点
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        });
    }

    renderMenu = (data) => {
        return data.map( item => {
            //利用遍历和递归实现节点的设置
            if(item.children){
                return (
                    <SubMenu key={item.key} title={<span>{item.title}</span>}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}><Link to={item.key}>{<span>{item.title}</span>}</Link></Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="favicon.ico" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}