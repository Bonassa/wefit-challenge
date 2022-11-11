
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

import { Heading } from '../../Texts/Heading';

interface HeaderRootProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

interface HeaderLeftIconProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

interface HeaderRightIconProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

interface HeaderLabelProps {
  text: string;
}

function HeaderRoot({ children, theme = 'light' } : HeaderRootProps){
  return (
    <View style={[styles.root, theme === 'light' ? styles.light : styles.dark]} >
      { children }
    </View>
  )
}

function HeaderLeftIcon({ children, ...rest } : HeaderLeftIconProps){
  return (
    <TouchableOpacity 
      style={styles.leftIcon}
      {...rest} 
    >
      { children }
    </TouchableOpacity>
  )
}

function HeaderRightIcon({ children, ...rest } : HeaderRightIconProps){
  return (
    <TouchableOpacity
      style={styles.rightIcon}
      { ...rest }
    >
      { children }
    </TouchableOpacity>
  )
}

function HeaderLabel({ text } : HeaderLabelProps){
  return (
    <View style={styles.label}>
      <Heading
        text={ text }
      />
    </View>
  )
}

export const Header = {
  Root: HeaderRoot,
  Label: HeaderLabel,
  LeftIcon: HeaderLeftIcon,
  RightIcon: HeaderRightIcon,
}