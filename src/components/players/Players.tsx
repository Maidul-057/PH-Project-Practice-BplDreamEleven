import React from 'react';
import { use } from 'react';
import type { Iplayer } from '../../types/plaerType';
interface playerProps{ 
    playersPromise:Promise<Iplayer[]>
}

const Players = ({ playersPromise }:playerProps) => {
     console.log(playersPromise);
     const players = use(playersPromise);
     console.log(players, "Players");
    return (
        <div>
           console.log(players, "Players");
        </div>
    );
};

export default Players;