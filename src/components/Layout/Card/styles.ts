
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingVertical: 12,

    flexDirection: 'column',
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: THEME.COLORS.WHITE
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.CAPTION_500
  },

  label: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: 29,
    height: 29,
    borderRadius: 15
  },

  description: {
    paddingVertical: 16
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});