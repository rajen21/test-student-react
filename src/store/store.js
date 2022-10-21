import { configureStore, combineReducers } from '@reduxjs/toolkit';
import studentsReducer from '../containers/show/store';
import studentReducer from '../containers/create/store';

const reducer = combineReducers({
    studentReducer,
    studentsReducer
})

export const store = configureStore({ reducer });