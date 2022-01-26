import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {RootStackParamsList} from '../navigation/Navigation';

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'DetailScreen'
>;

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 410, width = 260}: Props) => {
  //   console.log(movie);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // Para enviar a otra pantalla (clase 158)
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate<DetailsScreenNavigationProp>('DetailScreen', movie)
      }
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 6,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.51,

    elevation: 13,
  },
});
