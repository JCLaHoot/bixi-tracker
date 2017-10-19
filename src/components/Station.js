import React from 'react';


const Station = ({name, bikesAvailable, totalBikes}) => {

// takes available bikes and puts them in a string. Wraps unavailable ones in a span
  const emojifyAvailableBikes = (bikesAvailable, totalBikes) => {
    var text = [];
    var available = ""
    var unavailable = ""
    for (var i = 0; i < totalBikes; i++) {
      if(i < bikesAvailable) {
        available += "🚲 ";
      } else {
        unavailable += "🚲 ";
      }
    }
    text.push(available);
    text.push(<span className="transparent">{unavailable}</span>)
    return text;
  }

  return (
    <li className="station">
        <h3>{name}</h3>
         <div className="station-info">
            <p>Bikes available: {bikesAvailable} </p>
            <p className="emoji">{emojifyAvailableBikes(bikesAvailable, totalBikes)}</p>
         </div>
    </li>
  );
}


export default Station;
