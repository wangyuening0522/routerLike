import React, { useState } from 'react';
import useDebounce from './useDebounce';

function Example() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 5000);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function search() {
    // 发起搜索请求，使用 debouncedSearchTerm 而不是 searchTerm
    console.log('Searching for:', debouncedSearchTerm);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <button onClick={search}>Search</button>
    </div>
  );
}

export default Example;