import { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (search: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <input
        type="text"
        placeholder="Buscar pelo nome ou código..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full max-w-md p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#213a77] text-gray-700"
      />
      {inputValue && (
        <button
          onClick={() => setInputValue("")}
          className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
        >
          Limpar
        </button>
      )}
    </div>
  );
};

export default SearchBar;
