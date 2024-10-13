import React from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

import {HeroCard} from '../components';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();  

  const {q=''} = queryString.parse(location.search);
  
  
  const heroesByName = getHeroesByName(q);  
  const showSearch = (q.length === 0);

  const {searchText, onInputChange} = useForm({
    searchText:q
  });

  const doSearchHero = (event)=>{
    event.preventDefault();

    navigate(`?q=${ searchText }`);
  }

  return (
    <>    
      <b><h1 style={{ color: 'blue' }}>Search Page</h1></b>
      <hr/>
      <div className='row'>
        <div className='col-4' style={{ padding: 5, margin: 2 }}>
          <h4 style={{ color: 'green' }}>Searching</h4>
          <hr/>   
          <form onSubmit={doSearchHero}>
              <input
                
                type='text'
                placeholder='Enter superhero to search'
                className='form-control'
                
                name='searchText'
                autoComplete='off'
                value={ searchText }                
                onChange={onInputChange}
              />

              <button 
                className='btn btn-primary mtn-2' 
                name='initSearchBtn'
               
                >
                  Reset
              </button>
            </form>
        </div>     
        <div className='col-4' style={{ padding: 5, margin: 2 }}>
          <h4 style={{ color: 'purple' }}> Results </h4>    
   
   
          <hr/>
          <div className='alert alert-primary'> Search a Hero

          </div>          
          {             
               heroesByName.map(hero=>(<HeroCard key ={hero.id} {...hero}/>))
          }        
        </div>    
      </div>
    </>
  )
}
