import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "../features/cake/cake-slice";
import icecreamReducer from "../features/icecream/icecream-slice";
import userReducer from "../features/user/user-slice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch