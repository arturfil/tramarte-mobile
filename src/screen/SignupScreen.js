import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.header} h3>Tramarte</Text>
      </Spacer>
      <Text style={styles.header} h4> Sign Up</Text>
      <Spacer/>
      <Input style={styles.input} value={email} onChangeText={setEmail} 
        autoCapitalize="none" label="email"/>
      <Spacer/>
      <Input style={styles.input} value={password} onChangeText={setPassword} 
        autoCapitalize="none" label="password" secureTextEntry/>
      <Spacer>
        <Button title="Sing Up"/>
      </Spacer>
    </View>
  )
  
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center"
  },  
  input: {
    borderColor: "black",
    borderWidth: 10,
    padding: 10
  },  
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  }
})  

export default SignupScreen;