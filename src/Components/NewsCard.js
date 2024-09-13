import React from 'react';
import './NewsCard.css'

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{news.title}</h5>
        <p className="text-gray-700 text-sm mb-4">{news.description}</p>
        <a
          href={news.url}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        <p className="text-gray-500 text-xs mt-2">Source: {news.source.name}</p>
      </div>
    </div>
  );
};

export default NewsCard;
