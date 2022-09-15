import React from 'react';
import { View } from 'react-native';

import { ButtonIcon } from '../../atoms/ButtonIcon';

import { styles } from './styles';

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon,
} from '../../../global/styles/icons';

export function PostOptions() {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <ButtonIcon icon={FavoriteIcon} />
        <ButtonIcon icon={CommentIcon} />
        <ButtonIcon icon={MessengerIcon} />
      </View>

      <ButtonIcon icon={SaveIcon} />
    </View>
  );
}