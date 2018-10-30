import React from 'react';
import './ItemInfo.scss';
import { AppContext } from '../../AppContext';

const ItemInfo = (props) => {
    const { pokemon } = props;
    return (
        <AppContext.Consumer>
            {({pokemonInfo}) => {
                return (
                    pokemonInfo.map(poke => poke.name === pokemon.name 
                        ? (
                            <div className="item-info">
                                <p>{poke.weight} weight</p>
                                <p>{poke.height} height</p>
                                <img src={poke.sprites.front_default}/>
                            </div>
                        ) : null) 
                )
            }}
        </AppContext.Consumer>
    )
}

export default ItemInfo;