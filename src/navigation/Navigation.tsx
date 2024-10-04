import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../components/onboarding/Onboarding';
import Home from '../components/home/Home';
import Detail from '../components/home/Detail';
import { Data } from '../components/home/data';

export type SharedElementStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Detail:any
};
const Stack = createNativeStackNavigator<SharedElementStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
