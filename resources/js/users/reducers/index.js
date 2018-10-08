import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import cartReducer from './cartReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    usersReducer,
    form: formReducer,
    cartReducer
})

export default rootReducer;