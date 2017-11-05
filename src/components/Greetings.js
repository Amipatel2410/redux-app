
import React from 'react';

function Greetings({name}) {
    return (
        <p> { "Hello" + ( name ? name : ' Stranger')} </p> 
    );
}

export default Greetings;