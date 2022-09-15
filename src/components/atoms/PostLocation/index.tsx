import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type Props = TextProps & {
  value: string;
}

export function PostLocation({ value, ...rest }: Props) {
  return (
    <Text style={styles.postLocation} {...rest}>
      {value}
    </Text>
  );
}