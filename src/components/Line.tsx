import {View, ViewStyle} from 'react-native';
import React from 'react';
import appConfig from '../styles/theme';

interface LineProps {
  lineHeight?: number;
}

const Line: React.FC<LineProps> = ({lineHeight}) => {
  const lineStyle: ViewStyle = React.useMemo(() => {
    return {
      height: lineHeight || 1,
      marginVertical: 10,
      backgroundColor: appConfig.colors.grey,
    };
  }, [lineHeight]);
  return <View style={lineStyle} />;
};

export default Line;
