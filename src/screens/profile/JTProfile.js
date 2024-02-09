import React, {useEffect} from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import JTUserDetailsService from "../../integrations/JTUserDetailsService";

const JTProfile =() => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userDetails);
    console.log(user,"ytrdjydtfcjy");
    useEffect(()=>{
            dispatch(JTUserDetailsService({dispatch}));
    },[]);

    console.log(user);
    
    return( 
        <View>
            <Text>{user.email}</Text>
            <Text>{user.firstName}</Text>
            <Text>{user.lastName}</Text>
            <Text>{user.primaryContact}</Text>
        </View>
    )
}
export default JTProfile;