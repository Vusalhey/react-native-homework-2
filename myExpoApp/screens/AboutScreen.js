import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Vusal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30d5c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#dc143c',
    fontSize: 24,
    fontWeight: 'bold',
  },
});