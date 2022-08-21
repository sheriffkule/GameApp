import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItems({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItems;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 2,
    borderRadius: 40,
    padding: 6,
    marginVertical: 5,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: 0.25,
    shadowOpacity: 3,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
});
