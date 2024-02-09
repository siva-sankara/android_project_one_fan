import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import JTAxiosInstance from "../utils/JTAxiosInstance";
import { endpoints } from "./JTAPIs";

const JTSignupService =()=> createAsyncThunk( " ", async(data)=>{
    const firstname = data.firstname;
    const lastname = data.lastname;
    const email = data.email;
    const password  =  data.password;
    const confirmPassword  =  data.confirmPassword;

    const credentials = {
        'primaryContactFirstName' : firstname,
        'primaryContactLastName' : lastname,
        'primaryConatact' : email,
        "password" : password,
        'confirmPassword ' : confirmPassword,
    }
    try {
        let response =  await JTAxiosInstance.post(
            `${endpoints.NEW_SIGN_UP}`,
            credentials
        ) 
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
})
export default JTSignupService.reducer;