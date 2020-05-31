import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = ({navigation, route}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileCard}>
          <Image
            style={styles.image}
            source={{uri: `${route.params.detail.avatarUrl}`}}
          />
          <Text>{route.params.detail.platformUserId}</Text>
          <View style={styles.details}>
            <View style={styles.lifetime}>
              <Text>Level: {route.params.stats.level.displayValue}</Text>
              <Text>Kills: {route.params.stats.kills.displayValue}</Text>
            </View>
            <View style={styles.ranked}>
              <Image
                style={styles.image}
                source={{
                  uri: `${route.params.stats.rankScore.metadata.iconUrl}`,
                }}
              />
              <Text>{route.params.stats.rankScore.value}</Text>
              <Text>{route.params.stats.rankScore.metadata.rankName}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>List of Legends</Text>
          {route.params.legends.map(obj =>{
            return(
              <Text>{obj.metadata?.name}</Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  profileCard: {
    flexDirection: 'column',
    borderColor: '#696969',
    borderRadius: 50 / 2,
    alignItems: 'center',
    width: 300,
  },
  details: {
    flexDirection: 'row',
    width: 300,
  },
  ranked: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  lifetime: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
