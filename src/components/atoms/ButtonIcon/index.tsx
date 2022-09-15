import React from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from "react-native-svg";

import { styles } from './styles';

type Props = BorderlessButtonProps & {
  icon: React.FC<SvgProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
  return (
    <BorderlessButton style={styles.postOptionsIcon} {...rest}>
      <Icon />
    </BorderlessButton>
  );
}