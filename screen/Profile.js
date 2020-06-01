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
          <Text style={{fontSize: 25,fontWeight: 'bold'}}>{route.params.detail.platformUserId}</Text>
          <View style={styles.details}>
            <View style={styles.lifetime}>
              <Text style={styles.detailFont}>{route.params.stats.level.displayValue}</Text>
              <Text>Level</Text>
            </View>
            <View style={styles.detailsKills}>
              <Text style={styles.detailFont}>{route.params.stats.kills.displayValue}</Text>
              <Text>Total Kills</Text>
            </View>
          </View>
          <View style={styles.ranked}>
              <Image
                style={styles.rankImage}
                source={{
                  uri: `${route.params.stats.rankScore.metadata.iconUrl}`,
                }}
              />
              <Text style={styles.detailFont}>{route.params.stats.rankScore.value}</Text>
              <Text style={{fontSize: 23}}>{route.params.stats.rankScore.metadata.rankName}</Text>
            </View>
        </View>
        <View>
          <Text>List of Legends</Text>
          {route.params.legends.map(obj => {
            return (
              <View style={styles.legendCard}>
                <View style={{flex: 0.4}}>
                  <Image
                    style={styles.legendImage}
                    source={{uri: `${obj.metadata?.imageUrl}`}}
                  />
                </View>
                <View style={{flex: 0.6, padding: 10}}>
                  <Text>{obj.metadata?.name}</Text>
                  <View style={styles.infoContainer}>
                    <Text style={styles.desc}>Kills</Text>
                    <Text style={styles.value}>
                      {obj.stats?.kills?.value || 0}
                    </Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.desc}>Season 1 Wins</Text>
                    <Text style={styles.value}>
                      {obj.stats?.seasonWins?.value || 0}
                    </Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.desc}>Season 2 Wins</Text>
                    <Text style={styles.value}>
                      {obj.stats?.season2Wins?.value || 0}
                    </Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.desc}>Season 3 Wins</Text>
                    <Text style={styles.value}>
                      {obj.stats?.season3Wins?.value || 0}
                    </Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.desc}>Season 4 Wins</Text>
                    <Text style={styles.value}>
                      {obj.stats?.season4Wins?.value || 0}
                    </Text>
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.desc}>Season 5 Wins</Text>
                    <Text style={styles.value}>
                      {obj.stats?.season5Wins?.value || 0}
                    </Text>
                  </View>
                </View>
              </View>
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
    justifyContent: 'center'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 150 / 2,
    marginBottom: 10
  },
  rankImage:{
    height: 125,
    width: 125
  },
  detailFont: {
    fontSize: 20
  },
  profileCard: {
    flexDirection: 'column',
    //borderColor: '#696969',
    //backgroundColor:'#cccccc',
    alignItems: 'center',
    width: 400,
    paddingTop: 10,
    paddingBottom: 10
  },
  details: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  ranked: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  lifetime: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsKills:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  legendCard: {
    flexDirection: 'row',
    width: 400,
    paddingBottom: 10,
    marginBottom: 5,
    //backgroundColor: '#e3e3e3'
  },
  legendImage: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  desc: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  value: {
    flex: 1,
    textAlign: 'right',
  },
});

export default Profile;
