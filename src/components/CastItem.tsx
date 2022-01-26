import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={{paddingTop: 5, paddingBottom: 15, paddingLeft: 10}}>
      <View style={styles.container}>
        {actor.profile_path && (
          <Image
            source={{uri}}
            style={{width: 50, height: 50, borderRadius: 8}}
          />
        )}
        <View style={{padding: 5}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {actor.name}{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              opacity: 0.5,
            }}>
            {actor.character}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 4,

    margin: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 7,

    elevation: 9,
  },
});
