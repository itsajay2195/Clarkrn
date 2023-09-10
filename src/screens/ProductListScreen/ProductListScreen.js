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
        contentContainerStyle={{
          padding: 10,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
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
          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 80,
                backgroundColor: 'rgba(255,255,255,0.8)',
                padding: 10,
                marginBottom: 10,
                borderRadius: 14,
                shadowColor: '%000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                opacity,
                shadowOpacity: 0.5,
                shadowRadius: 20,
                transform: [{scale}],
              }}>
              <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 0.35, justifyContent: 'center'}}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={{height: 60, width: 60, borderRadius: 60}}
                    resizeMode={'contain'}
                  />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: 'black'}}
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      opacity: 0.8,
                      color: 'grey',
                    }}
                    numberOfLines={1}>
                    {item.brand}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({});
