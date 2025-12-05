import React, { useEffect, useState } from 'react'

interface Props {
  placeholder: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim().length > 0) {
        onQuery(query);
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query, onQuery]);

  const handleSubmit = () => {
    if (query.trim().length === 0) return;
    onQuery(query);
    setQuery(''); // limpia el input
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder={placeholder}
        className="w-1/2 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit();
          }
        }}
      />

      <button
        className="px-6 bg-purple-600 text-white font-semibold rounded-r-lg hover:bg-purple-700 transition-colors"
        onClick={handleSubmit}
      >
        Buscar
      </button>
    </div>
  );
};
