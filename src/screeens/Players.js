import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Players = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Players</Text>

      <Button title="Other Players" onPress={() => props.navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Players;

const styles = StyleSheet.create({});
