import React from 'react';
import {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton.js';
import Title from '../components/ui/Title.js';
import Colors from '../constants/colors';
import Card from '../components/ui/Card.js';
import InstructionText from '../components/ui/InstructionText.js';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const {height} = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 999.', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 360 ? 1 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={3}
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              textAlign="center"
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

//const deviceHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHight < 5600 ? 10 : 200,
    alignItems: 'center',
  },
  numberInput: {
    heigh: 50,
    width: 100,
    fontSize: 40,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 3,
    color: Colors.accent500,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
