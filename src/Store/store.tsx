import UserReducer from '../redux/UserReducer'
import {configureStore} from '@reduxjs/toolkit'

const store= configureStore({
    reducer: {
    users: UserReducer,
},
})

export default store
// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;