
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 4
  },

  primary: {
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  
  labelPrimary: {
    color: THEME.COLORS.WHITE,
  },

  labelSecondary: {
    color: THEME.COLORS.PRIMARY
  },

  secondary: {
  },

  label: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO_MEDIUM,
    fontSize: 15,
    textTransform: 'uppercase',
  },
});