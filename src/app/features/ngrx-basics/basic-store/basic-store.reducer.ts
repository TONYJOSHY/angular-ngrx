import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, changeText, incrementBy, decrementBy } from './basic-store.action';
import { initialState } from './basic-store.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => { 
    return {
      ...state, counter: state.counter + 1 
    } 
  } ),
  on(decrement, (state) => {
    return {
      ...state, counter: state.counter - 1
    }
  }),
  on(reset, (state) => {
    return {
      ...state, counter: 0
    }
  }),
  on(changeText, (state, action) => {
    return {
      ...state, name: action.changeBy
    }
  } ),
  on(incrementBy, (state, action) => { 
    return {
      ...state, counter: state.counter + action.value
    } 
  } ),
  on(decrementBy, (state, action) => {
    return {
      ...state, counter: state.counter - action.value
    }
  })
);