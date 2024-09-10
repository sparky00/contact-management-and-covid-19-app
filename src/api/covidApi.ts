import axios from 'axios';

export const fetchGlobalData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};

export const fetchCountryData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

export const fetchGraphData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  console.log(response)
  return response.data;
  
};
