import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_CONSTANTS} from '../../../constants/ScreenConstants';

interface Product {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  price: string;
  category: string;
  images: [];
}

interface ProductListItemProps {
  item: Product;
  index: number;
  scrollY: Animated.Value;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  item,
  index,
  scrollY,
}) => {
  const inputRange = [-1, 0, 90 * index, 90 * (index + 2)];
  const opacityInputRange = [-1, 0, 90 * index, 90 * (index + 1.25)];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0],
  });

  const navigation = useNavigation();

  return (
    <Animated.View
      style={[
        styles.productItem,
        {
          opacity,
          transform: [{scale}],
        },
      ]}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate(SCREEN_CONSTANTS.productDetails, {id: item.id})
        }>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{uri: item.thumbnail}}
            style={styles.thumbnail}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.brand} numberOfLines={1}>
            {item.category}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  thumbnailContainer: {
    flex: 0.35,
    justifyContent: 'center',
  },
  thumbnail: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginRight: 14,
  },
  brand: {
    fontSize: 16,
    fontWeight: '700',
    opacity: 0.8,
    color: 'grey',
  },
  priceContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  price: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ProductListItem;
