import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

interface Colors {
  primaryPink: string;
  white: string;
  blue: string;
  grey: string;
  greySecondary: string; // Corrected the typo in the property name
  blueSecondary: string;
  black: string;
  red: string;
  dark: string;
  light: string;
}

interface FontSizes {
  small: number;
  medium: number;
  large: number;
  bannerText: number; // Corrected the typo in the property name
}

interface WindowDimensions {
  height: number;
  width: number;
}

interface OsConfig {
  ios: boolean;
  android: boolean;
}

interface AppConfig {
  colors: Colors;
  fontSizes: FontSizes;
  window: WindowDimensions;
  os: OsConfig;
}

const appConfig: AppConfig = {
  colors: {
    primaryPink: '#EA4C89',
    white: '#FFFFFF',
    blue: '#0000FF',
    grey: '#808080',
    greySecondary: '#F3F3F4',
    blueSecondary: '#8FB1CC',
    black: '#000000',
    red: '#ff0000',
    light: '#f2f2f2',
    dark: '#343a40',
  },
  fontSizes: {
    small: 12,
    medium: 16,
    large: 24,
    bannerText: 34,
  },
  window: {
    height,
    width,
  },
  os: {
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android',
  },
};

export default appConfig;
