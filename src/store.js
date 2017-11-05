import {createStore} from 'redux';
import reducers from './reducers';

let initialState = {
    repos :[],
    username : 'Amisha'
};


export default createStore(
                           reducers,
                           initialState,
                           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                        );