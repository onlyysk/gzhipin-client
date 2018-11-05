/*
 action creators模块：用来创建action对象的工厂函数模块
 - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */
import {reqlogin, reqregister} from '../api';
import {AUTH_SUCCESS, ERR_MSG} from './action-types';

export const authSuccess = user => ({type:AUTH_SUCCESS, data:user});
export const errMsg = msg => ({type:ERR_MSG, data:msg});

export const register = data => {
  return dispatch => {
    register(data)
    .then(res => {
      const result = res.data;
      if(result.code === 0){
        dispatch(authSuccess(result.data))
      }else{
        console.log(result.msg)
        dispatch(errMsg(result.msg))
      }
    })
    .catch(err => {
      dispatch(errMsg('网络不稳定，请重新试试~'))
    })
  }
}