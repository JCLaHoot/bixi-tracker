import React from 'react';


const Station = ({name, bikesAvailable, totalBikes}) => {

  const emojifyAvailableBikes = (bikesAvailable, totalBikes) => {
    var text = "";
    for (var i = 0; i < totalBikes; i++) {
      if(i < bikesAvailable) {
        text += "🚲 ";
      } else {
        // text += "💔";
        // text += "😡";
        text += "😢 ";

      }
    }
    return text;
  }

  return (
    <li className="station">
        <h3>{name}</h3>
         <div className="station-info">
            <p>Bikes available: {bikesAvailable} </p>
            <p>{emojifyAvailableBikes(bikesAvailable, totalBikes)}</p>
         </div>
    </li>
  );
}


export default Station;
