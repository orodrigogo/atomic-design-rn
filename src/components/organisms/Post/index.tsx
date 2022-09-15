import { ImageSourcePropType } from "react-native";

import { PostPhoto } from "@atoms/PostPhoto";
import { PostHeader } from "@molecules/PostHeader";

import { Container } from "./styles";

type ProfileProps = {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
}

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageSourcePropType;
  description: string;
  lastLiked: ProfileProps;
}

type Props = {
  data: PostProps;
}

export function Post({ data }: Props) {
  return (
    <Container>
      <PostHeader
        username={data.username}
        location={data.location}
        avatar={data.lastLiked.avatar}
      />

      <PostPhoto source={data.cover} />
    </Container>
  )
}