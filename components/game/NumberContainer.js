import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.NumberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const deviceHight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: deviceWidth < 360 ? 4 : 25,
    marginTop: deviceWidth < 360 ? 4 : 25,
    width: deviceWidth < 360 ? 100 : 150,
    height: deviceHight < 360 ? 100 : 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NumberText: {
    color: Colors.accent500,
    fontSize: 50,
    //fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
  },
});
