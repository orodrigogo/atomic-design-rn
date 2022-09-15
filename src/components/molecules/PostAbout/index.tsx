import React from 'react';
import { View, ImageProps } from 'react-native';

import { PostLikedAvatar } from '../../atoms/PostLikedAvatar';
import { PostLiked } from '../../atoms/PostLiked';

import { styles } from './styles';

type Props = {
  avatar: ImageProps;
  likes: string;
}

export function PostAbout({ avatar, likes }: Props) {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={avatar} />
      <PostLiked value={likes} />
    </View>
  );
}