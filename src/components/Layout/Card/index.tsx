
import { View, TouchableOpacity, TouchableOpacityProps, Image, ImageProps } from "react-native";

import { styles } from "./styles";

import { Texting } from '../../Texts/Texting';

interface CardRootProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

interface CardHeaderProps {
  children: React.ReactNode;
}

interface CardHeaderLabel {
  children: React.ReactNode;
}

interface CardImageProps extends ImageProps {
  children?: never;
}

interface CardDescriptionProps {
  text: string;
  children?: never;
}

interface CardFooterProps {
  children: React.ReactNode;
}

function CardRoot({ children, ...rest } : CardRootProps){
  return (
    <TouchableOpacity
      style={styles.root}
      { ...rest }
    >
      { children }
    </TouchableOpacity>
  )
}

function CardHeader({ children } : CardHeaderProps){
  return (
    <View style={styles.header}>
      { children }
    </View>
  )
}

function CardHeaderLabel({ children } : CardHeaderLabel){
  return (
    <View style={styles.label}>
      { children }
    </View>
  )
}

function CardImage({ ...rest } : CardImageProps){
  return (
    <Image 
      {...rest}
      style={styles.image}
    />
  )
}

function CardDescription({ text } : CardDescriptionProps){
  return (
    <View style={styles.description}>
      <Texting
        text={text}
      />
    </View>
  )
}

function CardFooter({ children } : CardFooterProps){
  return (
    <View style={styles.footer}>
      { children }
    </View>
  )
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Label: CardHeaderLabel,
  Image: CardImage,
  Description: CardDescription,
  Footer: CardFooter
}