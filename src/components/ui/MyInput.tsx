import {StyleSheet, Text, TextInputProps, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Colors} from 'variables';

interface IInput extends TextInputProps {
  class?: string;
  focused?: boolean;
  error?: string;
  label: string;
}

const MyInput: FC<IInput> = props => {
  const [isFocused, setIsFocused] = useState(props.focused);
  const focusHandler = () => {
    setIsFocused(true);
  };

  const blurHandler = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.root}>
      <TextInput
        {...props}
        style={[styles.input, isFocused ? styles.border : null]}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {isFocused && <Text style={styles.label}>test</Text>}
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  root: {
    marginBottom: 14,
  },
  input: {
    height: 50,
    minWidth: '100%',
    maxWidth: '100%',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: Colors.grayLight,
    borderRadius: 8,
  },
  border: {
    borderColor: Colors.primaryColor,
  },
  label: {
    position: 'absolute',
    paddingHorizontal: 12,
    backgroundColor: 'white',
    top: -9,
    left: 10,
    fontWeight: '700',
    fontSize: 12,
    color: Colors.primaryColor,
  },
});
