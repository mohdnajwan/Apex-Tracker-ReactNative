import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  ToastAndroid,
} from 'react-native';
import GlobalFont from 'react-native-global-font'

const Home = ({navigation, route}) => {
  const [platform, setPlatform] = useState('origin');
  const [username, setUsername] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [userStats, setUserStats] = useState({});
  const [legends, setLegends] = useState({});

  const API_KEY = '5dec546c-dca5-47a1-9436-8d6ecdccbc25';

  useEffect(()=>{
    GlobalFont.applyGlobal('Montserrat-Regular');
  },[]);

  const fetchAPI = async () => {
    try {
      console.log(username, platform);
      const response = await fetch(
        `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${username}`,
        {
          headers: {
            'TRN-Api-Key': API_KEY,
          },
        },
      );
      const data = await response.json();
      setUserDetails(data.data.platformInfo);
      setUserStats(data.data.segments[0].stats);
      setLegends(data.data.segments.filter((leg) => {
        if (leg.type == "legend") {
          return leg;
        }
      })
      .map((obj) => {
        return obj;
      }));
      console.log(legends)
      if (data) {
        navigation.navigate('Profile', {detail: userDetails, stats: userStats, legends: legends});
      }
    } catch (error) {
      console.log('Opps Something error', error);
    }
  };

  return (
    <View style={styles.cover}>
      <Image style={styles.logo} source={require('../Asset/logo.png')} />
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

export default Home;
