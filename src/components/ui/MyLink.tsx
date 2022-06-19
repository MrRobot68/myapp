import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {FC} from 'react';
import {Colors} from 'variables';

interface IButton {
  onPress: any;
}

const MyLink: FC<IButton> = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MyLink;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: Colors.primaryColor,
    fontWeight: '600',
    fontSize: 14,
  },
});
