import React from 'react';
import './ListItem.scss';
import { AppContext } from '../../AppContext';
import Item from './Item'

const ListItem = () => {
    console.log("list item")
    return (
        <AppContext.Consumer>
            {
                ({pokemons}) => pokemons
                    ? <div className="pokemon-list">
                        {pokemons.map(pokemon => <Item key={pokemon.name} pokemon={pokemon} />)}
                      </div>
                    : null
                }
        </AppContext.Consumer>
    )
}

export default ListItem;