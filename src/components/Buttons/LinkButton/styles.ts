
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,

    marginBottom: 10,
  },

  label: {
    color: THEME.COLORS.PRIMARY,
    fontFamily: THEME.FONT_FAMILY.ROBOTO_MEDIUM,
    fontSize: 15,
    textTransform: 'uppercase',

    marginRight: 8,
  },

  icon: {
    color: THEME.COLORS.PRIMARY
  }
});