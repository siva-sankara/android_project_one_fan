import { createSlice } from "@reduxjs/toolkit"
export  const JTSignUpSlice = createSlice({
    name : "signup",
    initialState : {
        signupData  : null,
        loading : false, 
        error : null
    },
    reducers :{
        signupSuccess(state , action){
            state.signupData = action.payload;
            state.loading = false;
        },
        signUpStart(state){
            state.loading = true;
        }, 
        singupFailuer(state, action){
            state.error = action.payload;
            state.loading =  false;
        }

    }
 })

 export const {signupSuccess ,signUpStart ,singupFailuer} = JTSignUpSlice.reducer