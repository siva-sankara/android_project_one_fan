import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAweSomeIcon from 'react-native-vector-icons/FontAwesome';
import {styles} from './JTExploreSTyles';
import {useState} from 'react';
import LoveIcon from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Entypo';
import BellIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';

const famousActors = [
  {
    name: 'DQ💖 dhulkarrrrrrrrrrrrrrrrrrrr',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    proffesion: 'Indian Actor',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    proffesion: 'Indian Actor',
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    proffesion: 'Indian Actor',
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    proffesion: 'Indian Actor',
  },
  {
    name: 'DQ💖 dhulkar',
    image:
      'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
    proffesion: 'Indian Actor',
  },
];
const hotels = [
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    proffesion: 'Famous Hotels',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    proffesion: 'Famous Hotels',
  },
  {
    name: 'Vizag',
    image:
      'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
    proffesion: 'Famous Hotels',
  },
];

const popularplaces = [
  {
    name: 'Aruku',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIFd1thkfpQzJUp5ZMuH3K3sZx-d2LwHDK16la5Z3ZQ&s',
    proffesion: 'Famous Places',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    famousPlaces: [
      {
        name: 'Aruku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Aruku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Aruku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Aruku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Aruku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
      {
        name: 'Aruku',
        image:
          'https://www.savaari.com/blog/wp-content/uploads/2021/05/Araku-Valley2-weather.jpg',
        proffesion: 'Famous Places',
      },
    ],
    temples: [
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
    ],
    restarents: [
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
    ],
  },
  {
    name: 'Vizag ',
    image:
      'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
    proffesion: 'Famous Places',
    PlaceDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    famousActors: [
      {
        name: 'DQ💖 dhulkarrrrrrrrrrrrrrrrrrrrrrrrrrr',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
      {
        name: 'DQ💖 dhulkar',
        image:
          'https://w0.peakpx.com/wallpaper/703/215/HD-wallpaper-dulquar-salman-chuvannabhoomi-cute-digital-dq-dulquar-dulquarsalman-kammattipadam-look-neelakasham-pachakadal.jpg',
        proffesion: 'Indian Actor',
      },
    ],
    famousPlaces: [
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
      {
        name: 'Vizag',
        image:
          'https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=',
        proffesion: 'Famous Places',
      },
    ],
    temples: [
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Simhachalam-temple-2_big.jpg/222px-Simhachalam-temple-2_big.jpg',
        proffesion: 'Famous Temples',
      },
    ],
    restarents: [
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
        PlaceDesc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
      {
        name: 'Simha chalam',
        image:
          'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        proffesion: 'Famous Temples',
      },
    ],
  },
];
const JTExplore = () => {
  const navigation = useNavigation();
  const [searchData, setSearchData] = useState();
  const exloreData = useSelector(state  => state.exploreDetails)
  console.log(exloreData,"exploreeeeeeeeeeeeeeeeee");
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.exploreContainer}>
          <View style={styles.serchContainer}>
            <View style={styles.searchIcon}>
              <FontAweSomeIcon name="search" size={15} color={'white'} />
            </View>
            <TextInput
              placeholder="Search Here"
              style={{width: '90%', fontSize: 16, paddingLeft: 10}}
            />
          </View>
          <View>
            <View style={styles.seeAllContainer}>
              <Text style={styles.headingText}>Popular Places </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('seeall', {
                    id: popularplaces,
                  })
                }>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={popularplaces}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('eachexplore', {
                      id: item,
                      famousPlaces: item.famousPlaces,
                      famousActors: famousActors,
                      hotels: hotels,
                      temples: item.temples,
                      restarents: item.restarents,
                    })
                  }
                  style={styles.imageContainer}>
                  <Image source={{uri: item.image}} style={styles.image} />
                  <View style={[styles.nameAnsLikeContainer, styles.placeName]}>
                    <Text numberOfLines={2} style={styles.hotelText}>
                      {item.name}
                    </Text>
                    <TouchableOpacity>
                      <LoveIcon name="heart" size={15} color="red" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <View style={styles.seeAllContainer}>
              <Text style={styles.headingText}>Popular Hostel </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('seeall', {
                    id: hotels,
                  })
                }>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={hotels}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('eachexplore', {
                      id: item,
                      hotels: hotels,
                    })
                  }
                  style={styles.imageContainer}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.hotelImages}
                  />
                  <View style={styles.nameAnsLikeContainer}>
                    <Text numberOfLines={2} style={styles.hotelText}>
                      {item.name}
                    </Text>
                    <TouchableOpacity>
                      <LoveIcon name="heart" size={15}  />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <View style={styles.seeAllContainer}>
              <Text style={styles.headingText}>Famous Celebrities </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('seeall', {
                    id: famousActors,
                  })
                }>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={famousActors}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('eachexplore', {
                      id: item,
                      hotels: famousActors,
                    })
                  }
                  style={[styles.imageContainer, styles.famousActorsContainer]}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.actorsImage}
                  />
                  <View style={styles.nameAnsLikeContainer}>
                    <Text numberOfLines={2} style={styles.hotelText}>
                      {item.name}
                    </Text>
                    <TouchableOpacity>
                    <Icon name="star-check" size={22} color={Colors.primaryPink} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

      </View>
    </ScrollView>
  );
};

export default JTExplore;
