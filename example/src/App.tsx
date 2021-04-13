import * as React from 'react';

import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button, Alert } from '../../src';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Button disabled outline size="large">
          Large
        </Button>
        <Alert alertType="primary">This is an Alert message</Alert>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {},
});
