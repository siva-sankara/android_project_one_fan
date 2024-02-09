import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDimensionsChange } from "react-native-responsive-dimensions";
import { profileFailure, setUserDetails } from "../reducers/JTUserDetailsSlice";
import JTAxiosInstance from "../utils/JTAxiosInstance";
import { endpoints } from "./JTAPIs";


const JTUserDetailsService = createAsyncThunk("getCurrentCustomer", async({dispatch}) =>{
    try{
      let response = await JTAxiosInstance.get(
        `${endpoints.CURRENT_CUSTOMER}`
      );
      console.log("customer data",response.data);
      dispatch(setUserDetails(response.data))
      return response.data;
    } catch(error){
      console.log(error);
      dispatch(profileFailure(error.message));
    }
});

export default JTUserDetailsService;

