import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
  Platform,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 360) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/images/success.png')}
            />
          </View>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    /* width: deviceWidth < 360 ? 200 : 320,
    height: deviceWidth < 360 ? 200 : 320,
    borderRadius: deviceWidth < 360 ? 100 : 180, */
    borderWidth: 2,
    borderColor: Colors.accent500,
    overflow: 'hidden',
    margin: Platform.select({android: 50, ios: 40}),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    //fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 1,
  },
  highlight: {
    //fontFamily: 'open-sans-bold',
    color: Colors.accent500,
  },
});
