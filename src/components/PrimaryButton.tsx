import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import appConfig from '../styles/theme';
import {PrimaryButtonProps} from '../types/propTypes';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  disabled,
}) => {
  const styles = React.useMemo(() => {
    return {
      container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: appConfig.colors.black,
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 14,
        ...containerStyle,
      },
      textStyle: {
        color: appConfig.colors.white,
        fontSize: appConfig.fontSizes.medium,
        fontWeight: 'bold',
        ...textStyle,
      },
    };
  }, [containerStyle, disabled, textStyle]);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.container}
      testID="primary-button"
      onPress={onPress}>
      <Text style={styles.textStyle}>{title || 'Add to cart'}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
