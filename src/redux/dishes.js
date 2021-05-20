import * as ActionTypes from './ActionTypes';

//Reducer function which takes 2 parameters previous state and action
//action.payload contains the information regarding dishes 
//if dishes failed then action.payload will be containing an error message
export const Dishes = (state = { 
    isLoading: true,
    errMess: null,
    dishes:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes:[]}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes:[]};

        default:
            return state;
    }
};