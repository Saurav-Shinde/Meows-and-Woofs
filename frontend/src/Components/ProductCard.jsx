import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ products }) => {
  return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[15px] w-[85%]">
          {products.map(product => (
              <div key={product.id} className="bg-[#d4c7aa] p-[0.5em] border-solid-[2px] border-[#676f58] text-center rounded-[15px]">
                  <img className='w-[90%] rounded-[15px] mt-[0.3em] ml-[12px]' src={product.imageUrl} alt={product.name} />
                  <h1 className='text-lg'>{product.name}</h1>
                  <p>Price: ${product.price}</p>
                  <Link to={`/Product/${product.id}`}><button className="buy w-[40%] h-[2em] border-solid border-[2px] border-[#676f58] bg-[#d4c7aa] text-[#676f58] rounded-[0.5em] hover:bg-[#676f58] hover:text-[#d4c7aa] transition-colors">Buy</button></Link>
              </div>
          ))}
      </div>
  );
};

export default ProductCard;
