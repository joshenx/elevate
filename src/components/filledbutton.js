import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export function FilledButton({title}) {
  return (
    <TouchableOpacity>
        <Text>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
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
