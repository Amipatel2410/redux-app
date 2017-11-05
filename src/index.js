/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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


let store = {
    repos: [],
    username: ""
};

const CHANGE_USERNAME =  'CHANGE_USERNAME';
const FETCHED_REPOS =  'FETCHED_REPOS'

const reducer = function (store, action) {
    let newStore;

    switch (action.type) {
        case CHANGE_USERNAME:
            newStore = Object.assign({}, store, {username: action.data.value});
            break;
        case FETCHED_REPOS:
            newStore = Object.assign({}, store, {repos: action.data.value});
            break;
        default: 
            newStore = store;
    }

    return newStore;
}

function changeUser(value) {
    return {
        type: CHANGE_USERNAME,
        data: {
            value
        }
    } 
}

store = reducer(store, changeUser("o"));
console.log(store);

store = reducer(store, changeUser("oc"));
console.log(store);

store = reducer(store, changeUser("oct"));
console.log(store);

store = reducer(store, {
    type: FETCHED_REPOS,
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