import {createStore} from 'redux';
import reducer from './reducers';

let initialState = {
    repos :[],
    username : ''
};


export default createStore(reducers);