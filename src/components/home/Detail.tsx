import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
import Header from '../home/Header'
import Button from '../home/Button'
import {RouteProp} from '@react-navigation/native';
import { SharedElementStackParamList } from '../../navigation/Navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '../../locales/globalFonts';

export interface Item  {
        name: string;
        location: string;
        image: number;
        about: string;
};

const Detail = (props:any) => {
  const {item} = props?.route?.params;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={item.name}
            source={item.image}
            style={{width: width, height: width}}
          />
          <Animated.View
            style={styles.textContainer}
            entering={FadeIn.delay(600)}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textLocation}>{item.location}</Text>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>About</Text>
          <Text style={styles.text}>{item.about}</Text>
        </Animated.View>
      </View>
      <Button />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal:wp(4),
    paddingVertical:hp(1),
    left:wp(4),
    right:wp(4),
    bottom: hp(2),
    zIndex: 1,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 20,
  },
  textName: {
    color: 'white',
    fontSize:hp(4),
    fontFamily:fonts.bold

  },
  textLocation: {
    color: 'white',
    fontSize: hp(2),
    fontFamily:fonts.semiBold
  },
  textAbout: {
    color: '#323232',
    fontSize: hp(4),
    fontWeight: 'bold',
    marginVertical:hp(1),
    marginHorizontal:wp(2)
  },
  text: {
    color: '#323232',
    fontSize:hp(2),
    marginHorizontal:wp(2),
    textAlign: 'justify',
  },
});

