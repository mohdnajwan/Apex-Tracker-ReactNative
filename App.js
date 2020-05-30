import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  ToastAndroid
} from 'react-native';

const App = () => {
  const [platform, setPlatform] = useState('origin');
  const [username, setUsername] = useState('');

  const API_KEY = '5dec546c-dca5-47a1-9436-8d6ecdccbc25';

  const showFoundToast = () =>{
    ToastAndroid.showWithGravity("User Found!", ToastAndroid.SHORT, ToastAndroid.CENTER);
  }

  const fetchAPI = async () => {
    try {
      console.log(username,platform);
      const response = await fetch(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${username}`,
        {
          headers: {
            'TRN-Api-Key': API_KEY,
          },
        },
      );
      const data = await response.json();
      showFoundToast();
      console.log(data);
    } catch (error) {
      console.log('Opps Something error', error);
    }
  };

  return (
    <View style={styles.cover}>
      <Image style={styles.logo} source={require('./Asset/logo.png')} />
      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        onChangeText={value => setUsername(value)}
      />
      <Picker
        style={styles.option}
        selectedValue={platform}
        onValueChange={(itemValue, itemIndex) => setPlatform(itemValue)}>
        <Picker.Item label="Origin" value="origin" />
        <Picker.Item label="PSN" value="psn" />
        <Picker.Item label="XBOX" value="xbox" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={fetchAPI}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 200,
    marginBottom: 50,
  },
  cover: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkslateblue',
  },
  input: {
    width: 300,
    borderRadius: 50 / 2,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    width: 150,
    borderRadius: 50 / 2,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
});

export default App;
