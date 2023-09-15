import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  PanResponder,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_CONSTANTS} from '../../../constants/ScreenConstants';
import {ProductListItemProps} from '../../../types/propTypes';
import appConfig from '../../../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProductListItem: React.FC<ProductListItemProps> = ({
  item,
  index,
  scrollY,
}) => {
  const inputRange = [-1, 0, 90 * index, 90 * (index + 2)];
  const opacityInputRange = [-1, 0, 90 * index, 90 * (index + 2.5)];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0],
  });

  const navigation = useNavigation();

  const [swipeable, setSwipeable] = React.useState(true); // To control swipe animation

  const translateX = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        // Check if the gesture is primarily horizontal (left/right)
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },

      onPanResponderMove: (event, gestureState) => {
        if (Math.abs(gestureState.dx) > 10 && swipeable) {
          // Start the swipe animation when the user moves more than 10 pixels horizontally
          setSwipeable(false); // Disable further animations
          const movement = gestureState.dx > 0 ? 20 : 0; // Adjust the movement distance as needed
          Animated.timing(translateX, {
            toValue: movement,
            duration: 0, // Set a short duration for an instant response
            useNativeDriver: true,
          }).start();
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Determine the swipe direction (left or right)
        const swipeThreshold = 100; // You can adjust this threshold
        if (gestureState.dx > swipeThreshold) {
          // User swiped right, navigate to details screen
          navigation.navigate(SCREEN_CONSTANTS.productDetails, {id: item.id});
        } else {
          // User didn't swipe far enough, reset the animation
          Animated.timing(translateX, {
            toValue: 0,
            // Adjust the duration as needed
            useNativeDriver: true,
          }).start(() => {
            setSwipeable(true); // Re-enable swipe animations
          });
        }
      },
      onPanResponderEnd: () => {
        Animated.timing(translateX, {
          toValue: 0,
          duration: 0, // No duration for instant reset
          useNativeDriver: true,
        }).start(() => {
          setSwipeable(true);
        });
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.productItem,
        {
          opacity,
          transform: [{scale}, {translateX}],
        },
      ]}
      {...panResponder.panHandlers}>
      <TouchableOpacity
        disabled={true}
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
        <View style={styles.swipeIconWrapper}>
          <Icon
            size={appConfig.fontSizes.medium}
            name="chevron-right"
            color={appConfig.colors.black}
          />
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
    color: appConfig.colors.black,
  },
  swipeIconWrapper: {justifyContent: 'center', alignItems: 'center'},
});

export default ProductListItem;
