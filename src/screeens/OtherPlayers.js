import {Image, StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated from 'react-native-reanimated';

const OtherPlayers = props => {
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          width: Dimensions.get('window').width,
          height: 300,
          backgroundColor: 'green',
        }}
        sharedTransitionTag="sharedTag">
        <Image
          source={{uri: props.route.params.IMG}}
          style={{width: '100%', height: '100%'}}
        />
      </Animated.View>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default OtherPlayers;

const styles = StyleSheet.create({});
