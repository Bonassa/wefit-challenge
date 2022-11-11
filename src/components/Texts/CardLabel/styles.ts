
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    color: THEME.COLORS.YELLOW_500
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.COLORS.RED
  },

  text: {
    marginLeft: 6
  }
});