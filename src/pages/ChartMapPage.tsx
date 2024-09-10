import React from 'react';
import Chart from '../components/Chart';
import Map from '../components/Map';

const ChartMapPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Charts and Maps</h1>
      <Chart />
      <Map />
    </div>
  );
};

export default ChartMapPage;
