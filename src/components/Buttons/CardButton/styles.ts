
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 10,
    paddingVertical: 8,

    backgroundColor: THEME.COLORS.YELLOW_100,
    borderRadius: 4
  },

  icon: {
    marginRight: 10,
    color: THEME.COLORS.YELLOW_500
  },

  label: {
    textAlign: 'justify',
    color: THEME.COLORS.YELLOW_500,
    fontSize: THEME.FONT_SIZE.XSM,
    fontFamily: THEME.FONT_FAMILY.INTER_BOLD
  }
});