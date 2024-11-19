import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageCard = ({ language, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{language}</Text>
      <Text style={styles.experience}>{experience}</Text>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
    borderColor: '#00A67E',
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E5E5E5',
    marginBottom: 6,
  },
  experience: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderColor: '#00A67E',
    borderWidth: 0.5,
  },
});

export default ProgrammingLanguageCard;