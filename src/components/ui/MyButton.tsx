import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from 'variables';

interface IButton extends TouchableOpacityProps {
  loading?: boolean;
}

const MyButton: FC<IButton> = props => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {props.loading ? (
        <ActivityIndicator size="small" color={Colors.whiteColor} />
      ) : (
        <Text style={styles.buttonText}>{props.children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
  },
  buttonText: {
    color: Colors.whiteColor,
    fontWeight: '700',
    fontSize: 16,
  },
});
