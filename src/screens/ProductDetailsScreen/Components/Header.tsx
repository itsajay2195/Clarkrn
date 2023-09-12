import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import appConfig from '../../../styles/theme';
import {useNavigation} from '@react-navigation/native';
import CartButton from './CartButton';

const Header: React.FC = () => {
  const navigation = useNavigation(); // Get navigation from the hook

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtnWrapper}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/icons/angle-left.png')}
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.titlTextStyle}>C L A R K</Text>
      </View>
      <View style={styles.cartWrapper}>
        <CartButton />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    height: 50,
    backgroundColor: appConfig.colors.dark,
    alignItems: 'center',
  },
  backBtnWrapper: {
    flex: 0.2,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 15,
    width: 15,
    alignSelf: 'center',
    tintColor: appConfig.colors.black,
  },
  titleWrapper: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlTextStyle: {
    fontWeight: 'bold',
    color: appConfig.colors.blueSecondary,
    fontSize: appConfig.fontSizes.medium,
  },
  cartWrapper: {flex: 0.2, alignItems: 'center'},
});