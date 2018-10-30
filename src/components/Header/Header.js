import React from 'react';
import './Header.scss';
import { AppContext } from '../../AppContext';

const Header = () => {
    return (
        <AppContext.Consumer>
            {({header, title, showTitle}) => (
                <div className="header-component">
                    <h1 style={{marginTop: 0, paddingTop: 0}}>{header}</h1>
                    {
                        
                        showTitle ? <p>{title}</p> : null
                    }
                    
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default Header;