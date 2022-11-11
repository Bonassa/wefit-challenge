
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  contentList: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },

  firstLabel: {
    color: THEME.COLORS.CAPTION_900
  },
  
  secondLabel: {
    fontFamily: THEME.FONT_FAMILY.INTER_BOLD,
    color: THEME.COLORS.CAPTION_900
  }
});