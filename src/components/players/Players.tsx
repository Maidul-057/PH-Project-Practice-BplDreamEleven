import React from 'react';
import { use } from 'react';
import type { Iplayer } from '../../types/plaerType';
import AvailablePlayers from './AvailablePlayers';
interface playerProps{ 
    playersPromise:Promise<Iplayer[]>
}

const Players = ({ playersPromise }:playerProps) => {
     console.log(playersPromise);
     const players = use(playersPromise);
     console.log(players, "Players");
    return (
        <div className='container mx-auto grid '>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-2xl'>Availabe Players</h2>
                <div>
                        <button className="btn btn-availabe">Available</button>
                        <button className="btn btn-selected">Selected</button>
                </div>
                
            </div>
           <AvailablePlayers players ={players}/>
        </div>
    );
};

export default Players;