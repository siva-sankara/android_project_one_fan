import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {styles} from './HighlightsStyles';
import Icon from 'react-native-vector-icons/AntDesign';
const hightLights = [
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hellosssssssssssssssssssssssss"
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },
  {
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },{
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },{
    images:
      'https://st2.depositphotos.com/13108546/46538/i/450/depositphotos_465382586-stock-photo-woman-mountains-landscape-autumn.jpg',
    vedio: 'https://www.youtube.com/shorts/IyOv7Yhxaaw?feature=share',
    desc:"hello"
  },
];
export default function Hightlights() {
  return (
    <View>
      <View>
        <Text>Story Highlights 🪄</Text>
        <Text> Keep Your Favorite Stories on Your Profile</Text>
      </View>
      <View style={styles.highLightsContainer}>
        <TouchableOpacity>
          <View style={styles.firstHighlight}>
            <Icon name="plus" size={40} />
          </View>
          <Text>New</Text>
        </TouchableOpacity>
       
        <View>
          <FlatList
            data={hightLights}
            horizontal={true} // Set this prop to display items horizontally
            renderItem={({item}) => (
              <View style={styles.userHighlights}>
                <TouchableOpacity>
                  <Image
                    source={{uri: item.images}}
                    style={styles.eachHighlightImage}
                  />
                </TouchableOpacity>
                <Text style={{width:70}} numberOfLines={1}>{item.desc}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
