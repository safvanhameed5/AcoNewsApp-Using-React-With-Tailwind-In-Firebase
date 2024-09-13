import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Pagination from './Pagination';
import NewsCard from './NewsCard';
import axios from 'axios'; // Import axios
import './NewsFeed.css';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('in'); // Default to India
  const [language, setLanguage] = useState('en'); // Default to English
  const [page, setPage] = useState(1); // Pagination state
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = 'b4c141ed1ef02fefaa79b3f1f897bcc8'; // Replace with your API key
        const query = searchQuery.trim() !== '' ? searchQuery : 'latest';
        const url = `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&topic=${category}&page=${page}&apikey=${apiKey}`;

        const response = await axios.get(url); // Use axios.get for cleaner syntax
        const data = response.data;

        if (data.articles) {
          setArticles(data.articles);
          console.log(data); // Log data for debugging if needed
        } else {
          setArticles([]); // Default to an empty array if no articles
        }
        setTotalPages(Math.ceil((data.totalArticles || 1) / 10)); // Handle undefined totalArticles
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]); // Handle fetch error by resetting articles
      }
    };

    fetchNews();
  }, [searchQuery, category, country, language, page]);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-8">News Feed</h2>

      <SearchBar setSearchQuery={setSearchQuery} />
      <Filters setCategory={setCategory} setCountry={setCountry} setLanguage={setLanguage} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))
        ) : (
          <p className="text-center col-span-4">No articles found.</p>
        )}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default NewsFeed;