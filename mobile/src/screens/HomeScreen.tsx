// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the navigation parameter list
type RootStackParamList = {
  Home: undefined;
  Stores: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;