import {
  Dimensions,
  FlatList,
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
import Carousel from 'react-native-snap-carousel';
import Video from 'react-native-video';

LogBox.ignoreAllLogs();

const Home = ({data}) => {
  const [fileReceived, setFileReceived] = useState();

  useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      files => {
        setFileReceived(files);
        // files returns as JSON Array example
        //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
      },
      error => {
        console.log(error);
      },
      'TestShare', // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );

    // To clear Intents
    ReceiveSharingIntent.clearReceivedFiles();
  }, []);

  // console.log(fileReceived, 'RECEIVEDDDDD');

  const [currIndex, setCurrIndex] = useState(0);

  const flatListRefs = useRef([]);
  const videoRefs = useRef(null);
  const carouselRef = useRef(null);
  const videoEndIndexRef = useRef(null);
  console.log('videoRefs', videoRefs.current);
  const scrollLeft = index => {
    flatListRefs.current[index].scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  // useEffect(() => {
  //   videoRefs.current == null;
  // }, [currIndex]);

  const scrollRight = index => {
    flatListRefs.current[index].scrollToEnd({
      animated: true,
    });
  };

  const handleVideoEnd = index => {
    const circuitExercises = data[currIndex].circuit_exercise;
    const nextVideoIndex = index;
    const nextCarouselIndex = currIndex + 1;

    if (nextVideoIndex < circuitExercises.length) {
      // Play the next video in the same circuit
      videoRefs.current[nextVideoIndex]?.seek(0);
      setCurrIndex(currIndex); // Re-render to play the next video
      // videoRefs.current = null; // Nullify the reference
    } else if (nextCarouselIndex < data.length) {
      setCurrIndex(nextCarouselIndex);
      carouselRef.current.snapToItem(nextCarouselIndex); // Scroll to the next index
      // videoRefs.current = null; // Nullify the reference
    }
  };

  const renderVideoItem = ({item, index}) => {
    console.log('item.exercise.exercise_video=>', item.exercise.exercise_video);
    return (
      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: '#000',
        }}>
        <Video
          // ref={ref => (videoRefs.current[index] = ref)}
          ref={videoRefs}
          resizeMode="cover"
          source={{
            uri: item.exercise.exercise_video,
          }} // Use the appropriate video URL
          style={{
            height: Dimensions.get('window').height - 70,
            width: Dimensions.get('window').width,
          }}
          onEnd={() => handleVideoEnd(index)}
          onLoad={data => {
            console.log('onLoadData========>', JSON.stringify(data));
          }}
          pause={false}
        />
      </View>
    );
  };

  const onBeforeSnapToItem = slideIndex => {
    if (videoEndIndexRef.current !== null) {
      // A video just ended, check if the next index is the same
      if (slideIndex === currIndex && videoEndIndexRef.current === currIndex) {
        const nextCarouselIndex = currIndex + 1;

        if (nextCarouselIndex < data.length) {
          setCurrIndex(nextCarouselIndex);
        }
      }
      videoEndIndexRef.current = null; // Reset the video end index ref
    } else {
      // Regular carousel index change
      setCurrIndex(slideIndex);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <View style={{backgroundColor: item.value, padding: 20}}>
          <Text style={{color: '#000', fontSize: 20}}>{item.title}</Text>
        </View> */}

        <FlatList
          ref={ref => (flatListRefs.current[index] = ref)}
          horizontal
          data={item.circuit_exercise}
          keyExtractor={circuitExercise => circuitExercise.id.toString()}
          nestedScrollEnabled={true}
          renderItem={renderVideoItem}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            paddingHorizontal: 20,
            position: 'absolute',
          }}>
          <TouchableOpacity
            style={{width: '50%'}}
            onPress={() => scrollLeft(index)}
          />
          <TouchableOpacity
            style={{width: '50%'}}
            onPress={() => scrollRight(index)}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onBeforeSnapToItem={onBeforeSnapToItem}
        useScrollView={true}
      />
      {/* <FlatList
        data={fileReceived}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  marginVertical: 20,
                  color: '#fff',
                }}>
                {index + 1}) {item.fileName}
              </Text>
              <Image
                source={{uri: item?.contentUri}}
                style={{width: 300, height: 300}}
              />
            </View>
          );
        }}
      /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
