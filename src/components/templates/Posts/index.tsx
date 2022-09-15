import React from 'react';
import { FlatList } from 'react-native';

import { Post, PostProps } from '../../organisms/Post';

import { styles } from './styles';

type Props = {
  data: PostProps[];
}

export function Posts({ data }: Props) {
  return (
    <FlatList
      data={data}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={post => post.id}
      renderItem={({ item }) => (
        <Post data={item} />
      )}
    />
  );
}