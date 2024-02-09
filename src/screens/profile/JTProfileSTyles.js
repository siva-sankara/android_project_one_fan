import {StyleSheet} from 'react-native'
import Config from '../../constants/Config'
export const styles = StyleSheet.create({
    profileContainer:{
        margin:Config.deviceWidth*0.02,
       
    },
    USerStatusBar:{
        flexDirection:"row",
    },
    statusText:{
        fontSize:20, 
        color:"black", 
        marginLeft:20, 
        fontWeight:"600"
    },
    profileMainConatiner:{
        padding:10
    },
    userProfileImage:{
        width:120,
        height:120,
        borderRadius:120/2
    },
    profileDetails:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    detailsConatiner:{
        width:"55%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
      
    },
    profileImageText:{
        width:"40%",
         alignItems:"center",

    },
    userName:{
        fontSize:18,
        color:"black",
        width:"100%",
      
    },numberText:{
        fontWeight:"bold",
        color:"black",
        fontSize:16
    },
    userData:{
        width:"55%"
    },
    btnContainer:{
        marginTop:15,
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly"
    },
    eachBtn:{
       backgroundColor:"lightgray",
       justifyContent:"center",
       paddingHorizontal:20,
       paddingVertical:3,
       borderRadius:10
    },
    profileIcon:{
        backgroundColor:"lightgray",
        justifyContent:"center",
        paddingHorizontal:10,
       paddingVertical:3,
       borderRadius:15,
    }

   
})