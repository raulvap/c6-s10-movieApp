import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {loading, nowPlaying, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carousel Principal */}
        <View style={{height: 450}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Peliculas Principales */}

        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Próximos Estrenos" movies={upComing} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
