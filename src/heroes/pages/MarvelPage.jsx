import React from 'react';
import { HeroList } from '../components';

export const MarvelPage = () => {

  const marvelKey = 'Marvel Comics';
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr></hr>
      <HeroList publisher={marvelKey}/>
    </>
  )
}
