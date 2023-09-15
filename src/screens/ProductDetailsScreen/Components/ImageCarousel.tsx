import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  EmitterSubscription,
} from 'react-native';
import appConfig from '../../../styles/theme';
import {ImageCarouselProps} from '../../../types/propTypes';
import ImageModal from './ImageModal';

const viewConfigRef = {viewAreaCoveragePercentThreshold: 90};

const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get('window'),
  );
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index});
  };

  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const handleImageLongPress = (imageUri: string) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  useEffect(() => {
    const orientationChangeListener: EmitterSubscription =
      Dimensions.addEventListener('change', ({window}) => {
        setWindowDimensions(window);
      });

    return () => {
      orientationChangeListener.remove();
    };
  }, []);

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity
      onLongPress={() => handleImageLongPress(item)}
      onPress={() => (selectedImage ? setSelectedImage(null) : null)}>
      <Image
        resizeMethod="auto"
        source={{uri: item}}
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height / 3,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
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
        <ImageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    maxHeight: 250,
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
