import { StyleSheet } from 'react-native';
import { THEME } from '../theme';

export const styles = StyleSheet.create({
  focusedLabel: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.PRIMARY
  },

  label: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XSM,
    color: THEME.COLORS.SECONDARY
  }
});