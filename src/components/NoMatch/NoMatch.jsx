import React from 'react';
import noMatch from '../../images/noMatch.jpg';

const NoMatch = () => {
    return (
        <div>
            <img style={{height : '100vh', width: '100%'}} src={noMatch} alt=""/>
        </div>
    );
};

export default NoMatch;