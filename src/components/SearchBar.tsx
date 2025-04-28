import { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (search: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full max-w-md p-3 border rounded-md text-gray-700 transition-all duration-300 ease-in-out ${
          isFocused
            ? "border-[#213a77] shadow-lg ring-2 ring-[#213a77]"
            : "border-gray-300"
        }`}
      />
      {inputValue && (
        <button
          onClick={() => setInputValue("")}
          className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-all duration-300"
        >
          Limpar
        </button>
      )}
    </div>
  );
};

export default SearchBar;
