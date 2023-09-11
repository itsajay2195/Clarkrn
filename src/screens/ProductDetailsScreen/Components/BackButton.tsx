import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import appConfig from '../../../styles/theme';
import {useNavigation} from '@react-navigation/native';

const BackButton: React.FC = () => {
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
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    height: 40,
    zIndex: 10,
    left: 10,
    right: 0,
    top: 10,
    bottom: 0,
  },
  backBtnWrapper: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appConfig.colors.grey,
  },
  imageStyle: {
    height: 15,
    width: 15,
    alignSelf: 'center',
    tintColor: appConfig.colors.white,
  },
});
