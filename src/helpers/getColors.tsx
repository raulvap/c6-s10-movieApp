import ImageColors from 'react-native-image-colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const getImageColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#fff',
    cache: true,
  });

  let primary, secondary;

  if (result.platform === 'android') {
    primary = result.vibrant;
    secondary = result.average;
  } else if (result.platform === 'ios') {
    primary = result.primary;
    secondary = result.detail;
  }

  return [primary, secondary];
};
