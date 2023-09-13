import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../styles/theme';

interface RatingProps {
  rating: number | any;
  size?: number;
}

const Rating: React.FC<RatingProps> = ({rating, size}) => {
  const renderStars = () => {
    const totalStars = 5;
    const fullStars = Math.floor(rating || 1);
    const remainingStars = totalStars - fullStars;
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
      <View style={styles.starsWrapper}>
        {[...Array(fullStars)].map((_, index) => (
          <Icon name="star" size={size || 14} color="gold" key={index} />
        ))}

        {hasHalfStar && <Icon name="star-half" size={14} color="gold" />}

        {[...Array(hasHalfStar ? remainingStars - 1 : remainingStars)].map(
          (_, index) => (
            <Icon
              name="star-border"
              size={size || 14}
              color="gold"
              key={index}
            />
          ),
        )}
      </View>
    );
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default Rating;

const styles = StyleSheet.create({
  starsWrapper: {flexDirection: 'row'},
  container: {flexDirection: 'row', alignItems: 'center'},
  ratingTextStyle: {marginLeft: 5, color: theme.colors.black},
});
