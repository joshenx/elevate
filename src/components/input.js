import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';


export function Input({style,...props}) {
  return <TextInput {...props} style ={[style,styles.input]}/>;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    width:'100%',
    height:50,
    borderRadius: 5,
  },
});
