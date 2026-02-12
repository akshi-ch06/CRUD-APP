import { createSlice } from "@reduxjs/toolkit";
import { userList } from '../Data'

const UserReducer = createSlice({
    name:"users",
    initialState: userList,
    reducers:{

        addUser: (state, action) => {
            console.log("Action user", action);
            state.push(action.payload);
        },

        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        
        deleteUser: (state, action) => {
            const  id  = action.payload;
            console.log(id)
            return state.filter(user => user.id != id);
        }
    }
})

export default UserReducer.reducer
export const{deleteUser, addUser, updateUser}= UserReducer.actions