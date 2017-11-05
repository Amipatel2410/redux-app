import {createStore} from 'redux';
import reducers from './reducers';

let initialState = {
    repos :[],
    username : 'Amisha'
};


export default createStore(reducers,initialState);