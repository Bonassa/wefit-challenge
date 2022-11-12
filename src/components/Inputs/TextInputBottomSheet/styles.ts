
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,

    borderBottomWidth: 1,
    borderColor: THEME.COLORS.CAPTION_700
  },

  label: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.XSM,
    marginBottom: 3
  },

  input: {
    fontSize: 16,
    lineHeight: 20,
  }
});