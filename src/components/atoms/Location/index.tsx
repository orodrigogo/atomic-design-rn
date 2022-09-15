import { TextProps } from 'react-native';
import { Container } from './styles';

export function Location({ ...rest }: TextProps) {
  return (
    <Container {...rest} />
  )
}