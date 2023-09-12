import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import appConfig from '../../../styles/theme';

const CartButton = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../../assets/icons/cart.png')}
      />
      <View style={styles.countStyle}>
        <Text style={styles.countTextStyle}>1</Text>
      </View>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    justifyContent: 'center',
  },
  imageStyle: {
    height: 22,
    width: 22,
    alignSelf: 'center',
    tintColor: appConfig.colors.white,
  },
  countStyle: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 16,
    right: -3,
    top: 0,
    backgroundColor: appConfig.colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  countTextStyle: {
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: appConfig.colors.white,
    bottom: 1,
  },
});
