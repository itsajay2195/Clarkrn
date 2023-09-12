import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import appConfig from '../../styles/theme';
import ProductListItem from './components/ProductListItem';
import {ProductContext} from '../../context/ProductContext';
import {fetchProducts} from '../../api/productsApi';

const BG_HOME =
  'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

interface Product {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  price: string;
  category: string;
  images: [];
}

const ProductListScreen: React.FC = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const {data, setData, loading, setLoading} = React.useContext(ProductContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchProducts();
        setData(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setData, setLoading]);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: BG_HOME}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />

      {loading ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size={'large'} color={appConfig.colors.blue} />
        </View>
      ) : (
        <Animated.FlatList
          data={data.products as unknown as Product[]}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 10,
    paddingTop: StatusBar.currentHeight || 42,
  },
  loaderWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {display: 'flex', flex: 1},
});

export default ProductListScreen;
