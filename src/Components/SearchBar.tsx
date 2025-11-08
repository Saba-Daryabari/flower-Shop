import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import type { MenuNode } from "./types";

interface SearchBarProps {
  isVisible: boolean;
  onClose: () => void;
  menuData: MenuNode[];
}

function SearchBar({ isVisible, onClose, menuData }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<MenuNode[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }
    const filtered = menuData.flatMap(
      (category) =>
        category.links?.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ) || []
    );

    setResults(filtered);
  }, [query, menuData]);

  if (!isVisible) {
    throw new Error("problem with searching bar");
  }
  return (
    <div className="searchContainer">
      <div ref={ref} className="searchWrapper">
        <div className="searchIcon">
          <IoIosSearch />
        </div>
        <input
          className="searchBar"
          type="text"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="closeSearch" onClick={onClose}>
          ✕
        </button>
      </div>
      {results.length > 0 && (
        <div className="searchResultsWrapper">
          <ul className="searchResults">
            {results.map((item, i) => (
              <li key={i} className="mainMenuItem ">
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {results.length === 0 && query.trim() && (
        <p className="noResults">No results found</p>
      )}
    </div>
  );
}

export default SearchBar;
