import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Heading} from '../components/heading';
import {Input} from '../components/input';
import {FilledButton} from '../components/filledbutton';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <StatusBar style="auto" />
      <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
      <Input style={styles.input} placeholder={'Password'} secureTextEntry/>
      <FilledButton title={'Login'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop:120,
  },
  title:{
      marginBottom: 32
  },
  input: {
      marginVertical:8,
  }
});
