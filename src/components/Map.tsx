import React from 'react';
import {Circle, Popup } from 'react-leaflet'; 
import { MapContainer } from 'react-leaflet/MapContainer'// Use Circle instead of CircleMarker
import { TileLayer } from 'react-leaflet/TileLayer'
import { useQuery } from 'react-query';
import { fetchCountryData } from '../api/covidApi';
import 'leaflet/dist/leaflet.css';

interface CountryInfo {
  _id: string;
  lat: number;
  long: number;
  flag: string;
}

interface Country {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  recovered: number;
  deaths: number;
}

const casesTypeColors: { [key: string]: { hex: string; multiplier: number } } = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

const Map: React.FC = () => {
  const { data, isLoading, error } = useQuery<Country[]>('countryData', fetchCountryData);
  console.log(data);

  if (isLoading) return <p>Loading Map...</p>;
  if (error) return <p>Error loading map data</p>;

  const showDataOnMap = (data: Country[], casesType: 'cases' | 'recovered' | 'deaths' = 'cases') =>
    data.map(country => (
      <Circle
        key={country.countryInfo._id}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        pathOptions={{
          color: casesTypeColors[casesType].hex,
          fillColor: casesTypeColors[casesType].hex,
          fillOpacity: 0.4,
        }}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
      >
        <Popup>
          <div>
            <div
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
              className="flag"
            />
            <div className="name">{country.country}</div>
            <div className="confirmed">Cases: {country.cases}</div>
            <div className="recovered">Recovered: {country.recovered}</div>
            <div className="deaths">Deaths: {country.deaths}</div>
          </div>
        </Popup>
      </Circle>
    ));

  return (
    <div className="w-full h-96 mt-8">
      <MapContainer 
      center={[51.505, -0.09]}
      zoom={2} 
      scrollWheelZoom={false} 
      className="h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data && showDataOnMap(data, 'cases')}
      </MapContainer>
    </div>
  );
};

export default Map;
