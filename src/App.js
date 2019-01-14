import React from 'react'
import {Button,message} from 'antd'
import {BrowserRouter,Route,Switch}from 'react-router-dom'

import Login from './pages/login/login'
import Login from './pages/admin/admin'
//应用根组件
 export default class App extends React.Component{
    handleClick = () => {
        message.error('响应点击')

    }
    render(){
        return(
            <div>
                <Button type='primary' onClick={this.handleClick}>Test</Button>
            </div>
        )
    }
}