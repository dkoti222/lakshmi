import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import Dot from './Dot';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
  data: { id: number; image: any; text: string; textColor: string; backgroundColor: string; }[]
  buttonVal: SharedValue<number>;
};
const Pagination = ({ data, buttonVal }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((each:{}, index: number) => {
        return <Dot index={index} buttonVal={buttonVal} key={index} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(8)
  },
});