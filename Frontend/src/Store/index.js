import { combineReducers } from 'redux'


import {
    FetchAllReducer,
} from './Reducer/Fetchreduce'

import {
    InsertAllReducer
} from './Reducer/Insertreduce'

import {
    ViewByIdReducer
} from './Reducer/ViewByIdReducer'

import {
    UpdateReducer
} from './Reducer/UpdateReducer'

import {
    DeleteDataReducer
} from './Reducer/DeleteDataReduce'

import {
    LoginDataReducer
} from './Reducer/LoginDataReduce'

const rootReducer = combineReducers({
    ViewAllData: FetchAllReducer,
    InsertData: InsertAllReducer,
    ViewById: ViewByIdReducer,
    UpdateData: UpdateReducer,
    DeleteData: DeleteDataReducer,
    LoginData: LoginDataReducer
})


export default rootReducer;