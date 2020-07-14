import React from 'react';
import useSWR from 'swr';

import Loader from './helpers/Loader';
import Error from './helpers/Error';

const API_URL = `${process.env.REACT_APP_API_BASE}`;

const Statistic = ({ valueKey, label, endpoint }) => {
  const { data, error, isValidating } = useSWR(`${API_URL}${endpoint}`);

  if (isValidating) return <Loader />;
  else if (error) return <Error />;
  else if (data) {
    const value = data[valueKey];
    console.log(value);

    return (
      <figure className="Statistic">
        <h3>{value}</h3>
        <figcaption>{label}</figcaption>
      </figure>
    );
  } else return null;
};

const statistics = [
  { label: 'banded birds', valueKey: 'length', endpoint: '/birds/' },
  { label: 'observations recorded', valueKey: 'count', endpoint: '/observations/' },
  { label: 'birds observed', valueKey: 'count', endpoint: '/bird_observations/' },
];

const Statistics = () => (
  <div className="Statistics">
    <div className="row">
      {statistics.map((statistic) => (
        <div className="col-md-2" key={statistic.endpoint}>
          <Statistic {...statistic} />
        </div>
      ))}
    </div>
  </div>
);

export default Statistics;
