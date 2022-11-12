
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 8,
    borderRadius: 4,
  },

  primary: {
    backgroundColor: THEME.COLORS.YELLOW_500,
  },

  secondary: {
    borderColor: THEME.COLORS.BLACK,
    borderWidth: 1
  },

  label: {
    color: THEME.COLORS.BLACK,
    fontFamily: THEME.FONT_FAMILY.ROBOTO_MEDIUM,
    fontSize: 15,
    textTransform: 'uppercase',

    marginRight: 8
  },

  icon: {
    color: THEME.COLORS.BLACK
  }
});