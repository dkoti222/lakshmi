import React, { useRef } from 'react';
import { Animated, StyleSheet, Text,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from '../home/data';
import RenderItem from '../home/RenderItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '../../locales/globalFonts';

// Wrap FlatList with Animated
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = ({ onScroll }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Popular Destinations</Text>
      <AnimatedFlatList
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} />;
        }}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll} // pass the animated scroll handler
        scrollEventThrottle={16} // This ensures smooth scrolling
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  text: {
    fontSize: hp(4),
    marginHorizontal: wp(4),
    fontFamily: fonts.bold,
    color: '#323232',
  },
});
