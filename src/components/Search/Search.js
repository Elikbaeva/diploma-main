import { useEffect, useContext, useRef } from "react";
import { AppContext } from "../../App";
import "./Search.css";

export default function Search() {
  const { products, searchTerm, setSearchTerm, searchResults, setSearchResults } = useContext(AppContext);
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name?.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredProducts.slice(0, 5));
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Search" ref={searchRef}>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleSearch}
      />
      <span>
        <i className="fa-solid fa-magnifying-glass searcher"></i>
      </span>
      {searchTerm && (
        <div className="SearchResults">
          {searchResults.length === 0 ? (
            <div className="NoResults">No results found</div>
          ) : (
            searchResults.map((product) => (
              <div key={product.id} className="SearchResultItem">
                <img src={product.picture} alt={product.name} />
                <span>{product.name}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
