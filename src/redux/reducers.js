/**
 * Created by Alone on 2018/10/31.
 */

import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERR_MSG} from './action-types';

const initUserState = {
  username:'',
  type:'',
  msg:''
}
function user (preState = initUserState, action) {
  switch (action.type){
    case AUTH_SUCCESS :
      return {username:action.data.username, type:action.data.type, msg:''}
    case ERR_MSG :
      return {...preState, msg:action.data}
    default :
      return preState;
  }
}


export default combineReducers ({
  user
})