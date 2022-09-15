import { FlatList } from 'react-native';

import { Post, PostProps } from '@organisms/Post';

type Props = {
  posts: PostProps[];
}

export function Posts({ posts }: Props) {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Post data={item} />}
    />
  )
}