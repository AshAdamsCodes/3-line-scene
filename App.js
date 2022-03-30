import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getSentence } from './sentences';

export default function App() {
  const [sentence, setSentence] = useState("");
  
  return (
    <View style={styles.container}>
      <Text>{sentence}</Text>
      <Button
      onPress={() => setSentence(getSentence())}
      title="New Sentence"
    />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9967A',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
