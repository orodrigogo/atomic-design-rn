import { TextProps } from 'react-native';
import { Container } from './styles';

export function Title({ ...rest }: TextProps) {
  return (
    <Container {...rest} />
  )
}