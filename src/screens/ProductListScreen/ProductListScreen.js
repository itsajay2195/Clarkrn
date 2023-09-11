import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {DATA} from '../../data';
import ProductListItem from './components/ProductListItem';

const BG_HOME =
  'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const ProductListScreen = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current; //using useref to persist the values inspite of re-render without losing the intitial values
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: BG_HOME}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />

      <Animated.FlatList
        data={DATA.products}
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

export default ProductListScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 10,
    paddingTop: StatusBar.currentHeight || 42,
  },
});
