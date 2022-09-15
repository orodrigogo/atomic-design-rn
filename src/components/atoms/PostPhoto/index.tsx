import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from './styles';

export function PostPhoto({ ...rest }: ImageProps) {
  return (
    <Image
      style={styles.cover}
      {...rest}
    />
  );
}