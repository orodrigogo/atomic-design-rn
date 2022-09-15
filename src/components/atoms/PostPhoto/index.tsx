import { ImageProps } from 'react-native';

import { Container } from './styles'

export function PostPhoto({ ...rest }: ImageProps) {
  return (
    <Container {...rest} />
  )
}