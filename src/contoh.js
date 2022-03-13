import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';


const Input = () => {
  const [username, onChangeusername] = React.useState('');
  const [email, onChangeemail] = React.useState('');
  const [password, onChangepassword] = React.useState ('');

  const cl = () => {
    onChangeusername('');
    onChangeemail('');
    onChangepassword('');
    console.log(`username: ${username}, email: ${email}, password: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FORM LOGIN</Text>

    {/* Vallentino */}
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeusername}
        value={username}
        placeholder="Masukkan Username"
      />

      {/* Wilmore */}
      {/* <TextInput
        style={styles.textInput}
        onChangeText={onChangeemail}
        value={email}
        placeholder="Masukkan Email"
      /> */}

      {/* Marchel */}
      {/* <TextInput
        style={styles.textInput}
        onChangeText={onChangepassword}
        value={password}
        placeholder="Masukkan Password"
        secureTextEntry={true}
      /> */}

      {/* Richard */}
      {/* <TouchableOpacity style={styles.button} onPress={cl}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity> */}
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
  },
  isi: {
    marginTop: 30,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    height: 40,
    marginTop: 25,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default Input;