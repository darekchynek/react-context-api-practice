import React, {PureComponent} from 'react';
import './Item.scss';
import { AppContext } from '../../AppContext';
import ItemInfo from './ItemInfo';

class Item extends PureComponent {
    state = {
        toggleItem: false,
        itemFetch: false
    }

    render() {
        console.log("render")
        const { pokemon } = this.props;
        return (
            <AppContext.Consumer>
                {
                    ({fetchPokemon}) => {
                        return (
                            <div className="pokemon-item" 
                                 onClick={() => fetchPokemon(pokemon.name) && this.setState({toggleItem: !this.state.toggleItem})}>    
                                <h2 style={{marginTop: 0}}>{pokemon.name}</h2>
                                { this.state.toggleItem ? <ItemInfo pokemon={pokemon}/> : null}
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
   
}

export default Item;