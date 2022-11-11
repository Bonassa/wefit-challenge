
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  root: {
    paddingTop: getStatusBarHeight() + 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },

  leftIcon: {

  },

  rightIcon: {

  },

  label: {
    flex: 1
  },

  light: {
    backgroundColor: THEME.COLORS.WHITE
  },

  dark: {
    backgroundColor: THEME.COLORS.BLACK
  }
});