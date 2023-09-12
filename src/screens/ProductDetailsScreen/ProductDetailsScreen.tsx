import React from 'react';
import {View, StyleSheet} from 'react-native';
import appConfig from '../../styles/theme';
import ImageCarousel from './Components/ImageCarousel';
import Header from './Components/Header';
import {ProductContext} from '../../context/ProductContext';

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

  return (
    <View style={styles.container}>
      <Header />
      <ImageCarousel images={item?.images} />
      <View style={styles.contentStyle}></View>
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
