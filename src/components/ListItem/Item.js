import React from 'react';
import './Item.scss';
import { AppContext } from '../../AppContext';
import ItemInfo from './ItemInfo';

const Item = (props) => {
    const { pokemon } = props;
        return (
            <AppContext.Consumer>
                {
                    ({fetchPokemon}) => {
                        return (
                            <div className="pokemon-item" 
                                 onClick={() => fetchPokemon(pokemon.name)}>    
                                <h2 style={{marginTop: 0}}>{pokemon.name}</h2>
                                <ItemInfo pokemon={pokemon}/>
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        )
}

export default Item;