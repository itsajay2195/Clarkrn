// types.ts

import {TouchableOpacityProps, Animated} from 'react-native';

export interface Product {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  price: string;
  category: string;
  images: [];
}

export type PrimaryButtonProps = TouchableOpacityProps & {
  title?: string;
  containerStyle?: any;
  textStyle?: any;
  disabled?: boolean;
};

export interface RatingProps {
  rating: number | any;
  size?: number;
}

export interface SearchBarProps {
  placeholder?: string;
  textValue: string;
  onChangeText: (text: string) => void;
  resetSearch: () => void;
}

export interface CartProps {
  cartCount?: Object;
}

export interface HeaderProps {
  cartCount?: Object;
}

export interface ImageCarouselProps {
  images?: [];
}

//product detials
export interface ItemProps {
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

//product list

export interface Product {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  price: string;
  category: string;
  images: [];
}

export interface ProductListItemProps {
  item: Product;
  index: number;
  scrollY: Animated.Value;
}

//productList
export interface Product {
  id: string;
  title: string;
  brand: string;
  thumbnail: string;
  price: string;
  category: string;
  images: [];
}