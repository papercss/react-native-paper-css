/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import { Button, Alert, Badges, HeaderText } from '../../src';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Button disabled outline size="large">
          Large
        </Button>
        <Alert alertType="primary">This is an Alert message</Alert>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <HeaderText>Example H1</HeaderText>
          <Badges badgesType="secondary" fontSize={24}>
            {500}
          </Badges>
          <HeaderText headerSize="H6">Example H6</HeaderText>
          <Badges fontSize={14}>{50}</Badges>
        </View>
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
