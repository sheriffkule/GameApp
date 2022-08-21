import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    //fontFamily: 'open-sans-bold',
    fontSize: 30,
    //fontWeight: 'bold',
    color: '#f5deb3',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({android: 2, ios: 0}),
    borderColor: 'orange',
    padding: 12,
    marginTop: 2,
    width: '90%',
    //maxWidth: '90%',
  },
});
