import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';

import {RoundedButton} from '../../components/RoundedButton';
import {fontSizes, paddingSizes, marginSizes } from '../../utils/sizes';
import {colors} from '../../utils/colors';

export const Focus = ({addSubject}) => {
  const [subejct, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style= {styles.title}> What would you like to focus on?</Text>
        <View style= {styles.inputContainer}>
          <TextInput style={{flex:1, marginRight: marginSizes.md}} 
            onSubmitEditing={
              ({ nativeEvent }) => {
              setSubject(nativeEvent.text)
            }} />
          <RoundedButton size={50} title="+"  onPress={() => {
            addSubject(subejct)
          }} />
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

  titleContainer: {
    flex:0.5,
    padding: paddingSizes.md,
    justifyContent: "center",
    
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
    
  },

  inputContainer: {
    paddingTop: paddingSizes.md,
    flexDirection: 'row',
    alignItems:'center',
  }

});   
