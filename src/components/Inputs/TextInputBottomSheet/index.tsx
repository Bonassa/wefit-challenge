
import { StyleProp, TextInputProps, TextStyle, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Texting } from '../../Texts/Texting';

interface TextInputBottomSheetProps extends TextInputProps {
  style?: StyleProp<TextStyle>; 
}

export function TextInputBottomSheet({ style, ...rest } : TextInputBottomSheetProps){
  return (
    <View style={styles.container}>
      <Texting text='Nome do usuário' style={styles.label} />
      <BottomSheetTextInput
        {...rest}
        style={[styles.input, style]}
      />
    </View>
  )
}
