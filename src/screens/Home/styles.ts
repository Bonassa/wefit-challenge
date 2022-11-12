
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
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
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16
  },

  overlay: {
    zIndex: 99,
    position: 'absolute',
    top: -100,
    left: 0,
    width: '100%',
    height: '200%',
    backgroundColor: THEME.COLORS.OVERLAY
  },

  indicator: {
    marginVertical: 8,
    backgroundColor: THEME.COLORS.CAPTION_400
  },

  bottomHeader: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.BLACK,
    marginBottom: 12
  },

  bottomButtons: {
    flexDirection: 'row',
    marginTop: 12
  }
});