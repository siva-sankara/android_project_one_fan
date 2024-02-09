import { configureStore } from "@reduxjs/toolkit";
import { JTLoginSlice } from "../reducers/JTLoginSlice";
import { JTUserDetailsSlice } from "../reducers/JTUserDetailsSlice";
import { JTSignUpSlice } from "../reducers/JTSignUpSlice";
import { JTExploreSlice } from "../reducers/JTExploreSlice";
import JTFeedSlice from "../reducers/JTFeedSlice";


const JTStore = configureStore({
    reducer: {
        loginDetails: JTLoginSlice.reducer,
        userDetails : JTUserDetailsSlice.reducer,
        signupDetails : JTSignUpSlice.reducer,
        exploreDetails :JTExploreSlice.reducer,
        feedDetails : JTFeedSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck:false})
});

export default JTStore;