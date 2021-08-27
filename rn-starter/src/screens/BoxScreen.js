import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParentStyle}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: { height: 50, width: 50, backgroundColor: 'red' },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  viewTwoParentStyle: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewThreeStyle: { height: 50, width: 50, backgroundColor: 'blue' },
});

export default BoxScreen;
