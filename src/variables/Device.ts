import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  width,
  height,
  isSmall: width < 375,
  OS: Platform.OS,
};
