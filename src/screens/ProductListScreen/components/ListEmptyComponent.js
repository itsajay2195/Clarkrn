import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appConfig from '../../../styles/theme';

const listEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>sorry no data found</Text>
    </View>
  );
};

export default listEmptyComponent;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textStyle: {
    fontSize: appConfig.fontSizes.medium,
    fontWeight: '600',
    color: appConfig.colors.black,
  },
});
