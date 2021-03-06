import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';
import {colors} from './src/utils/colors';
import {paddingSizes} from './src/utils/sizes';

export default function App() {

  const [focusSUbject, setFocusSubject] = useState("Gardening");
  return (
    <View style={styles.container}>
      {focusSUbject ? ( 
        <Timer focusSubject={focusSUbject} onTimerEnd={()=> {
          setFocusSubject(null);
        }}/>
        //<Text> Hey added </Text>
      ) : (
        //<Text> Not added </Text>
        <Focus addSubject={setFocusSubject}/>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS = 'ios' ? paddingSizes.md : paddingSizes.lg,
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    padding: 8,
  },
});   
