import React from 'react';
import {View, StyleSheet} from 'react-native';
import appConfig from '../../styles/theme';
import {DATA} from '../../data';
import ImageCarousel from './Components/ImageCarousel';
import Header from './Components/Header';

const Images = DATA.products[0].images;

const ProductDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ImageCarousel images={Images} />
      <View style={styles.contentStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appConfig.colors.dark,
  },
  contentStyle: {flex: 1, margin: 10},
});

export default ProductDetailsScreen;
