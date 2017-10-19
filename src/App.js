import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import StationList from './components/StationList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bixiStations: [],
      search: ""
    }
  }


fetchJSON = () => {
  console.log("updating data")
  const scope = this;
  fetch("https://secure.bixi.com/data/stations.json",{
    method: "get"
    }).then(function (response) {
      if(response.status !== 200) {
        console.log("something awful happened");
      } else {
        return response.json();
      }
   }).then(function (response){
     scope.setState({bixiStations: response.stations});
   }).catch(function (error){
     console.log("EPIC FAILLLLLL!!! THIS HAPPENED: " + error);
   });
}


componentDidMount() {
  const scope = this;
  scope.fetchJSON();
  setInterval(function(){
      scope.fetchJSON();
  }, 30000);
  // use setInterval
  // this.fetchJSON();

}



changeHandler = (event) =>{
    var text = event.target.value;
    this.setState({search: text});
}


  render() {
    this.state.bixiStations.length > 0 ? console.log("the state is " , this.state.bixiStations[0].s) : console.log("Still loading");
    return (
      <div className="App">
        <section className="search-header">
          <h2>Search for stations</h2>
          <SearchBar changeHandler={this.changeHandler}/>
          <h1>Find available Bixis</h1>
        </section>

        <section className="station-list">
          <StationList
            stations={this.state.bixiStations}
            search={this.state.search}
          />
        </section>

      </div>
    );
  }
}

export default App;
