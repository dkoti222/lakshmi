
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Animated,
} from 'react-native';
import React, { useRef } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTabNavigationiagtion = ({ state, descriptors, navigation, icons }) => {


  
    return (
        <View style={{ backgroundColor: '#FFEDD5' }}>
            <View
                style={{
                    flexDirection: 'row',

                }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    const IconComponent = index === 0 ? MaterialCommunityIcons : Feather;
                    const iconName = icons[route.name];
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            activeOpacity={1}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                flex: 1,
                                backgroundColor: '#EA580A',
                                height: hp(8),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            key={index}>
                            <View style={isFocused ? styles.circle : null}>
                                <IconComponent
                                    name={iconName}
                                    size={25}
                                    color={isFocused ? '#EA580A' : 'white'}
                                />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default CustomTabNavigationiagtion;

const styles = StyleSheet.create({
    circle: {
        borderRadius:
            Math.round(
                Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
        width: Dimensions.get('window').width * 0.11,
        height: Dimensions.get('window').width * 0.11,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fd9644',
    },
});