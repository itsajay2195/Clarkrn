import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import appConfig from '../../../styles/theme';
import {ImageCarouselProps} from '../../../types/propTypes';

const viewConfigRef = {viewAreaCoveragePercentThreshold: 90};
const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
  const flatListRef = useRef<FlatList<any>>(null); // Change the FlatList type as needed
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index});
  };

  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const renderItem = ({item}: {item: string}) => (
    <View>
      <Image source={{uri: item}} style={styles.imageStyle} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={flatListRef}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotView}>
        {images?.map((_, index) => (
          <TouchableOpacity
            key={`circle-dot${index}`}
            onPress={() => scrollToIndex(index)}
            style={[
              styles.circle,
              {
                backgroundColor:
                  index === currentIndex
                    ? appConfig.colors.black
                    : appConfig.colors.grey,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    maxHeight: 250,
  },
  imageStyle: {
    width: appConfig.window.width,
    height: appConfig.window.height / 4,
    resizeMode: 'cover',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: appConfig.colors.grey,
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default ImageCarousel;
