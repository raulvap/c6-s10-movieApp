import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import CastItem from './CastItem';

// Creamos un componente definiendo la interfaz con la que vamos a trabajar: (clase 163)
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Details: */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text style={{color: 'grey'}}> {movieFull.vote_average} </Text>
          <Text style={{color: 'grey'}}>
            {' '}
            | {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.paragraph}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.paragraph}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})} USD
        </Text>
        <Text style={styles.title}>Actores</Text>
      </View>

      {/* Casting */}
      <View style={{marginBottom: 100}}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={cast}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 5}}
        />
      </View>
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'justify',
    color: 'grey',
  },
});
