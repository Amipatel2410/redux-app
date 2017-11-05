 import React from 'react';



function Hobbies({hobbies}) {
    return (
        <ul>
            {
                hobbies.map((hobbie, index)=> {
                    return (<li key={index}>{hobbie}</li>);
                })
            }
        </ul>
    );
};

export default Hobbies;