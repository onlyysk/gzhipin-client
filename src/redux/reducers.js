/**
 * Created by Alone on 2018/10/31.
 */

import {combineReducers} from 'redux'
const xxxState = 123
function xxx (preState = xxxState, action) {
  switch (action.type){
    default:
      return preState
  }
}

const yyyState = [{}]
function yyy (preState = yyyState, action) {
  switch (action.type){
    default:
      return preState
  }
}

export default combineReducers ({
  xxx,
  yyy
})