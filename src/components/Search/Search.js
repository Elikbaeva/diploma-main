import { useEffect, useContext, useState, useRef } from "react";
import { AppContext } from "../../App";
import "./Search.css";

export default function Search() {
  const { products } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    console.log('Products:', products); // Логирование данных продуктов
  }, [products]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredProducts.slice(0, 5));
      console.log('Search Results:', filteredProducts); // Логирование результатов поиска
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
      {searchTerm && searchResults.length === 0 && (
        <div className="NoResults">No results found</div>
      )}
      <div className="SearchResults">
        {searchResults.map((product) => (
          <div key={product.id} className="Product">
            <h1>{product.name}</h1>
            <img
              src={product.picture}
              alt={product.name}
              className="Product__image"
            />
            <span className="Product__price">${product.price}</span>
            <span className="Product__description">{product.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
