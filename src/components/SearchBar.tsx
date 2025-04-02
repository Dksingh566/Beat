
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchBar: React.FC<{ onSearch?: (query: string) => void, className?: string }> = ({ 
  onSearch, 
  className = "w-full max-w-lg" 
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Song, Artist"
          className="w-full bg-music-light text-white py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-1 focus:ring-music-highlight"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </form>
    </div>
  );
};

export default SearchBar;
