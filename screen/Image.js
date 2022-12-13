import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Button
} from "react-native";




const images = ['https://blog.kakaocdn.net/dn/L9bGA/btqN01QOOoY/F4HFg2XxfJq4bfziVbuF5k/img.jpg',
      'https://blog.kakaocdn.net/dn/bx2jjd/btqN014ml9r/EN2ZoP6gqr8vD2RrjyuXD0/img.jpg',
      'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/56549544_2293104487683121_4491883055371255808_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=r9pmylbEYVUAX8FCVz_&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB6npXv4ciiE3j_GH7U2zxwkz0Cr_a5W2zkPgZpTT4FRQ&oe=63BEC1E3',
      'https://blog.kakaocdn.net/dn/bEbBi6/btqNXddCUhG/FKkdMqJ3RodJ47VE4IbD10/img.jpg',
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTzAwK%2FbtqNVBGv9gN%2FUkXTgkHrvm68uU8Uklig7k%2Fimg.jpg',
      'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/83639871_556176008442690_7131733185724940288_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=QJCxFq05FlUAX9MlYZt&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDf6JH4toRSF1ZZDl-Q-iKfcK7aZdpsmP0-tXp4psczwA&oe=63BEC52C',
      'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/83498765_556176161776008_7688865678958264320_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=fjdSkV6Xhm0AX-QqZRP&_nc_ht=scontent-ssn1-1.xx&oh=00_AfA0dHByvd1c_A9gL2zukQUK3D6YesqbO_5by87e1tIijA&oe=63BEAD04'
];

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 320 }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                </ImageBackground>

              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;