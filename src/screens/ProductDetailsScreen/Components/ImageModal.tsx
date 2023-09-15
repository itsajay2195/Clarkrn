import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ImageStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import appConfig from '../../../styles/theme';
import {ImageModalProps} from '../../../types/propTypes';

const ImageModal: React.FC<ImageModalProps> = ({
  modalVisible,
  setModalVisible,
  setSelectedImage,
  selectedImage,
}) => {
  const closeModal = useCallback(() => {
    setModalVisible(false);
    setSelectedImage(null);
  }, [setModalVisible, setSelectedImage]);

  return (
    <>
      {selectedImage ? (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <TouchableOpacity style={styles.closeBtnWrapper} onPress={closeModal}>
            <Icon
              size={appConfig.fontSizes.large}
              name="close"
              color={appConfig.colors.white}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <Image
              source={{uri: selectedImage}}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
        </Modal>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  closeBtnWrapper: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 50,
    right: 5,
    backgroundColor: appConfig.colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    zIndex: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appConfig.colors.dark,
  },
  imageStyle: {width: '100%', height: '100%'} as ImageStyle,
});

export default ImageModal;
