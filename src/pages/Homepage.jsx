import React from 'react'

import HeroSection from '../components/homePageComponents/HeroSection'
import MovieSection from '../components/homePageComponents/MovieSection'

import { NewlyReleasedMoviesList, TrendingMoviesList, videos } from '../data'


const Homepage = () => {
  return (
    <>
        <HeroSection videos={videos}/>
        <MovieSection title='Trending Movies' category='trending-movies' movies={TrendingMoviesList}/>
        <MovieSection title='Newly released movies' category='newly-released-movies' movies={NewlyReleasedMoviesList}/>
    </>
  )
}

export default Homepage