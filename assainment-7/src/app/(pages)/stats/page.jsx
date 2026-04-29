import React from 'react';
import StatePieChart from './_component/StatePieChart';

export const metadata = {
  title: 'KeenKeeper | Stats',
  description: 'KeenKeeper - Friendship Analytics Page',
};

const StatsPage = () => {
  return (
    <section className="mt-15 py-15">
      <h2 className="sm:text-5xl text-3xl font-bold">Friendship Analytics</h2>
      <StatePieChart />
    </section>
  );
};

export default StatsPage;
