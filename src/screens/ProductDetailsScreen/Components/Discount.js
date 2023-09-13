import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appConfig from '../../../styles/theme';

const Discount = ({percentage}) => {
  const roundedDiscount = Math.round(percentage);
  return (
    <>
      {percentage ? (
        <View style={styles.container}>
          <Text style={styles.textStyle}>{roundedDiscount}% Off</Text>
        </View>
      ) : null}
    </>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textStyle: {fontWeight: 'bold', color: appConfig.colors.white},
});
