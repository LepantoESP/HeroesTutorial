import React, { useMemo } from 'react'
import { heroes } from '../data/heroes'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const publisherList =  useMemo(()=> getHeroesByPublisher (publisher), [publisher]);
   
    return (
        
        <div className='row rows-col-1 row-cols-md-3 g-3'>
            {
                publisherList.map((hero) => (                    
                <HeroCard key={hero.id} { ...hero  } />
                //superhero, publisher, id, alter_ego, first_appearance, characters, id
        ))}

        </div>
    )
}
