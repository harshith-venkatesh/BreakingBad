import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/UI/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';
import Pagination from './components/UI/Pagination';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.table(results.data);
      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const indexOfTheLastPage = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfTheLastPage - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfTheLastPage);
  return (
    <div className='container'>
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        items={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
