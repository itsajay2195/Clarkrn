import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import appConfig from '../../styles/theme';
import ImageCarousel from './Components/ImageCarousel';
import Header from './Components/Header';
import {ProductContext} from '../../context/ProductContext';
import Discount from './Components/Discount';
import Line from '../../components/Line';
import Rating from '../../components/Rating';

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
  const {getData} = React.useContext(ProductContext);
  const [item, setItem] = React.useState<ItemProps | null>(null);

  React.useEffect(() => {
    let itemDetails = getData(id);
    setItem(itemDetails[0]);
  }, [getData, id]);

  console.log('item details', item);

  return (
    <View style={styles.container}>
      <Header />
      <ImageCarousel images={item?.images} />
      <View style={styles.contentStyle}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: appConfig.fontSizes.large,
              fontWeight: '600',
              fontStyle: 'normal',
              color: appConfig.colors.blueSecondary,
            }}>
            {item?.title}
          </Text>
          <Discount percentage={item?.discountPercentage} />
        </View>
        <Rating rating={item?.rating} />
        <View>
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: '600',
              fontSize: appConfig.fontSizes.medium + 2,
              color: appConfig.colors.white,
            }}>
            <Text style={{fontSize: appConfig.fontSizes.small}}>by </Text>
            {item?.brand}
          </Text>
        </View>

        <Line lineHeight={1} />
        <View>
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: '600',
              fontSize: appConfig.fontSizes.medium + 2,
              color: appConfig.colors.blueSecondary,
            }}>
            Description
          </Text>
        </View>
        <View>
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: '600',
              fontSize: appConfig.fontSizes.medium,
              color: appConfig.colors.white,
            }}>
            {item?.description}
          </Text>
        </View>

        <Line lineHeight={0.75} />
      </View>
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
