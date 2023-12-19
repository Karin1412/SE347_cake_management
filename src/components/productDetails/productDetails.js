import React from 'react';
import { productDetails } from "../data";
import 'flowbite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FadeIn from '../animations/Fadein';

function convertToVND(giaTri) {
    return giaTri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

class ProductDetails extends React.Component {
    constructor(props) {
        const { price } = productDetails[0];
        super(props);
        this.state = {
          candleChecked: false,
          knifeChecked: false,
          spoonChecked: false,
          inputValue: 1,
          size22: true,
          size26: false,
          size28: false,
          cakePrice: price,
          totalCakePrice: price,
          knifePrice: 0,
          spoonPrice: 0,
          candlePrice: 0,
          total: price,
        };
    }

    handleClick22 = () => {
        this.setState({
          size22: true,
          size26: false,
          size28: false,
        });
    };
    
    handleClick26 = () => {
        this.setState({
          size22: false,
          size26: true,
          size28: false,
        });
    };
    
    handleClick28 = () => {
        this.setState({
          size22: false,
          size26: false,
          size28: true,
        });
    };

    handleKnifeCheckboxChange = () => {
        this.setState((prevState) => ({ knifeChecked: !prevState.knifeChecked}));
        let value = 0
        if(!this.state.knifeChecked){
            this.setState({
                knifePrice: 70000
            })
            value = 70000
        }
        else{
            this.setState({
                knifePrice: 0
            })
            value = 0
        }

        let total = this.state.totalCakePrice + value + this.state.spoonPrice + this.state.candlePrice
        this.setState({ total: total });
    };

    handleCandleCheckboxChange = () => {
        this.setState((prevState) => ({ candleChecked: !prevState.candleChecked }));
        let value = 5000
        if(!this.state.candleChecked){
            this.setState({
                candlePrice: 5000
            })
            value = 5000
        }
        else{
            this.setState({
                candlePrice: 0
            })
            value = 0
        }

        let total = this.state.totalCakePrice + this.state.knifePrice + this.state.spoonPrice + value
        this.setState({ total: total });
    };

    handleSpoonCheckboxChange = () => {
        this.setState((prevState) => ({ spoonChecked: !prevState.spoonChecked }));
        let value = 0
        if(!this.state.spoonChecked){
            this.setState({
                spoonPrice: 20000
            })
            value = 20000
        }
        else{
            this.setState({
                spoonPrice: 0
            })
            value = 0
        }

        let total = this.state.totalCakePrice + this.state.knifePrice + value + this.state.candlePrice
        this.setState({ total: total });
    };

    handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value, 10) || 1;
        this.setState({ inputValue });
    };

    handleButtonClick = (action) => {
        let updatedValue = this.state.inputValue;

        if (action === 'increment') {
            updatedValue += 1;
        } else if (action === 'decrement' && updatedValue > 1) {
            updatedValue -= 1;
        }

        let totalCakePrice = this.state.cakePrice * updatedValue
        let total = totalCakePrice + this.state.knifePrice + this.state.spoonPrice + this.state.candlePrice
        this.setState({ inputValue: updatedValue, totalCakePrice: totalCakePrice, total: total });
    };

    render() {
        const notifyAddition = () =>
            toast.success('Add Success Product', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                });
        const { size22, size26, size28, candleChecked, knifeChecked, spoonChecked, inputValue, totalCakePrice, knifePrice, candlePrice, spoonPrice, total} = this.state; 
        const { title, tag, old_price, price, rating, reviews, effects, relieve, aromas, about } = productDetails[0];
        return (
            <div className='w-9/12'>
                <FadeIn delay={0.2} direction="down">
                    <div>
                        <div className='mb-1'>
                            <span className="text-lg font-thin text-[#FF915D]"># best seller</span>
                        </div>

                        <div className='mb-2'>
                            <span className="text-3xl font-bold text-[#69432B]">{title}</span>
                        </div>

                        <div className='my-3 flex flex-wrap -m-1'>
                            {tag.map((tagItem, index) => (
                                <span key={index} className="m-1 bg-[#FFBF96] hover:bg-[#ea8f56] rounded-full px-2 font-light text-xs leading-loose cursor-pointer">
                                    {tagItem}
                                </span>
                            ))}
                        </div>
                        <div>
                            <div className='flex flex-row justify-between -m-1 my-3'>
                                <div>
                                    <span className="m-1 font-normal text-[#FF915D] text-lg line-through mr-2">{convertToVND(old_price)}</span>
                                    <span className="m-1 font-semibold text-[#EB2606] text-xl ">{convertToVND(price)}</span>
                                </div>
                                <div className='divide-x flex flex-row '>
                                    <div className='-m-1 flex flex-row '>
                                        <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                            <path
                                                d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                            </path>
                                        </svg>

                                        <span className='font-semibold m-1 text-xl mr-2'>{rating}/5</span>
                                    </div>

                                    <div className=''>
                                        <span className='font-bold -m-1 text-xl ml-2' >{reviews}</span>
                                        <span className='font-medium text-[#FF915D] -m-1 text-xl ml-2 mr-1' >Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.3} direction="right">
                    <div className='border border-[#F4F4F4] rounded-lg my-3'>
                        <div className='flex flex-row m-4 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                            </svg>

                            <div className='flex flex-col'>
                                <span className='ml-4 text-lg text-[#717378]'>EFFECTS</span>
                                <div className='ml-4 text-base'>
                                    {effects}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row m-4 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                            </svg>

                            <div className='flex flex-col'>
                                <span className='ml-4 text-lg text-[#717378]'>MAY RELIEVE</span>
                                <div className='ml-4 text-base w-5/6'>
                                    {relieve}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row m-4 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>

                            <div className='flex flex-col'>
                                <span className='ml-4 text-lg text-[#717378]'>AROMAS</span>
                                <div className='ml-4 text-base'>
                                    {aromas}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.3} direction="left">
                    <div className='my-3'>
                        <span className='text-lg text-[#717378]'>ABOUT THIS CAKE</span>
                        <div className='mx-10 text-justify'>
                            {about}
                        </div>
                    </div>
                </FadeIn>

                <hr className='my-4'></hr>
                
                <FadeIn delay={0.3} direction="left">
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-lg text-[#717378]'>SIZE</span>
                            <div className='flex w-max gap-4 m-2'>
                                <button
                                    className={`px-4 py-2 rounded-lg text-[#69432B] ${size22 ? 'bg-[#FFBF96]' : 'bg-[#F4F4F4]'} hover:bg-[#FFBF96]`}
                                    onClick={this.handleClick22}>
                                    22 cm
                                </button>

                                <button
                                    className={`px-4 py-2 rounded-lg text-[#69432B] ${size26 ? 'bg-[#FFBF96]' : 'bg-[#F4F4F4]'} hover:bg-[#FFBF96]`}
                                    onClick={this.handleClick26}>
                                    26 cm
                                </button>

                                <button
                                    className={`px-4 py-2 rounded-lg text-[#69432B] ${size28 ? 'bg-[#FFBF96]' : 'bg-[#F4F4F4]'} hover:bg-[#FFBF96]`}
                                    onClick={this.handleClick28}>
                                    28 cm
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-lg text-[#717378]'>ATTACH MORE</span>
                            <div className='flex w-max gap-4 my-4'>
                                <div className="flex items-center mb-4">
                                    <div className='mx-4'>
                                        <input
                                            id="knife-checkbox"
                                            type="checkbox"
                                            checked={this.state.knifeChecked}
                                            onChange={this.handleKnifeCheckboxChange}
                                            className="w-6 h-6 checked:bg-[#FF915D] bg-gray-100 border-gray-300 rounded focus:ring-[#FF915D] focus:ring-2 focus:bg-[#FF915D] accent-pink-500" />
                                        <label
                                            htmlFor="knife-checkbox"
                                            className="ms-2 text-lg text-gray-900 dark:text-gray-300">
                                                knife
                                        </label>
                                    </div>   
                                    
                                    <div className='mx-4'>
                                        <input
                                            id="candle-checkbox"
                                            type="checkbox"
                                            checked={this.state.candleChecked}
                                            onChange={this.handleCandleCheckboxChange}
                                            className="w-6 h-6 checked:bg-[#FF915D] bg-gray-100 border-gray-300 rounded focus:ring-[#FF915D] focus:ring-2 focus:bg-[#FF915D] accent-pink-500" />
                                        <label
                                            htmlFor="candle-checkbox"
                                            className="ms-2 text-lg text-gray-900 dark:text-gray-300">
                                                candle
                                        </label>
                                    </div>  
                                    
                                    <div className='mx-4'>
                                        <input
                                            id="spoon-checkbox"
                                            type="checkbox"
                                            checked={this.state.spoonChecked}
                                            onChange={this.handleSpoonCheckboxChange}
                                            className="w-6 h-6 checked:bg-[#FF915D] bg-gray-100 border-gray-300 rounded focus:ring-[#FF915D] focus:ring-2 focus:bg-[#FF915D] accent-pink-500" />
                                        <label
                                            htmlFor="spoon-checkbox"
                                            className="ms-2 text-lg text-gray-900 dark:text-gray-300">
                                                spoon
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="left">
                    <div className='flex flex-col border border-[#F4F4F4] p-4 rounded-xl'>
                        {size22 && (
                            <div className="my-1 flex flex-row justify-between p-2">
                                <div className='flex space-x-2'>
                                    <div> 
                                        Strawberry Shortcake (22 cm)
                                    </div>
                                    <div> x {inputValue} </div>
                                </div>

                                <div>
                                    {convertToVND(totalCakePrice)}
                                </div>
                            </div>
                        )}

                        {size26 && (
                            <div className="my-1 flex flex-row justify-between p-2">
                                <div className='flex space-x-2'>
                                    <div> 
                                        Strawberry Shortcake (26 cm)
                                    </div>
                                    <div> x {inputValue} </div>
                                </div>

                                <div>
                                    {convertToVND(totalCakePrice)}
                                </div>
                            </div>
                        )}  

                        {size28 && (
                            <div className="my-1 flex flex-row justify-between p-2">
                                <div className='flex space-x-2'>
                                    <div> 
                                        Strawberry Shortcake (28 cm)
                                    </div>
                                    <div> x {inputValue} </div>
                                </div>

                                <div>
                                    {convertToVND(totalCakePrice)}
                                </div>
                            </div>
                        )}

                        {knifeChecked && (
                            <div className="my-1 flex flex-row justify-between p-2">
                                <div> 
                                    Add knife
                                </div>
                                <div>
                                    {convertToVND(knifePrice)}
                                </div>
                            </div>
                        )}

                        {candleChecked && (
                            <div className="my-1 flex flex-row justify-between p-2">
                                <div> 
                                    Add candle
                                </div>
                                <div>
                                    {convertToVND(candlePrice)}
                                </div>
                            </div>
                        )}

                        {spoonChecked && (
                            <div className="my-1 flex flex-row justify-between p-2">
                                <div> 
                                    Add spoon
                                </div>
                                <div>
                                {convertToVND(spoonPrice)}
                                </div>
                            </div>
                        )}

                        <div className="w-full flex justify-between">
                            <div className="relative flex items-center max-w-[11rem]">
                                <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" 
                                onClick={() => this.handleButtonClick('decrement')}>
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>

                                <input 
                                    type="text" 
                                    id="bedrooms-input" 
                                    data-input-counter 
                                    data-input-counter-min="1" 
                                    data-input-counter-max="100" 
                                    aria-describedby="helper-text-explanation" 
                                    className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder=""
                                    value={this.state.inputValue}
                                    onChange={this.handleInputChange} />
                                    
                                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                                    </svg>
                                    <span>Cake</span>
                                </div>

                                <button 
                                    type="button" 
                                    id="increment-button" 
                                    data-input-counter-increment="bedrooms-input" 
                                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none " 
                                    onClick={() => this.handleButtonClick('increment')}>
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>

                            <button className='items-center flex bg-[#FF915D] rounded-lg space-x-2 divide-x-2'
                                onClick={notifyAddition}>
                                <div className='text-[#69432B] px-4 py-2'>
                                    Add to Cart
                                </div>
                                <div className='text-[#69432B] text-center px-4 py-2'>
                                    {convertToVND(total)}
                                </div>
                            </button>
                        </div>

                        <hr className='my-4'></hr>

                        <div className='flex flex-col space-y-2'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#FF915D]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className='ml-2'>
                                    Free Xpress Shipping on orders over 
                                    <span className='text-[#F2BC1B]'> {convertToVND(50000)}</span>
                                </div>
                            </div>
                            
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#FF915D]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className='ml-2'>
                                    Order before 12:00pm for same day dispatch
                                </div>
                            </div>

                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#FF915D]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className='ml-2'>
                                    Support & ordering open 7 day a week 
                                </div>
                            </div>
                        </div>  
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </FadeIn>
            </div>
        );
    }
}

export default ProductDetails;