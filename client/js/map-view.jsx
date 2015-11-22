import React from 'react';

export default class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var map = L.map('map').setView([30.27, -97.746], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwaW5lZGEiLCJhIjoiY2loOWgybDhnMHR4eHUwa2xhOHRnYTJ3aiJ9.OLTnRf2Py_IXUBSfG8dbPQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapineda.o7kgelpe',
      accessToken: 'pk.eyJ1IjoibWFwaW5lZGEiLCJhIjoiY2loOWgybDhnMHR4eHUwa2xhOHRnYTJ3aiJ9.OLTnRf2Py_IXUBSfG8dbPQ'
    }).addTo(map);

    this.map = map;
  }


  refreshMap() {
    const map = this.map;
    const markers = this.props.locations.map((loc) => {
      return L.marker([loc.coordinates.x, loc.coordinates.y])
        .bindPopup(`<h4>${loc.address}</h4><a href="#">View</a>`);
    });
    const group = L.featureGroup(markers).addTo(map);
  }

  componentDidUpdate() {
    this.refreshMap();
  }

  render() {
    return <div id="map">
    </div>;
  }
}