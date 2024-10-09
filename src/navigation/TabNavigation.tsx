import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/home/Home';
import Screen2 from '../components/home/Screen2';
import Screen3 from '../components/home/Screen3';
import CustomTabNavigation from './CustomTabNavigation';

const Tab = createBottomTabNavigator();

const icons = {
  Home: 'rocket-launch',
  Screen2: 'shopping-bag',
  Screen3: 'user',
};

const TabNavigation = () => {
  const tabOffset = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: tabOffset } } }],
    { useNativeDriver: true }
  );

  const translateY = tabOffset.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const opacity = tabOffset.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <Animated.View style={[styles.animatedTabBar, { transform: [{ translateY }], opacity }]}>
            <CustomTabNavigation {...props} icons={icons} />
          </Animated.View>
        )}
      >
        <Tab.Screen name="Home">
          {() => <Home onScroll={onScroll} />}
        </Tab.Screen>
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  animatedTabBar: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TabNavigation;
