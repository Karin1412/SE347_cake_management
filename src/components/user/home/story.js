import React from 'react';
import img1 from '../../../assets/Rectangle 34.png'
import quotelogo from '../../../assets/Rectangle 29.png' 
import 'flowbite';

class Story extends React.Component {
    render() {
        return(
            <div id='story' className='w-screen h-auto font-serif'>
                <div className='flex-col flex w-full '>
                    <div className='flex flex-row w-full justify-center space-x-[3%]'>
                        <div className='flex flex-col w-1/3 mr-10'>
                            <h2 className='text-6xl mb-4 text-[#69432b]'>We Bake for you Fresh From the oven</h2>
                            <p className='text-2xl text-justify'>We use quality materials that we get directly from farmers. Our backers are exeperienced people in the food sector. So that the products we produce are guaranteed quality and taste. It’s so delicious, you have to try it!</p>
                            <button>
                            <div className='flex flex-row'>
                            <p className='text-2xl text-[#69432b] pt-6'>Read More</p> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="w-20 h-23 text-[#69432b] items-center pt-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </div>
                            </button>
                        </div>
                        <img className='w-1/3' src={img1} alt=''></img>
                    </div>

                    <div className='flex flex-row w-full justify-center space-x-[5%]'>
                        <img className='w-1/3' src={img1} alt=''></img>
                        <div className='flex flex-col w-1/3 mr-10'>
                            <h2 className='text-6xl mb-4 text-[#69432b]'>We Bake for you Fresh From the oven</h2>
                            <p className='text-2xl text-justify'>We use quality materials that we get directly from farmers. Our backers are exeperienced people in the food sector. So that the products we produce are guaranteed quality and taste. It’s so delicious, you have to try it!</p>
                            <button>
                            <div className='flex flex-row'>
                            <p className='text-2xl text-[#69432b] pt-6'>Read More</p> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="w-20 h-23 text-[#69432b] items-center pt-0">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </div>
                            </button>
                        </div>
                        
                    </div>
                </div>

                <div className='bg-[#ffdec9] text-center flex-col content-center space-y-[1.5%] pt-[4%] pb-[4%]'>
                    <p className='text-3xl font-bold text-[#69432b] '>For Cake Orders above 1 KG</p>
                    <p className='text-xl '>Please visit our nearest store or call us on +91 00 00 00 00 00 (10 AM to 7 PM) <br></br>
                    to place your orders.</p>
                    <button type="button" class="text-white bg-[#69432b] hover:bg-[#352216] font-xl rounded-lg text-large px-5 py-2.5 text-center inline-flex items-center">
                       Contact Us Now </button>
                </div>

                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <div id='quote_screen' class="relative h-56 overflow-hidden rounded-lg md:h-96 "> 
                    
                    <div class="hidden duration-700 ease-in-out flex justify-center items-center flex-col space-y-[2%] " data-carousel-item>
                        <div class="items-center w-16 h-[22px] px-2 py-0.5 bg-orange-100 rounded-[36px] shadow justify-center gap-0.5 text-center">
                            <div class="text-yellow-900 text-xs font-medium font-['Poppins'] leading-[18px]">QUOTES</div>
                        </div>
                        <div className='text-4xl text-center'>
                            Câu gì có ý nghĩa <br></br>
                            Câu gì đó có ý nghĩa
                        </div>
                        <div className='w-[6%] h-auto'><img src={quotelogo}></img></div>
                        
                    </div>
                    
                    <div class="hidden duration-700 ease-in-out flex justify-center items-center flex-col space-y-[2%] " data-carousel-item>
                        <div class="items-center w-16 h-[22px] px-2 py-0.5 bg-orange-100 rounded-[36px] shadow justify-center gap-0.5 text-center">
                            <div class="text-yellow-900 text-xs font-medium font-['Poppins'] leading-[18px]">QUOTES</div>
                        </div>
                        <div className='text-4xl text-center'>
                            Một câu vô nghĩa :) <br></br>
                            Một câu vô nghĩa :)
                        </div>
                        <div className='w-[6%] h-auto'><img src={quotelogo}></img></div>
                        
                    </div>

                    <div class="hidden duration-700 ease-in-out flex justify-center items-center flex-col space-y-[2%] " data-carousel-item>
                        <div class="items-center w-16 h-[22px] px-2 py-0.5 bg-orange-100 rounded-[36px] shadow justify-center gap-0.5 text-center">
                            <div class="text-yellow-900 text-xs font-medium font-['Poppins'] leading-[18px]">QUOTES</div>
                        </div>
                        <div className='text-4xl text-center'>
                            Câu gì có ý nghĩa <br></br>
                            Câu gì đó có ý nghĩa
                        </div>
                        <div className='w-[6%] h-auto'><img src={quotelogo}></img></div>
                        
                    </div>

                    
                </div>
                
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full transition duration-300 ease-in-out bg-[#efe5cf] hover:bg-[#69432b] focus:bg-[#69432b] focus:outline-none" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full transition duration-300 ease-in-out bg-[#efe5cf] hover:bg-[#69432b] focus:bg-[#69432b] focus:outline-none" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full transition duration-300 ease-in-out bg-[#efe5cf] hover:bg-[#69432b] focus:bg-[#69432b] focus:outline-none" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    {/* <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> */}
                    
                </div>
                
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
                </div>
            </div>
        );
    }
}
export default Story;