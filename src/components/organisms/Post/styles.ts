import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  cover: {
    width
  },
  post: {
    marginTop: 52
  },
  postFooter: {
    width,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
});