import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useQuery } from 'react-query';
import { fetchGraphData } from '../api/covidApi';

const Chart = () => {
  // Fetch data using React Query
  const { data, isLoading, error } = useQuery('graphData', fetchGraphData);

  console.log('Fetched data:', data); // Debugging log

  if (isLoading) return <p>Loading Chart...</p>;
  if (error) return <p>Error loading chart data</p>;

  // Ensure data is correctly structured
  if (!data || !data.cases || !data.deaths) return <p>No data available</p>;

  // Prepare data for recharts
  const chartData = Object.keys(data.cases).map(date => ({
    date,
    cases: data.cases[date],
    deaths: data.deaths[date],
  }));

  return (
    <div style={{ padding: '20px', marginTop: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>COVID-19 Cases and Deaths</h2>
      
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="blue" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="deaths" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
