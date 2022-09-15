import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from './styles';

export function PostLikedAvatar({ ...rest }: ImageProps) {
  return (
    <Image
      style={styles.lastLiked}
      {...rest}
    />
  );
}