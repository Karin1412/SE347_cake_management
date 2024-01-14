import React, { useState } from 'react';
import { Label } from 'flowbite-react';
import NavBar from "../components/productDetails/navbar";
import Footer from "../components/productDetails/footer";
import CakeImage from "../assets/cake.png";
import { products } from '../components/categories/data';
import '../styles/categories/categories.css'
function convertToVND(giaTri) {
  return giaTri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Category() {
  const allOption = "All";
  const uniqueCategories = [allOption, ...new Set(products.map(product => product.ctg))];
  const [category, setCategory] = useState(allOption);
  const [price, setPrice] = useState(400000);
  const [reviewCount, setReviewCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0.0);
  const [productName, setProductName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value, 10));
  };

  const handleReviewCountChange = (e) => {
    setReviewCount(parseInt(e.target.value, 10));
  };

  const handleAverageRatingChange = (e) => {
    setAverageRating(parseFloat(e.target.value));
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterSubmit = () => {
    let filtered;
    if (category === allOption) {
      // If "All" is selected, show all products without filtering by category
      filtered = products.filter(
        (product) =>
          product.price <= price &&
          product.reviews >= reviewCount &&
          product.rating >= averageRating &&
          product.title.toLowerCase().includes(productName.toLowerCase())
      );
    } else {
      filtered = products.filter(
        (product) =>
          product.ctg === category &&
          product.price <= price &&
          product.reviews >= reviewCount &&
          product.rating >= averageRating &&
          product.title.toLowerCase().includes(productName.toLowerCase())
      );
    }
  
    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    console.log("Filtered Products:", filtered);
    setFilteredProducts(filtered);
  };
  

  const handleRandomProducts = () => {
    const shuffled = shuffleArray(filteredProducts);
    setFilteredProducts(shuffled);
  };

  return (
    <div className='w-screen h-screen flex flex-col'>
      <NavBar />
      <div className="w-full h-auto flex md:flex-row flex-col">
        <div className="filter w-full md:w-1/4 h-auto flex flex-col px-[3%] py-[1%]">
          <div className="w-[80%] h-[50px] text-[#69432B] text-2xl font-medium border-4 border-[#ffffff] border-b-[#69432B]">Filters</div>
          <div className="py-[20px] w-full h-auto border-4 border-[#ffffff] border-b-[#69432B]">
            <div className="text-xl text-[#69432B] font-medium mb-2">PRODUCT CATEGORY</div>
            <div className="flex flex-col">
            {uniqueCategories.map(cat => (
              <div key={cat} className="flex items-center">
                <input
                  type="radio"
                  className="mr-2 bg-blue-50 checked:bg-[#69432B]"
                  id={cat}
                  name="Cakes"
                  value={cat}
                  checked={category === cat}
                  onChange={handleCategoryChange}
                />
                <Label className="text-lg font-normal" htmlFor={cat}>{cat}</Label>
                <div className="ml-2 text-sm">
                  {`(${filteredProducts.filter(product => product.price <= price && (cat === allOption || product.ctg === cat)).length})`}
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price-range" className="block mt-4 text-xl text-[#69432B] font-medium mb-2">
              Filter By Price:
            </label>
            <div className="flex justify-center w-full">
            <input
              type="range"
              id="price-range"
              min="0"
              max="400000"
              step="10000"
              value={price}
              onChange={handlePriceChange}
              className="transparent h-2 w-full rounded-lg bg-neutral-200 cursor-pointer appearance-none thumb-color-69432B"
            />

            </div>
            <span className="mt-2 text-xl font-medium text-[#69432B] text-center">{convertToVND(price)}</span>
          </div>
          <label htmlFor="review-count" className="block mt-4 text-xl text-[#69432B] font-medium mb-2">
            Filter By Review Count:
          </label>
          <input
            type="number"
            id="review-count"
            min="0"
            value={reviewCount}
            onChange={handleReviewCountChange}
            className="transparent h-8 w-full rounded-lg bg-neutral-200 text-[#69432B] pl-2"
          />
          <label htmlFor="average-rating" className="block mt-4 text-xl text-[#69432B] font-medium mb-2">
            Filter By Average Rating:
          </label>
          <input
            type="number"
            id="average-rating"
            min="0"
            max="5"
            step="0.1"
            value={averageRating}
            onChange={handleAverageRatingChange}
            className="transparent h-8 w-full rounded-lg bg-neutral-200 text-[#69432B] pl-2"
          />
          <label htmlFor="product-name" className="block mt-4 text-xl text-[#69432B] font-medium mb-2">
            Filter By Product Name:
          </label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={handleProductNameChange}
            className="transparent h-8 w-full rounded-lg bg-neutral-200 text-[#69432B] pl-2"
          />
          <label htmlFor="sort-order" className="block mt-4 text-xl text-[#69432B] font-medium mb-2">
            Sort Order:
          </label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="transparent h-10 w-full rounded-lg bg-neutral-200 text-[#69432B] pl-2"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <button onClick={handleFilterSubmit} className="mt-4 bg-[#69432B] text-white p-2 rounded-md cursor-pointer">
            Apply Filters
          </button>
          <button onClick={handleRandomProducts} className="mt-2 bg-[#69432B] text-white p-2 rounded-md cursor-pointer">
            Random Products
          </button>
        </div>
        <div className='w-3/4 h-auto flex flex-col text-lg font-bold flex-grow min-h-[90vh]'>
          <div className='h-[50px] mt-4 text-[#69432B] text-2xl font-medium border-4 border-[#ffffff] border-b-[#69432B] w-[40%]'>
            Shop
          </div>
          <div className='flex flex-row w-full h-auto flex-wrap justify-start p-10'>
            {filteredProducts.map(product => (
              <div key={product.id} className='flex flex-col w-[20%] items-center border rounded-lg border-slate-400 my-4 mx-2'>
                <img src={CakeImage} className='h-[45%]'></img>
                <div className='items-center p-6 text-center'>
                  <div className='text-[#69432B] text-lg mb-2'>{product.title}</div>
                  <div className='text-[#FF915D] text-lg'>
                    {convertToVND(product.price)}
                  </div>
                </div>
                <div className='divide-x-2 flex flex-row items-center justify-center'>
                  <div className='flex items-center justify-center h-full'>
                    <svg className="h-6 w-6 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                      <path
                        d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                      </path>
                    </svg>
                    <span className='font-semibold text-xs ml-2 mr-2' > { product.rating }/5</span>
                  </div>
                  <div className='flex items-center justify-center h-full'>
                    <span className='font-semibold text-xs ml-2' >{ product.reviews }</span>
                    <span className='text-[#FF915D] text-xs ml-2 mr-1' >Reviews</span>
                  </div>
                </div>
                <button className='mt-4 w-[50%] bg-[#69432B] text-center text-white font-medium text-[12px] px-4 py-2 rounded-lg'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Category;
