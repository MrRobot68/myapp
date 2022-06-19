import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface ITitle {
  text: string;
}

const MyTitle: FC<ITitle> = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default MyTitle;

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 3,
    paddingBottom: 10,
    marginBottom: 70,
    borderColor: 'gray',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'gray',
  },
});
