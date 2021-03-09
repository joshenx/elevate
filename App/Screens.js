import React from "react";
import { View, Text, StyleSheet, Button,TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    padding:20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#358DCE'
  },
  text:{
    fontSize:32,
    paddingTop:20,
    marginBottom:40,
    //flex: 1
  },
  input:{
    backgroundColor:'#ccc',
    width:'100%',
    marginVertical:10,
    padding:10,
    borderRadius: 8,
  },
  buttext:{
    color: '#fff'
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example " })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "React Native School" }
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation,style }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text style={[style,styles.text]}>LOGIN</Text>
      <TextInput style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
      <TextInput style={styles.input} placeholder={'Password'} secureTextEntry/>
      <TouchableOpacity style={styles.button} onPress={() => signIn()}>
        <Text style={styles.buttext}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push("CreateAccount")}
        style={styles.button}
      >
        <Text style={styles.buttext}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
