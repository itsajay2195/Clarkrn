import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import appConfig from '../styles/theme';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  containerStyle,
  textStyle,
}) => {
  const styles = React.useMemo(() => {
    return {
      container: {
        ...containerStyle,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 14,
      },
      textStyle: {
        ...textStyle,
        color: appConfig.colors.white,
        fontSize: appConfig.fontSizes.medium,
        fontWeight: 'bold',
      },
    };
  }, [containerStyle, textStyle]);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textStyle}>{title || 'Add to cart'}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
