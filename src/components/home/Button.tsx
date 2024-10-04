
import {Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Button = () => {
  const {width} = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      style={[
        styles.container,
        {width: width * 0.9, marginBottom: inset.bottom + hp(4)},
      ]}
      entering={FadeInDown.delay(1500)}
      onPress={() => {
        console.log('BOOKING NOW');
      }}>
      <Text style={styles.text}>Booking Now</Text>
    </AnimatedPressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c6cce',
    width:wp(92),
    paddingVertical:hp(2),
    alignItems: 'center',
    borderRadius: 40,
    marginBottom:hp(4)
  },
  text: {
    fontSize: hp(2.5),
    color: 'white',
    fontWeight: 'bold',
  },
});


