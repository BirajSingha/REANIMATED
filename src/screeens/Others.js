import {
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const data = [
  {
    id: 1,
    url: 'https://api.slingacademy.com/public/sample-photos/1.jpeg',
    title: 'Defense the travel audience hand',
    description:
      'Leader structure safe or black late wife newspaper her pick central forget single likely.',
  },
  {
    id: 2,
    url: 'https://api.slingacademy.com/public/sample-photos/2.jpeg',
    title: 'Space build policy people model treatment town hard use',
    description:
      'Much technology how within rather him lay why part actually system increase feel.',
  },
  {
    id: 3,
    url: 'https://api.slingacademy.com/public/sample-photos/3.jpeg',
    title: 'Party about different guess bill too owner',
    description:
      'Street anything piece south yard since well point summer school economy respond people mother.',
  },
  {
    id: 4,
    url: 'https://api.slingacademy.com/public/sample-photos/4.jpeg',
    title: 'Table husband',
    description:
      'Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.',
  },
  {
    id: 5,
    url: 'https://api.slingacademy.com/public/sample-photos/5.jpeg',
    title: 'Support audience model program three music',
    description:
      'World early north TV around meet goal across reason responsibility have must build up some language soon.',
  },
  {
    id: 6,
    url: 'https://api.slingacademy.com/public/sample-photos/6.jpeg',
    title: 'Apply future response she reduce decide',
    description:
      'Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.',
  },
  {
    id: 7,
    url: 'https://api.slingacademy.com/public/sample-photos/7.jpeg',
    title: 'Fire year candidate too like',
    description: 'Few address take for special development white career.',
  },
  {
    id: 8,
    url: 'https://api.slingacademy.com/public/sample-photos/8.jpeg',
    title: 'Reflect design camera land girl wind behind side',
    description:
      'Drug if approach out according set home job company wall source trouble act huge easy style physical so month.',
  },
  {
    id: 9,
    url: 'https://api.slingacademy.com/public/sample-photos/9.jpeg',
    title: 'Per nature research',
    description:
      'Nature focus wonder behind magazine pattern degree far without tree consider.',
  },
  {
    id: 10,
    url: 'https://api.slingacademy.com/public/sample-photos/10.jpeg',
    title: 'Yard',
    description:
      'Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.',
  },
];

const WIDTH = Dimensions.get('window').width;

const ITEM_SIZE = WIDTH * 0.7;
const SPACER = (WIDTH - ITEM_SIZE) / 2;

export default function Others(props) {
  const firstValue = useSharedValue(30);
  const secondValue = useSharedValue(30);
  const thirdValue = useSharedValue(30);
  const isOpen = useSharedValue(false);
  const x = useSharedValue(0);

  const [newData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0),
  );

  const firstHandlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstValue.value = withTiming(30, config);
      secondValue.value = withDelay(50, withTiming(30, config));
      thirdValue.value = withDelay(100, withTiming(30, config));
    } else {
      firstValue.value = withDelay(200, withSpring(130));
      secondValue.value = withDelay(100, withSpring(210));
      thirdValue.value = withSpring(290);

      //ONLY FOR THIRD ANIMATION STYLE
      // firstValue.value = withDelay(200, withSpring(110));
      // secondValue.value = withDelay(100, withSpring(100));
      // thirdValue.value = withSpring(110);
    }
    isOpen.value = !isOpen.value;
  };

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${progress.value * 45}deg`}],
    };
  });

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [30, 130],
      // [30, 110], //ONLY FOR THIRD ANIMATION STYLE
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {
      bottom: firstValue.value,
      // right: firstValue.value, //ONLY FOR THIRD ANIMATION STYLE
      transform: [{scale: scale}],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 210],
      // [30, 100], //ONLY FOR THIRD ANIMATION STYLE
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {
      bottom: secondValue.value,
      // right: secondValue.value, //ONLY FOR THIRD ANIMATION STYLE
      transform: [{scale: scale}],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 290],
      // [30, 110], //ONLY FOR THIRD ANIMATION STYLE
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {
      bottom: thirdValue.value,
      transform: [{scale: scale}],
    };
  });

  //SECOND ANIMATION STYLE
  const firstWidth = useSharedValue(60);
  const secondWidth = useSharedValue(60);
  const thirdWidth = useSharedValue(60);
  const opacity = useSharedValue(0);

  const secondHandlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstWidth.value = withTiming(60, {duration: 100}, finish => {
        if (finish) {
          firstValue.value = withTiming(30, config);
        }
      });
      secondWidth.value = withTiming(60, {duration: 100}, finish => {
        if (finish) {
          secondValue.value = withDelay(50, withTiming(30, config));
        }
      });
      thirdWidth.value = withTiming(60, {duration: 100}, finish => {
        if (finish) {
          thirdValue.value = withDelay(100, withTiming(30, config));
        }
      });
      opacity.value = withTiming(0, {duration: 100});
    } else {
      firstValue.value = withDelay(200, withSpring(130));
      secondValue.value = withDelay(100, withSpring(210));
      thirdValue.value = withSpring(290);
      firstWidth.value = withDelay(900, withSpring(200));
      secondWidth.value = withDelay(800, withSpring(200));
      thirdWidth.value = withDelay(700, withSpring(200));
      opacity.value = withDelay(1200, withSpring(1));
    }
    isOpen.value = !isOpen.value;
  };

  const opacityText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const firstWidthStyle = useAnimatedStyle(() => {
    return {
      width: firstWidth.value,
    };
  });

  const secondWidthStyle = useAnimatedStyle(() => {
    return {
      width: secondWidth.value,
    };
  });

  const thirdWidthStyle = useAnimatedStyle(() => {
    return {
      width: thirdWidth.value,
    };
  });

  const renderItem = ({item, index}) => {
    if (!item.url) {
      return <View style={{width: SPACER}} key={index} />;
    }
    return (
      <TouchableOpacity
        key={index}
        // style={{flex: 1, height: 130, margin: 4}} //FOR COLUMN VIEW
        style={{
          width: ITEM_SIZE,
          height: Platform.OS === 'android' ? 500 : 400,
        }}
        onPress={() => props.navigation.navigate('Details', {details: item})}>
        <Animated.View
          style={[
            {
              width: '100%',
              height: '100%',
              borderRadius: 15,
              paddingHorizontal: 10,
            },
          ]}
          sharedTransitionTag={item.id.toString()}>
          <Animated.Image
            sharedTransitionTag={item.id.toString() + 'sharedImg'}
            source={{
              uri: item.url,
            }}
            style={{width: '100%', height: '100%', borderRadius: 15}}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newData}
        // numColumns={3}
        // columnWrapperStyle={{
        //   justifyContent: 'space-between',
        // }}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        scrollEventThrottle={16}
        style={{paddingTop: 100}}
        onScroll={onScroll}
        renderItem={renderItem}
      />

      {/* ANIMATED FLOATING BUTTONS */}
      <Animated.View
        // style={[styles.contentContainer, thirdIcon]} //FIRST ANIMATION STYLE
        style={[styles.contentContainer, thirdIcon, thirdWidthStyle]} //SECOND ANIMATION STYLE
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Players')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <AntDesign name="customerservice" color="#fff" size={25} />
          </View>

          {/* FOR SECOND ANIMATION */}
          <Animated.Text style={[styles.text, opacityText]}>
            Service
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        // style={[styles.contentContainer, secondIcon]} //FIRST ANIMATION STYLE
        style={[styles.contentContainer, secondIcon, secondWidthStyle]} //SECOND ANIMATION STYLE
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Players')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <AntDesign name="shoppingcart" color="#fff" size={25} />
          </View>

          {/* FOR SECOND ANIMATION */}
          <Animated.Text style={[styles.text, opacityText]}>Cart</Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        // style={[styles.contentContainer, firstIcon]} //FIRST ANIMATION STYLE
        style={[styles.contentContainer, firstIcon, firstWidthStyle]} //SECOND ANIMATION STYLE
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Players')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <AntDesign name="dashboard" color="#fff" size={25} />
          </View>

          {/* FOR SECOND ANIMATION */}
          <Animated.Text style={[styles.text, opacityText]}>
            Dashboard
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        onPress={secondHandlePress}
        style={{
          position: 'absolute',
          bottom: 50,
          right: 40,
          zIndex: 999,
        }}>
        <Animated.View style={[plusIcon]}>
          <AntDesign name="pluscircle" color="#0F56B3" size={40} />
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#0F56B3',
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 50,

    //ONLY FOR SECOND ANIMATION STYLE
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
