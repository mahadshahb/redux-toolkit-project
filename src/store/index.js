import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
export default configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});