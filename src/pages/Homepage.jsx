import React from 'react'

import HeroSection from '../components/homePageComponents/HeroSection'
import MovingLogoSection from '../components/LogoSection/MovingLogoSection'
import MovieSection from '../components/homePageComponents/MovieSection'
import BannerOne from '../components/homePageComponents/BannerOne'
import BannerTwo from '../components/homePageComponents/BannerTwo'
import BannerThree from '../components/homePageComponents/BannerThree'
import LargeSmallSection from '../components/homePageComponents/LargeSmallSection'
import SmallTwoLinesSection from '../components/homePageComponents/SmallTwoLinesSection'
import FlatCardSection from '../components/homePageComponents/FlatCardsSection'
import StaticSection from '../components/homePageComponents/StaticSection'
import SubscribeButton from '../components/button/SubscribeButton'

import { 
  BannerOneData, 
  BannerThreeData, 
  BannerTwoData, 
  DealOfTheWeekData, 
  KidsShowList, 
  logos, 
  NewlyReleasedMoviesList, 
  OTTKingMoviesList, 
  OTTKingSpecialsList, 
  OTTKingSportsList, 
  TopWebSeriesList, 
  TrendingMoviesList, 
  TrendingTVShowsList, 
  videos 
} 
from '../data'

const Homepage = () => {
  return (
    <>
        <HeroSection videos={videos}/>
        <MovingLogoSection logos={logos}/>
        <MovieSection title='Trending Movies' category='trending-movies' movies={TrendingMoviesList}/>
        <MovieSection title='Newly released movies' category='newly-released-movies' movies={NewlyReleasedMoviesList}/>
        <BannerOne BannerOneData={BannerOneData}/>
        <LargeSmallSection title='Deal Of The Week' LargeSmallSectionData={DealOfTheWeekData}/>
        <MovieSection title='Trending TV Shows' category='trending-tv-shows' movies={TrendingTVShowsList}/>
        <BannerTwo BannerTwoData={BannerTwoData}/>
        <SmallTwoLinesSection title='Top Web Series' SmallTwoLinesSectionData={TopWebSeriesList}/>
        <MovieSection title='OTTKing Movies' category='ott-king-movies' movies={OTTKingMoviesList}/>
        <MovieSection title='Kids Shows' category='kids-shows' movies={KidsShowList}/>
        <FlatCardSection title='OTTKing Sports' movies={OTTKingSportsList}/>
        <BannerThree BannerThreeData={BannerThreeData}/>
        <StaticSection title='OTTKing Special' movies={OTTKingSpecialsList}/>
        <MovingLogoSection logos={logos}/>
        <SubscribeButton/>
    </>
  )
}

export default Homepage