import React, { useState } from "react";
import { Link } from "react-router";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();
  const [ search, setSearch ] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter(product => product.name.toLocaleLowerCase().includes(term))
    : products;

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          Featured Products{" "}
          <span className="text-sm text-gray-400">
            total products: {searchedProducts.length}
          </span>
        </h1>

        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
