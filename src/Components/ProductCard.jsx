import React from 'react'

const ProductCard = ({ product }) => {
    // "id": 1,
    // "name": "Modern Velvet Sofa",
    // "category": "Furniture",
    // "price": 520,
    // "material": "Velvet, Wood",
    // "dimensions": "84 x 35 x 33 in",
    // "stock": true,
    // "image": "https://i.ibb.co.com/tM7pbxwx/Modern-Velvet-Sofa.jpg",
    // "description": "A cozy velvet sofa with a modern design, ideal for living rooms."
  const { name, image, price, category } = product
  return (
    <div className='card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>

        <p>Category: ${category}</p>
        <p>Price: ${price}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard