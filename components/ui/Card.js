import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Colors from '../../constants/colors';

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    paddingRight: 10,
    alignItems: 'center',
    paddingtop: 20,
    paddingBottom: 20,
    marginTop: deviceHight < 360 ? 10 : 25,
    backgroundColor: Colors.primary800,
    marginHorizontal: 10,
    borderRadius: 15,
    borderColor: '#ff5c0a',
    borderWidth: 2,
    elevation: 20, // android only
    shadowColor: 'black', // shadowSomething is IOS only
    shadowOffset: {width: 0, height: 2}, // shadowSomething is IOS only
    shadowRadius: 6, // shadowSomething is IOS only
    shadowOpacity: 0.25, // shadowSomething is IOS only
  },
});
