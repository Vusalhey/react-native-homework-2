import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/AboutScreen';
import LanguagesScreen from './screens/LanguagesScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#1E1E1E' },
          tabBarActiveTintColor: '#30d5c8',
          tabBarInactiveTintColor: '#B0B0B0',
          headerStyle: { backgroundColor: '#1E1E1E' },
          headerTintColor: '#E5E5E5',
        }}
      >
        <Tab.Screen name="О Себе" component={AboutScreen} />
        <Tab.Screen name="Мои Языки" component={LanguagesScreen} />
        <Tab.Screen name="Не найдено" component={NotFoundScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}