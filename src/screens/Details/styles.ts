
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  main: {
    paddingHorizontal: 16,
    paddingVertical: 16,

    backgroundColor: THEME.COLORS.WHITE
  },

  headerIcon: {
    color: THEME.COLORS.WHITE,
    marginRight: 12
  },
  
  headerLabel: {
    color: THEME.COLORS.WHITE
  },

  mainHeader: {
    flexDirection: 'row'
  },

  firstHeading: {
    fontFamily: THEME.FONT_FAMILY.INTER_REGULAR
  },

  secondHeading: {
    fontFamily: THEME.FONT_FAMILY.INTER_BOLD
  },

  mainValue: {
    paddingVertical: 16
  },

  mainText: {
    fontSize: THEME.FONT_SIZE.MD
  },

  languageLabel: {
    fontSize: THEME.FONT_SIZE.SM
  },

  footer: {
    paddingBottom: getBottomSpace() + 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: THEME.COLORS.WHITE,
  }
});