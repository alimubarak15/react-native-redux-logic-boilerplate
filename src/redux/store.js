import {applyMiddleware, createStore} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import {arrLogic} from './logics';
import {reducer} from './reducer';
import axios from 'axios';

//dependencies used
const deps = {
  // injected dependencies for logic
  httpClient: axios,
};

// middleware
const logicMiddleware = createLogicMiddleware(arrLogic, deps);

//create store with initial state
export const store = createStore(reducer, applyMiddleware(logicMiddleware));
