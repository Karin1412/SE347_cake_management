import React from 'react';
import 'flowbite';
import Cake1 from '../../assets/ca.png'
import Tree from '../../assets/tr.png'
import Snack from '../../assets/sn.png'
import nn1 from '../../assets/nn1.png'
import nn2 from '../../assets/nn2.png'
import nn3 from '../../assets/nn3.png'
import nn4 from '../../assets/nn4.png'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import NavBar from './navbar';

class Cart extends React.Component {

    render() {
        return(
            <div class='flex justify-around pt-24'>
                <div class='relative ml-[7.5%] basis-17/30'>
                    <h2 class="text-brown-new mb-4">Your cart</h2>
                    <div class="border-t-2 border-brown-new"></div>
                    <div className='flex flex-col'>
                        <div className='relative flex flex-row w-full overflow-x-auto pt-6 pb-6'>
                            <div className='w-[10%]'>
                                <img class="border-solid border-2 rounded-md border-light-new" src={Cake1} alt='Cake1'></img>
                            </div>
                            <div className='text-brown-new font-bold flex items-center w-[40%]'>
                                <p>1x Khalifa Kush (AAAA)</p>
                            </div>
                            <div className='w-[15%]'>
                                <form>
                                    <div class="relative flex items-center max-w-[8rem]">
                                        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="white p-4 h-11 text-brown-new">
                                            <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" aria-describedby="helper-text-explanation" class="h-10 w-10 rounded-lg bg-[#f4f4f4] border-none text-brown-new" required></input>
                                        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="white p-4 h-11 text-brown-new">
                                            <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='text-brown-new flex items-center w-[20%]'>
                                <p>$120.00</p>
                            </div>
                            <div className='text-brown-new font-bold flex items-center absolute inset-y-0 right-0'>
                                <p>$120.00</p>
                            </div>
                        </div>
                        <div class="border-t-2 border-light-new"></div>
                        <div className='relative flex flex-row w-full overflow-x-auto pt-6 pb-6'>
                            <div className='w-[10%]'>
                                <img class="border-solid border-2 rounded-md border-light-new" src={Tree} alt='Cake1'></img>
                            </div>
                            <div className='text-brown-new font-bold flex items-center w-[40%]'>
                                <p>1x Jungle Diamond (AA+)</p>
                            </div>
                            <div className='w-[15%]'>
                                <form>
                                    <div class="relative flex items-center max-w-[8rem]">
                                        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="white p-4 h-11 text-brown-new">
                                            <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" aria-describedby="helper-text-explanation" class="h-10 w-10 rounded-lg bg-[#f4f4f4] border-none text-brown-new" required></input>
                                        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="white p-4 h-11 text-brown-new">
                                            <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='text-brown-new flex items-center w-[20%]'>
                                <p>$200.00</p>
                            </div>
                            <div className='text-brown-new font-bold flex items-center absolute inset-y-0 right-0'>
                                <p>$200.00</p>
                            </div>
                        </div>
                        <div class="border-t-2 border-light-new"></div>
                        <div className='relative flex flex-row w-full overflow-x-auto pt-6 pb-6'>
                            <div className='w-[10%]'>
                                <img class="border-solid border-2 rounded-md border-light-new" src={Snack} alt='Cake1'></img>
                            </div>
                            <div className='text-brown-new font-bold flex items-center w-[40%]'>
                                <p>Shipwreck Edibles Gummy</p>
                            </div>
                            <div className='w-[15%]'>
                                <form>
                                    <div class="relative flex items-center max-w-[8rem]">
                                        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="white p-4 h-11 text-brown-new">
                                            <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" aria-describedby="helper-text-explanation" class="h-10 w-10 rounded-lg bg-[#f4f4f4] border-none text-brown-new" required></input>
                                        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="white p-4 h-11 text-brown-new">
                                            <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className='text-brown-new flex items-center w-[20%]'>
                                <p>$52.00</p>
                            </div>
                            <div className='text-brown-new font-bold flex items-center absolute inset-y-0 right-0'>
                                <p>$52.00</p>
                            </div>
                            <div class="border-t-2 border-light-new"></div>                          
                        </div>
                        <div class="border-t-2 border-light-new pb-6"></div>
                        <div class="border-t-2 border-light-new"></div>
                        <div class="relative h-auto w-full pb-12">
                            <div class="text-brown-new font-bold absolute inset-y-0 left-0 w-[10%] pt-6">Delivery</div>
                            <div class="text-brown-new font-bold absolute inset-y-0 right-0 w-[20%] pt-6">Free Returns</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between pt-6 space-x-6'>
                        <div className='px-4 h-full border-2 rounded-lg border-light-new flex flex-col'>
                            <div className='pt-4 basis-1/3'>
                                <img class="rounded-full border-solid border-2 bg-gray-300" src={bg1} alt='Cake1'></img>
                            </div>
                            <div className='basis-1/3 pt-4 text-brown-new font-bold'>
                                <p>
                                    Order by 10pm for free next day delivery on Orders overs $100
                                </p>
                            </div>
                            <div className='basis-1/3 pt-4 pb-4 text-brown-new'>
                                <p>
                                    We deliver Monday to Saturday - excluding Holidays
                                </p>
                            </div>
                        </div>
                        <div className='px-4 h-full border-2 rounded-lg border-light-new flex flex-col'>
                            <div className='pt-4 basis-1/3'>
                                <img class="rounded-full border-solid border-2 bg-gray-300" src={bg2} alt='Cake1'></img>
                            </div>
                            <div className='basis-1/3 pt-4 text-brown-new font-bold'>
                                <p>
                                    Free next day delivery to stores.
                                </p>
                            </div>
                            <div className='basis-1/3 pt-4 pb-4 text-brown-new'>
                                <p>
                                    Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100
                                </p>
                            </div>
                        </div>
                        <div className='px-4 h-full border-2 rounded-lg border-light-new flex flex-col'>
                            <div className='pt-4 basis-1/3'>
                                <img class="rounded-full border-solid border-2 bg-gray-300" src={bg3} alt='Cake1'></img>
                            </div>
                            <div className='basis-1/3 pt-4 text-brown-new'>
                                <p>
                                30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='mr-[7.5%] basis-17/60 border-solid border-2 rounded-md border-light-new'>
                    <div class='pl-6 pr-6'>
                        <h3 class='text-brown-new font-bold pt-6'>INFORMATION</h3>
                        <form>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-2 text-brown-new">Your name</label>
                                <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new"></input>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-2 text-brown-new">Your phone</label>
                                <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new"></input>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-2 text-brown-new">Your address</label>
                                <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new"></input>
                            </div>
                        </form>
                        <div class="border-t-2 border-light-new mt-[24px] pb-[24px]"></div>
                        <div class="flex justify-between">
                            <div class='text-brown-new'>Subtotal</div>
                            <div class='text-brown-new font-bold'>$497.00</div>
                        </div>
                        <div class="flex justify-between pt-6">
                            <div class='text-brown-new'>Discount</div>
                            <div class='text-brown-new font-bold'>$0.0</div>
                        </div>
                        <div class="flex justify-between pt-6 pb-6">
                            <div class='text-brown-new'>Shipping Costs</div>
                            <div class='text-brown-new font-bold'>$50.00</div>
                        </div>
                        <div data-style="clean" class="flex items-end mb-3">
                            <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                            <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
                                <div class="relative w-full mr-3 formkit-field">
                                    <input id="coupon code" class="formkit-input bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new" name="Coupon Code" aria-label="Coupon Code" placeholder="Coupon Code" required="" type="text"></input>
                                </div>
                                <button data-element="submit" class="formkit-submit">
                                    <div class="formkit-spinner">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <span class="px-10 py-3 text-sm font-medium text-center text-brown-new bg-[#ff915d] rounded-lg cursor-pointer focus:ring-4 focus:ring-blue-300 dark:bg-brown-new dark:hover:bg-brown-new dark:focus:ring-brown-new">Apply</span>
                                </button>
                            </div>
                        </div>
                        <div class="border-t-2 border-light-new mt-[24px] pb-[24px]"></div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                            <div class="bg-brown-new h-1.5 rounded-full dark:bg-brown-new w-[45%]"></div>
                        </div>
                        <p class='text-brown-new pt-6'>Get Free shipping for orders over <span class='text-red-500'>$100.00</span></p>
                        <a href="#" class="pt-6 font-medium text-brown-new dark:text-brown-new hover:underline">Continue Shopping</a>
                        <div class='pt-6'>
                            <button type="button" class="w-[100%] h-[48px] text-white bg-brown-new hover:bg-amber-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play order</button>
                        </div>
                        <div class="border-t-2 border-light-new mt-[24px] pb-[24px]"></div>
                        <p class='text-gray-400'>SECURE PAYMENTS PROVIDED BY</p>
                        <div class="pt-3 flex flex-row">
                            <div class='mr-3 flex justify-center items-center h-[32px] w-[56px] border-solid border-2 rounded-md border-light-new'>
                                <img class="max-w-full max-h-full" src={nn1}></img>
                            </div>
                            <div class='mr-3 flex justify-center items-center h-[32px] w-[56px] border-solid border-2 rounded-md border-light-new'>
                                <img src={nn2}></img>
                            </div>
                            <div class='mr-3 flex justify-center items-center h-[32px] w-[56px] border-solid border-2 rounded-md border-light-new'>
                                <img src={nn3}></img>
                            </div>
                            <div class='flex justify-center items-center h-[32px] w-[56px] border-solid border-2 rounded-md border-light-new'>
                                <img src={nn4}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cart;