import React from 'react';
import { Link } from 'react-router';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const{products} =useProducts();
    return (
        <div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>Featured Products</h1>
        <p>total products: {products.length}</p>
        <Link className='btn btn-outline' to='/products'>
          See All Products
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map(product=>(
            <ProductCard key={product.id} product={product}></ProductCard>
        ))
        
        }
      </div>
        </div>
    );
};

export default Products;