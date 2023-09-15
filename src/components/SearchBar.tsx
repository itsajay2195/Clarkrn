import React, {FC} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import appConfig from '../styles/theme';
import {SearchBarProps} from '../types/propTypes';

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  textValue,
  onChangeText,
  resetSearch,
}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={22} color="#666" style={{marginRight: 10}} />
      <TextInput
        style={styles.textInputStyles}
        placeholder={placeholder || 'Search Here'}
        placeholderTextColor={appConfig.colors.grey}
        value={textValue}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.resetSearchWrapper} onPress={resetSearch}>
        {textValue?.length > 0 && <Icon name="close" size={22} color="#666" />}
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textInputStyles: {
    fontSize: 16,
    padding: 6,
    width: '80%',
    color: appConfig.colors.black,
  },
  resetSearchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appConfig.colors.light,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: appConfig.colors.grey,
    height: 50,
  },
});
