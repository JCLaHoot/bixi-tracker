import React from 'react';

import Station from './Station';

const StationList = ({stations, search}) => {

  var filteredStations = stations.filter((station) => {
    return station.s.toUpperCase().includes(search.toUpperCase());
  });

  return (
    <ul>
      {filteredStations.map(function(station){
        return (
          <Station key={station.id}
            name={station.s}
            bikesAvailable={station.ba}
            totalBikes={station.ba + station.da}
            />
        )
      })}
    </ul>
  );

}

export default StationList;
