import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import productsData from "../../components/products/products.json";
import ProductCard from "../../components/products/productCard";

function SearchResultPage({ searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    updateSearchResults(query);
  }, [location]);

  const updateSearchResults = (query) => {
    const filteredResults = productsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-950 py-36 px-4 md:px-12 lg:px-36">
      {searchQuery.trim().length > 0 && (
        <>
          {searchResults.length > 0 ? (
            <>
              <h1 className="text-white text-5xl mb-12">Search Results for "{searchQuery}"</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <h1 className="text-white">No result found for "{searchQuery}"</h1>
          )}
          <button className="mt-14" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </>
      )}
    </div>
  );
}

export default SearchResultPage;