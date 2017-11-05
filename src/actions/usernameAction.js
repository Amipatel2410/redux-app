import actions from './constants';

const changeUserName = (value) => {
    return {
        type: actions.CHANGE_USERNAME,
        data: {
            value
        }
    };
}

export default {
    changeUserName
};