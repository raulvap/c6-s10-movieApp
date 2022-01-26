import React, {useContext, useEffect} from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';
import GradienteBackground from '../components/GradienteBackground';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {loading, nowPlaying, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColor} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    // Seccion 11: color gradient
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'black', secondary = 'white'] = await getImageColors(uri);

    setMainColor({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying?.length > 0) {
      // si es true, quiere decir que ya completó la petición a la BD
      // Mandamos llamar a la función para obtener los colores del 1er poster
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <GradienteBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel Principal */}
          <View style={{height: 450}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              // Esto es para cuando el item se coloca al frente,
              // lo usaremos para obtener los colores de la imagen: (clase 176)
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas Principales */}

          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Próximos Estrenos" movies={upComing} />
        </View>
      </ScrollView>
    </GradienteBackground>
  );
};

export default HomeScreen;

// ahora usamos este context/provider en App.tsx
