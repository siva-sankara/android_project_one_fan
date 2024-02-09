import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'
export const styles = StyleSheet.create({
    highLightsContainer:{
      width:"100%",
      marginTop:5,
      flexDirection:"row",
      paddingLeft:15,
    },

    firstHighlight:{
        width:60,
        height:60,
        borderRadius:60/2,
        backgroundColor:Colors.primaryGrey,
        alignItems:"center",
        justifyContent:"center"
    },
    eachHighlightImage:{
        height:60,
        width:60,
        borderRadius:60/2,
        backgroundColor:Colors.primaryGrey,
    },
    userHighlights:{
       marginHorizontal:7,
       alignItems:"center",
       
    },
    imageAndTagIcons:{
        flexDirection:"row",
        marginTop:10
    },
    horizantalRow:{
        width:"100%",
        height:3,
        backgroundColor:Colors.primaryGrey
    },


    flatListContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
      },
      imageContainer: {
        marginRight: 10, 
        marginBottom: 10, 
      },
      image: {
        width: 115, 
        height: 100, 
        resizeMode: 'cover', 
      },
})