import React from 'react';
import Table from './components/Table';
import FilterTab from './components/FilterTab';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React Search and Filter App</h1>
      <div className="mb-4">
        <FilterTab />
      </div>
      <Table />
    </div>
  );
}

export default App;