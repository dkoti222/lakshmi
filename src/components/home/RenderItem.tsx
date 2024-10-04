import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Data} from '../home/data'
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedElementStackParamList} from '../../navigation/Navigation'
import Animated, {FadeInDown} from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '../../locales/globalFonts';

type Props = {
  item: {    id: number;
    name: string;
    location: string;
    image: number;
    about: string;
  };
  index: number;
};
const RenderItem = ({item, index}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('Detail', {item});
        }}>
        <Animated.Image
          source={item.image}
          style={styles.image}
          sharedTransitionTag={item.name}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textLocation}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:hp(4),
    backgroundColor: 'white',
    paddingHorizontal:wp(2),
    marginHorizontal:wp(2),
    borderRadius: 20,
  },
  image: {
    width:wp(40),
    height:hp(16),
    borderRadius: 10,
    alignSelf:'center',
  },
  textContainer: {
    marginHorizontal:wp(4),
    marginVertical:hp(2),
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize:hp(3),
    fontFamily:fonts.bold
  },
  textLocation: {
    color: '#323232',
    fontSize:hp(2),
    fontFamily:fonts.semiBold
  },
});

