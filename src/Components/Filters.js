import React from 'react';

const Filters = ({ setCategory, setCountry, setLanguage }) => {
  return (
    <div className="flex justify-between mb-6">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">All Categories</option>
        <option value="world">World</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>

      <select
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="in">India</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="au">Australia</option>
      </select>

      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ml">Malayalam</option>
        <option value="ta">Tamil</option>
      </select>
    </div>
  );
};

export default Filters;
