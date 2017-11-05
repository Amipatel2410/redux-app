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

export default reducer;