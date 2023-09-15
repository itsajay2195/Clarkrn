import React, {useReducer} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';
import appConfig from '../../styles/theme';
import ProductListItem from './components/ProductListItem';
import {ProductContext} from '../../context/ProductContext';
import {fetchProducts} from '../../api/productsApi';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import productListReducer from './reducer/productListReducer';
import {
  SET_SEARCH_DATA,
  SET_REFRESHING,
  SET_SEARCH_QUERY,
  SET_CURRENT_PAGE,
} from './reducer/actionTypes';
import {ProductListProps} from '../../types/propTypes';
import listEmptyComponent from './components/ListEmptyComponent';

const BG_HOME =
  'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const initialState = {
  searchData: null,
  refreshing: false,
  searchQuery: '',
  currentPage: 1,
};

const ProductListScreen: React.FC = React.memo(function ProductListScreen() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [state, dispatch] = useReducer(productListReducer, initialState);
  const {data, setData, loading, setLoading} = React.useContext(ProductContext);
  const itemsPerPage = 20; // Number of items per page

  const {searchData, currentPage, searchQuery, refreshing} = state;

  React.useEffect(() => {
    if (searchQuery.length === 0) {
      dispatch({type: SET_SEARCH_DATA, payload: data});
    }
  }, [data, searchQuery]);

  React.useEffect(() => {
    // Set the status bar color
    if (appConfig.os.android) {
      StatusBar.setBackgroundColor(appConfig.colors.dark);
    }
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchProducts();
        setData(response?.products);
        dispatch({type: SET_SEARCH_DATA, payload: response?.products});
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setData, setLoading]);

  const onRefresh = React.useCallback(async () => {
    dispatch({type: SET_REFRESHING, payload: true});
    try {
      if (currentPage * itemsPerPage > 80) {
        return;
      }
      const response = await fetchProducts(currentPage * itemsPerPage);
      setData(response?.products);
      dispatch({type: SET_SEARCH_DATA, payload: response?.products});
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      dispatch({type: SET_REFRESHING, payload: false});
      dispatch({type: SET_CURRENT_PAGE, payload: currentPage + 1});
    }
  }, [currentPage, setData]);

  const handleSearch = React.useCallback(
    (text: string) => {
      // Convert the search input to lowercase
      const searchTextLower = text.toLowerCase();
      dispatch({type: SET_SEARCH_QUERY, payload: text});

      // Filter data based on lowercase titles and exact match
      let searchResults = data.filter(item =>
        item.title.toLowerCase().includes(searchTextLower),
      );

      dispatch({type: SET_SEARCH_DATA, payload: searchResults});
    },
    [data],
  );

  const resetSearch = React.useCallback(() => {
    dispatch({type: SET_SEARCH_QUERY, payload: ''});
    dispatch({type: SET_SEARCH_DATA, payload: data});
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      {/* backgroundImage */}
      <Image
        source={{uri: BG_HOME}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <SearchBar
        textValue={searchQuery}
        onChangeText={handleSearch}
        resetSearch={resetSearch}
      />
      {loading ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size={'large'} color={appConfig.colors.blue} />
        </View>
      ) : (
        <Animated.View>
          <Animated.FlatList
            data={searchData as unknown as ProductListProps[]}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <ProductListItem item={item} index={index} scrollY={scrollY} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[appConfig.colors.blue]}
              />
            }
            ListEmptyComponent={listEmptyComponent}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 10,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  loaderWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: appConfig.os.android ? StatusBar.currentHeight : 0,
    backgroundColor: appConfig.colors.dark,
  },
});

export default ProductListScreen;
