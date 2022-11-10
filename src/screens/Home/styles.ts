
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontFamily: THEME.FONT_FAMILY.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZE.LG
  }
});