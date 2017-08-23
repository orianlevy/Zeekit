import {
    combineReducers
} from 'redux'
import {
    SET_COUNTRY,


} from '../actions/action'

const initialState = {
    fetching: false,
    fetched: false,
    error: null
}

function countryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRY:
            return Object.assign({}, state, {
                region: action.data.region,
                languages: action.data.languages,
                name: action.data.name,
                borders: action.data.borders,
                fetched: true
            })
        default:
            return state
    }
}



const reducer = combineReducers({
	countryReducer
});

export default reducer