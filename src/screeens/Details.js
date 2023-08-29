import {StyleSheet, Dimensions, Text, Platform} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Details = props => {
  // const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const gesture = Gesture.Pan()
    .onUpdate(value => {
      // translateX.value = value.translationX * 0.8;
      translateY.value = value.translationY * 0.8;
      // const distance = Math.sqrt(
      //   value.translationX * value.translationX +
      //     value.translationY * value.translationY,
      // );
      const distance = Math.sqrt(value.translationY * value.translationY);
      const scaleValue = Math.min(Math.max(distance / 100, 1), 0.9);
      scale.value = withTiming(scaleValue, {duration: 100});
    })
    .onEnd(() => {
      if (translateY.value > 50) {
        opacity.value = 0;
        runOnJS(props.navigation.goBack)();
      } else {
        // translateX.value = withTiming(0, {duration: 300});
        translateY.value = withTiming(0, {duration: 300});
        scale.value = withTiming(1, {duration: 300});
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    // transform: [{translateX: translateX.value}, {translateY: translateY.value},{scale: scale.value}],
    transform: [{translateY: translateY.value}, {scale: scale.value}],
    backgroundColor: interpolateColor(
      opacity.value,
      [0, 1],
      ['transparent', 'white'],
    ),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: 'green',
          },
          animatedStyle,
        ]}
        sharedTransitionTag={props.route.params.details.id.toString()}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 50,
            left: 10,
            zIndex: 999,
          }}>
          <Ionicons
            onPress={() => props.navigation.goBack()}
            name="chevron-back"
            color="#fff"
            size={30}
          />
        </Animated.View>
        <Animated.Image
          sharedTransitionTag={
            props.route.params.details.id.toString() + 'sharedImg'
          }
          source={{uri: props.route.params.details.url}}
          style={{width: '100%', height: 300}}
        />
        <Animated.View style={{marginHorizontal: 10}}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              color: '#000',
              fontWeight: 'bold',
            }}>
            {props.route.params.details.title}
          </Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#000'}}>
            {props.route.params.details.description}
          </Text>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Details;

const styles = StyleSheet.create({});
