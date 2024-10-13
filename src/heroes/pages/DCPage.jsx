import React from 'react'
import { HeroList } from '../components/HeroList';

export const DCPage = () => {

  const dcKey = 'DC Comics';
  return (
    <>
      <h1>DC Comics</h1>
      <hr></hr>
      <HeroList publisher={dcKey}/>
    </>
  )
}
