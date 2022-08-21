import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttonText}>{children} </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 15,
    margin: 4,
    //paddingHorizontal: 65,
    overflow: 'hidden',
    elevation: 40,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 8,
    width: 120,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ff5c0a',
  },
  buttonText: {
    color: Colors.accent500,
    textAlign: 'center',
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
