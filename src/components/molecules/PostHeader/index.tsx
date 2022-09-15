import { ImageSourcePropType } from 'react-native';

import { UserPhoto } from '@atoms/UserPhoto';
import { UserLocation } from '@molecules/UserLocation';

import { Container } from './styles';

type Props = {
  username: string;
  location: string;
  avatar: ImageSourcePropType;
}

export function PostHeader({ username, location, avatar }: Props) {
  return (
    <Container>
      <UserPhoto source={avatar} />
      <UserLocation username={username} location={location} />
    </Container>
  )
}