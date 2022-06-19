import {Platform, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from 'variables';

interface ICard {
  style?: any;
}

const Card: FC<ICard> = props => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    shadowColor:
      Platform.OS === 'ios' ? Colors.iosShadow : Colors.androidShadow,
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.9,
  },
});
