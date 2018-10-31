import React, {Component} from 'react';
import {NavBar, WingBlank, List, InputItem, Switch, Stepper, Range, Button,  WhiteSpace, Radio} from 'antd-mobile'

import Logo from '../logo'

const Item = List.Item;

class Register extends Component {
  state = {
    username:'',
    password:'',
    rePassword:'',
    type:'laoban'
  }
  
  handleChange = (name,val) => {
    this.setState({
      [name]:val
    })
  }
  
  register = () => {
    const {username, password, rePassword, type} = this.state;
    console.log({username, password, rePassword, type})
  }
  
  goLogin = () => {
    this.props.history.replace('./login')
  }
  
  render () {
    const {type} = this.state;
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo />
        <WingBlank>
          <form>
            <List>
              <WhiteSpace/>
              <InputItem  placeholder="请输入用户名" onChange={val => {this.handleChange('username',val)}}>用户名：</InputItem>
              <WhiteSpace/>
              <InputItem  placeholder="请输入密码" type="password" onChange={val => {this.handleChange('password',val)}}>密码：</InputItem>
              <WhiteSpace/>
              <InputItem  placeholder="请输入确认密码" type="password" onChange={val => {this.handleChange('rePassword',val)}}>确认密码：</InputItem>
              <Item>
                用户类型：&nbsp;&nbsp;
                <Radio className="my-radio" checked={type === 'dashen'} onClick={() => {this.handleChange('type','dashen')}}>大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio className="my-radio" checked={type === 'laoban'} onClick ={() => {this.handleChange('type','laoban')}}>老板</Radio>
              </Item>
              <WhiteSpace />
              <Button type="primary" onClick={this.register}>注 册</Button>
              <WhiteSpace />
              <Button type="primary" onClick={this.goLogin}>已有账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;