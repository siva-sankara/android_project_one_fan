import { createAsyncThunk } from "@reduxjs/toolkit";
import JTAxiosInstance from "../utils/JTAxiosInstance";
import { endpoints } from "./JTAPIs";
import { useDispatch } from "react-redux";
import { exploreFailure, exploreSuccess, startExplore } from "../reducers/JTExploreSlice";

const JTExploreService =  createAsyncThunk("exploreDetails",async(data)=>{
    const dispatch =  useDispatch();
    try {
        dispatch(startExplore())
        let response =  await JTAxiosInstance.get(
            `${endpoints.EXPLORE}`
        )
        console.log(response);
        dispatch(exploreSuccess());
    } catch (error) {
        console.log(error)
        dispatch(exploreFailure())
    }
})

export default  JTExploreService;