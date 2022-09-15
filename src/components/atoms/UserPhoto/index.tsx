import { ImageProps } from 'react-native';
import { Photo } from './styles';

export function UserPhoto({ ...rest }: ImageProps) {
  return (
    <Photo {...rest} />
  );
}