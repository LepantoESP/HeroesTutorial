import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {  

  const heroParams = useParams();  
  const heroData = useMemo ( () =>  getHeroById(heroParams.id), [heroParams.id]);
  const pageNavigator = useNavigate();

  const navigateBack = ()=>{
    pageNavigator(-1);
  }

  if (!heroData){
    return(
      <><h1 className='banner' style={{ color: 'red' }}>{heroParams.id} is not a valid hero</h1></>
    )

  }

  const imgPath = `/assets/heroes/${heroData.id}.jpg`;

  return (
    <>      
      <div className='mt-5'>        
        <div className='col-4'>
          <img
            src={imgPath}
            alt={heroData.superhero}
            className='img-thumbnail'          
          />
        </div>
        <div className='col-8'>
          <h3>{heroData.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>First Appearance : </b>{heroData.first_appearance}</li>
            <li className='list-group-item'><b>Characters : </b>{heroData.characters}</li>
            <li className='list-group-item'><b>Alter Ego : </b>{heroData.alter_ego}</li>            
          </ul>
          <button 
            className='btn btn-primary'
            onClick={navigateBack}>
                Atrás
          </button>
        </div>        
      </div>
    </>
  )
}
