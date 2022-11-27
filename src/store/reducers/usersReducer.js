import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/usersAction";
import { getUser } from "../actions/usersAction";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        usersContainer: [],
        loader: false,
        errors: {},
        user: {},
    },
    reducers: {
        addUser: (state, action) => {
            // console.log(action);
            state.users = [...state.users, action.payload]
        },
        filteredUser: (state, action) => {
            state.users = state.usersContainer.filter(user => user.name.toLowerCase().includes(action.payload));
        }
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loader = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loader = false;
            state.usersContainer = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loader = false;
            state.loader = action.payload;
        },


        [getUser.pending]: (state, action) => {
            state.loader = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loader = false;
            state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.errors = action.payload;
            state.loader = false;
        }
    }
});
export const { addUser, filteredUser } = usersReducer.actions;
export default usersReducer.reducer;