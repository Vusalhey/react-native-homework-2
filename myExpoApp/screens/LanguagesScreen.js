import React, { useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import ProgrammingLanguageCard from '../components/ProgrammingLanguageCard';

const languages = [
  { id: '1', language: 'JavaScript', experience: '3 years', logo: require('../assets/javascript.png') },
  { id: '2', language: 'Python', experience: '2 years', logo: require('../assets/python.png') },
  { id: '3', language: 'Java', experience: '1 year', logo: require('../assets/java.png') },
];

export default function LanguagesScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProgrammingLanguageCard
            language={item.language}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});