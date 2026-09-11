import React from 'react';
import type { Iplayer } from '../../types/plaerType';

const AvailablePlayers = ({players}) => {
    console.log(players, "from avlble players")
    return (
        <div>
            {
                players.map((players:Iplayer)=>{ 
                    return ( 
                    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={players.playerImg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{players.playerName}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)
                })
            }
        </div>
    );
};

export default AvailablePlayers;