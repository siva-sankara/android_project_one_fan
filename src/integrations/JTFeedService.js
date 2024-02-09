import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { endpoints } from "./JTAPIs";
import JTFeedInstance from "../utils/JTFeedInstance";
import { addFeedItems } from "../reducers/JTFeedSlice";

const JTFeedService =  createAsyncThunk("exploreDetails",async({dispatch})=>{
//   const dispatch = useDispatch()
    try {
        // dispatch(startExplore())
        let response =  await JTFeedInstance.get(
            `${endpoints.FEED_API}?pageNo=${0}&pageSize=${60}`
        )
        console.log(response);
        dispatch(addFeedItems(response.data));
    } catch (error) {
        console.log(error)
        // dispatch(exploreFailure())
    } 
})

export default  JTFeedService;