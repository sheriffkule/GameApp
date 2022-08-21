import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

function InstructionText({children, style}) {
  return <Text style={[styles.istructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  istructionText: {
    //fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 25,
  },
});

/*
<InstructionText style={styles.instructionText}>
  Higher or lower?
</InstructionText> */
