import * as ActionTypes from '../actions/ActionTypes';

const Auth = (state = { status: 'login' }, action) => {
    switch (action.type) {
        case (ActionTypes.CHANGE_AUTH_STATUS): {
            return {
                ...state,
                status: action.payload
            };
        }
        default:
            return state;
    }
};

export { Auth as default };