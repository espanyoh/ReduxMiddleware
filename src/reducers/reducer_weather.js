import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    console.log('[REDUCER] Action  ', action);
    switch (action.type){
    case FETCH_WEATHER:
        return [ action.payload.data, ...state ]; //state.concat([action.payload.data]);     //state.push(action.payload.data);  //[ action.payload.data ];

    }


    return state;
}