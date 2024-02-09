
import { createSlice } from "@reduxjs/toolkit"
 
export default JTFeedSlice = createSlice({
    name:"feed",
    initialState:{
        data :null,
        loading:false,
        feedimages :[],
        error:null
    },
    reducers:{
        startFeedRequest(state,action){
            state.loading=true;
            state.error=null;
        },
        addFeedItems(state,action){
            state.data = action.payload;
            state.loading=true;
        },
        feedRequestFailure(state,action){
            state.error=action.payload;
            state.loading=false;
        }, 
        setFeedimages(state, action){
            state.feedimages.push(action.payload)
        }
 
    }
})
 
export const {startFeedRequest,addFeedItems,feedRequestFailure, setFeedimages}=JTFeedSlice.actions