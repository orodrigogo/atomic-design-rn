
import { Location } from '@atoms/Location';
import { Title } from '@atoms/Title';

import { Container } from './styles';

type Props = {
  username: string;
  location: string;
}

export function UserLocation({ username, location }: Props) {
  return (
    <Container>
      <Title>
        {username}
      </Title>

      <Location>
        {location}
      </Location>
    </Container>
  )

}