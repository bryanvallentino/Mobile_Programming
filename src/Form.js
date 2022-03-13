/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const ContohForm = () => {
  const [username, onChangeusername] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [pass, onChangepass] = React.useState('');

  const ResetForm = () => {
    onChangeusername('');
    onChangeEmail('');
    onChangepass('');
    console.log(`username: ${username}, email: ${Email}, password: ${pass}`);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Exercise 7</Text>
      <SafeAreaView style={styles.garis} />
    
      <SafeAreaView style={styles.wrapperInput}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeusername}
        value={username}
        placeholder="Username"
      />
      </SafeAreaView>
        <SafeAreaView style={styles.wrapperInput}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="Email"
      />
      </SafeAreaView>

      <SafeAreaView style={styles.wrapperInput}>
      <TextInput
        style={styles.input}
        onChangeText={onChangepass}
        value={pass}
        placeholder="Password"
        secureTextEntry={true}
      />
      </SafeAreaView>
      <TouchableOpacity style={styles.login} onPress={ResetForm}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    container: {padding: 30},
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    garis: {
    borderBottomWidth: 1,
    marginTop: 10,
    borderColor: 'white',
    },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderRadius: 5,
    height: 40,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    height: 40,
  },
  wrapperInput: {
    marginTop: 20,
  },
  login: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ContohForm;