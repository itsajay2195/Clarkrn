import React from 'react';
import {View, StyleSheet} from 'react-native';
import appConfig from '../../styles/theme';
import {DATA} from '../../data';
import ImageCarousel from './Components/ImageCarousel';

const Images = DATA.products[0].images;

const ProductDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageCarousel images={Images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appConfig.colors.dark,
  },
});

export default ProductDetailsScreen;
