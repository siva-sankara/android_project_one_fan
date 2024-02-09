import { createSlice } from "@reduxjs/toolkit"

export const JTUserDetailsSlice = createSlice({
    name:"userDetails",
    initialState:{
        id:null,
        email:null,
        firstName:null,
        lastName:null,
        primaryContact:null,
        loading:false,
        roles:[],
        error:null,
    },
    reducers:{
        setUserDetails(state,action){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.primaryContact = action.payload.primaryContact;
            state.roles = action.payload.roles;
            state.loading = false;
        },
        profileFailure(state,action){
            state.error = action.payload
        }
    }
})

export const {setUserDetails,profileFailure} = JTUserDetailsSlice.actions;