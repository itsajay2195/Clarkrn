import React from 'react';
import {StyleSheet, View, Animated, Image, StatusBar} from 'react-native';
import {DATA} from '../../data';
import appConfig from '../../styles/theme';
import ProductListItem from './components/ProductListItem';

const BG_HOME =
  'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

interface Product {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  price: string;
  category: string;
  images: [];
}

const ProductListScreen: React.FC = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: appConfig.colors.dark}}>
      <Image
        source={{uri: BG_HOME}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />

      <Animated.FlatList
        data={DATA.products as unknown as Product[]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <ProductListItem item={item} index={index} scrollY={scrollY} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 10,
    paddingTop: StatusBar.currentHeight || 42,
  },
});

export default ProductListScreen;
