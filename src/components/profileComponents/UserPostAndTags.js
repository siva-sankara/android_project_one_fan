import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './HighlightsStyles';
import Icon from 'react-native-vector-icons/Entypo';
import IconTag from 'react-native-vector-icons/AntDesign';
const userPosts = [
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    image:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },

  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
  },
];
const userTags = [
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
];
export default function UserPostAndTags() {
  const [posts, setPosts] = useState(userPosts);
  return (
    <View>
      <View style={styles.imageAndTagIcons}>
        <View style={{width: '50%', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setPosts(userPosts)}>
            <Icon name="images" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{width: '50%', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setPosts(userTags)}>
            <IconTag name="tags" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizantalRow}></View>
      <View>
        <FlatList
          data={posts}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={{uri: item.image}} style={styles.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
