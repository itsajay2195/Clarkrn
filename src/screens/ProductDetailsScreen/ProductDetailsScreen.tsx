import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import appConfig from '../../styles/theme';
import ImageCarousel from './Components/ImageCarousel';
import Header from './Components/Header';
import {ProductContext} from '../../context/ProductContext';
import Discount from './Components/Discount';
import Line from '../../components/Line';
import Rating from '../../components/Rating';
import PrimaryButton from '../../components/PrimaryButton';

interface ItemProps {
  id?: string;
  title?: string;
  brand?: string;
  thumbnail?: string;
  price?: string;
  category?: string;
  rating?: string;
  description?: string;
  stock?: string;
  discountPercentage?: number;
  images: [];
}

const ProductDetailsScreen: React.FC = props => {
  const {id} = props.route.params;
  const {getData, cart, setCart} = React.useContext(ProductContext);
  const [item, setItem] = useState<ItemProps | null>(null);
  const [disableClick, setDisableClick] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let itemDetails = getData(id);
    const selectedItem = itemDetails[0];
    setItem(selectedItem);
    setLoading(false);
  }, [getData, id]);

  const handleAddToCartPress = React.useCallback(() => {
    setCart(item);
    setDisableClick(true);
  }, [item, setCart]);
  return (
    <View style={styles.androidSafeArea}>
      {item ? (
        <ScrollView contentContainerStyle={styles.container}>
          <Header cartCount={cart} />
          <ImageCarousel images={item?.images} />
          <View style={styles.contentStyle}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  display: 'flex',
                  maxWidth: appConfig.window.width / 1.3,
                }}>
                <Text numberOfLines={2} style={styles.itemTitleStlye}>
                  {item?.title}
                </Text>
              </View>
              <Discount percentage={item?.discountPercentage} />
            </View>
            <Rating rating={item?.rating} />
            <View>
              <Text style={styles.producedByStyle}>
                <Text style={{fontSize: appConfig.fontSizes.small}}>by </Text>
                {item?.brand}
              </Text>
            </View>

            <Line lineHeight={1} />
            <View>
              <Text style={styles.subHeadingStyle}>Description</Text>
            </View>
            <View>
              <Text style={styles.descriptiongTextStyle}>
                {item?.description}
              </Text>
            </View>
            <Line lineHeight={0.75} />
            <View>
              <Text style={styles.subHeadingStyle}>INR {item?.price}</Text>
            </View>
            <View style={styles.addToCarBtnWrapper}>
              <PrimaryButton
                title={'Add to cart'}
                onPress={() => handleAddToCartPress}
                disabled={disableClick}
              />
            </View>
            <View>
              <Text style={styles.unitText}>
                Hurry up! only {item?.stock} units left.
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: appConfig.colors.dark,
  },
  contentStyle: {flex: 1, margin: 10},
  itemTitleStlye: {
    fontSize: appConfig.fontSizes.large,
    fontWeight: '600',
    fontStyle: 'normal',
    color: appConfig.colors.blueSecondary,
  },
  producedByStyle: {
    paddingVertical: 5,
    fontWeight: '600',
    fontSize: appConfig.fontSizes.medium + 2,
    color: appConfig.colors.white,
  },
  descriptiongTextStyle: {
    paddingVertical: 5,
    fontWeight: '600',
    fontSize: appConfig.fontSizes.medium,
    color: appConfig.colors.white,
  },
  subHeadingStyle: {
    paddingVertical: 5,
    fontWeight: '600',
    fontSize: appConfig.fontSizes.medium + 2,
    color: appConfig.colors.blueSecondary,
  },
  addToCarBtnWrapper: {
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
  },
  unitText: {color: appConfig.colors.red, fontWeight: '600'},
  androidSafeArea: {
    flex: 1,
    backgroundColor: appConfig.colors.dark,
    paddingTop: appConfig.os.android ? StatusBar.currentHeight : 4,
  },
});

export default ProductDetailsScreen;
