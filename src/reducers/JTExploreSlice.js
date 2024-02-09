import { createSlice } from '@reduxjs/toolkit'

export const JTExploreSlice = createSlice({
    name : "explore",
    initialState : {
        placesData :[],
        actorsData : [],
        hotelsData :[],
        templesData : [],
        
        loading  : false,
        error : null,
    }, 
    reducers  : {
        startExplore(state){
            state.loading =  true;
            state.error =  null
        },
        exploreFailure(state, action){
            state.error =  action.payload;
            // state.loading =  false
        },
        setPlacesData(state, action ){
            // state.loading = false ; 
            state.placesData =  action.payload;
        },
        setactorDatas(state, action ){
            // state.loading = false ; 
            state.placesData =  action.payload;
        },
        setHotelsData(state, action ){
            // state.loading = false ; 
            state.placesData =  action.payload;
        },
        setTemplesData(state, action ){
            // state.loading = false ; 
            state.placesData =  action.payload;
        },
        exploreSuccess(state , action){
            state.loading =  false
            state.loading = action.payload
        }
    }
})
export const {setPlacesData , setactorDatas , setTemplesData , exploreSuccess, exploreFailure, startExplore} = JTExploreSlice.actions