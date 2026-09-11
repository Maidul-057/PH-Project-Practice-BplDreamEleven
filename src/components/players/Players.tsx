import React from 'react';
import { use } from 'react';


const Players = ({ playersPromise }) => {
     console.log(playersPromise);
     const players = use(playersPromise);
     console.log(players, "Players");
    return 
        <div>
           
        </div>
    ;
};

export default Players;