import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-dom';
/*import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const userData = {
    name: " Joe",
    hobbies: [
        "reading",
        "computer games",
        "driving"
    ]
};


ReactDOM.render(<App user={userData}/>, document.getElementById('root'));
registerServiceWorker(); */
import store from './store';
import actions from './actions/constants';

let store = {
    repos: [],
    username: ""
};



function changeUser(value) {
    return {
        type: actions.CHANGE_USERNAME,
        data: {
            value
        }
    } 
}
// this function kicked in whenever store is update , 
store.subscribe(() => {
    console.log(store.getState());
})


/* 
const reducer = function (store, action) {
   let newStore;
   if(action.type === CHANGE_USERNAME){
       newStore = Object.assign({}, store, {username: action.data.value});
   } else {
       newStore = store;
   }

   return newStore;
}

*/

// dispatch method does work like reducer that we created before in this file
store.dispatch(changeUser("o"));
console.log(store);

store.dispatch(changeUser("oc"));
console.log(store);

store.dispatch(changeUser("oct"));
console.log(store);

store = reducer(store, {
    type: actions.FETCHED_REPOS,
    data: {
        value: [
            {
                "id": 18221276,
                "name": "git-consortium",
                "full_name": "octocat/git-consortium"                
              }
        ]
    }
});

console.log(store);