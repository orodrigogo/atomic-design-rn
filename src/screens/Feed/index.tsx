import { Container } from "./styles";

import { Posts } from "@templates/Posts";
import { posts } from '@utils/posts';

export function Feed() {
  return (
    <Container>
      <Posts posts={posts} />
    </Container>
  );
}