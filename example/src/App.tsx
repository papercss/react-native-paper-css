import * as React from 'react';

import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button } from '../../src';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Button size="large">Large</Button>
        <Button size="default">Default</Button>
        <Button block size="small">
          Small
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
