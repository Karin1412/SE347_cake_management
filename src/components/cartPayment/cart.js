import React, {useState} from 'react';
import 'flowbite';
import { products } from "../cartPayment/data";
import { couponCodes } from "../cartPayment/data";
import nn1 from '../../assets/nn1.png'
import nn2 from '../../assets/nn2.png'
import nn3 from '../../assets/nn3.png'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import paypal from '../../assets/paypal.png'
import { useHistory } from 'react-router-dom';


function convertToVND(giaTri) {
    return giaTri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

class Cart extends React.Component {
    
    constructor(props) {
        super(props);
        const initialTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        const counter = products.reduce((acc) => acc + 1, 0);
        const defaultTotal = initialTotal <= 500000 ? initialTotal + 50000 : initialTotal;
        const defaultCost = initialTotal > 500000 ? "Free" : 50000;
        this.state = {
            couponCode: '',
            subtotal: initialTotal,
            products: products,
            isCouponApplied: false,
            discount: 0.00,
            shippingCost: defaultCost,
            total: defaultTotal,
            totalTemp: defaultTotal,
            stateCoupon: false,
            stateCouponFail: false, 
            stateChecking: [],
            annoucement: false,
            annouceflag: false,
            name: '',
            phone: '',
            address: '',
            counter: counter,
        };
    }

    handleQuantityChange = (productId, action) => {
        // Lấy ra sản phẩm có id tương ứng
        const product = this.state.products.find(prod => prod.id === productId);

        // Sao chép danh sách sản phẩm và tìm vị trí sản phẩm cần cập nhật
        const updatedProducts = [...this.state.products];
        const index = updatedProducts.findIndex(prod => prod.id === productId);

        // Cập nhật số lượng sản phẩm dựa trên action (tăng hoặc giảm)
        if (this.state.annoucement) {
            this.setState({annouceflag: true})
        }
        else {
            if (action === 'increment') {
                updatedProducts[index].quantity = (updatedProducts[index].quantity || 1) + 1;
            } else if (action === 'decrement' && updatedProducts[index].quantity > 1) {
                updatedProducts[index].quantity -= 1;
            }
                    // Cập nhật state
            this.setState({
                products: updatedProducts,
            });
        }

    }  

    calculateTotal = () => {
        // Tính toán tổng giá dựa trên số lượng và giá của từng sản phẩm
        const total = this.state.products.reduce((acc, product) => {
            return acc + (product.price * (product.quantity || 1));
        }, 0);

        // Cập nhật state với tổng giá mới
        if (total <= 500000) {
            this.setState({
                subtotal: total,
                total: total + 50000,
                shippingCost: 50000,
            });
        }
        else {
            this.setState({
                subtotal: total,
                total: total,
                shippingCost: 'Free'
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Kiểm tra nếu có sự thay đổi về số lượng sản phẩm, thực hiện lại tính toán tổng giá
        if (prevState.products !== this.state.products) {
            this.calculateTotal();
        }
    }

    handleCouponCodeChange = (event) => {
        this.setState({
            couponCode: event.target.value,
        });
    }

    applyCouponCode = () => {
        const { couponCode, total, stateChecking } = this.state;
        const appliedCoupon = couponCodes.find(code => code.code === couponCode);
        if (appliedCoupon) {
            if (stateChecking.includes(couponCode)) {
                this.setState({
                    isCouponApplied:true,
                });
                return;
            }
            else {
                const updatedTotal = total - appliedCoupon.price;
                stateChecking.push(couponCode);
                this.setState({
                    totalTemp: total,
                    total: updatedTotal,
                    discount: this.state.discount + appliedCoupon.price,
                    stateCoupon: true,
                    annoucement: true,
                });
            }

        } else {
            this.setState({
                stateCouponFail: true,
            });
            // Mã giảm giá không hợp lệ, có thể thông báo cho người dùng
            console.log('Invalid coupon code');
        }
    }

    handleCouponSuccessfull = () => {
        this.setState ({stateCoupon: false})
    }

    handleCouponApplied = () => {
        this.setState ({isCouponApplied: false})
    }

    handleCouponFailed = () => {
        this.setState ({stateCouponFail: false})
    }

    handleRestart = () => {
        this.state.stateChecking.splice(0,this.state.stateChecking.length)
        this.setState ({annouceflag: false, total: this.state.total + this.state.discount})
        this.setState ({discount: 0})
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    handlePhone = (event) => {
        this.setState({
            phone: event.target.value,
        });
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value,
        });
    }

    handleClick = () => {
        // Redirect to another file (change "target-file.html" to the actual file name)
        const customerInfo = {
            cusName: this.state.name,
            cusPhone: this.state.phone,
            cusAddress: this.state.address,
            cusTotal: this.state.total,
            cusDiscount: this.state.discount,
            cusShipping: this.state.shippingCost,
        };
        localStorage.setItem('cusInfo', JSON.stringify(customerInfo));
        // Convert the array to a JSON string
        const jsonString = JSON.stringify(this.state.products);
        localStorage.setItem('products', jsonString);

    };

    goToOtherComponent = () => {
        this.props.history.push('/payment.js');
      };

    render() {
        
        const { total, subtotal, discount, shippingCost} = this.state;

        return(
            <div class='flex justify-around pt-24 flex-wrap'>
                <div class='relative ml-[7.5%] basis-17/30'>
                    <div className='flex flex-row'>
                        <h2 class="text-brown-new mb-4 text-lg font-bold">Your Cart</h2>
                        <div class="absolute inset-y-0 right-0 text-[#bdbdc0] text-lg">({this.state.counter})</div>
                    </div>            
                    <div class="border-t-2 border-brown-new"></div>
                    {this.state.products.map(product => (
                    <div className='flex flex-col'>
                    <div className='relative flex flex-row w-full overflow-x-auto pt-6 pb-6' key={product.id}>
                        <div className='w-[10%]'>
                            <img class="border-solid border-2 rounded-md border-light-new" src={product.img} alt='Cake1'></img>
                        </div>
                        <div className='text-brown-new font-bold flex items-center w-[40%]'>
                            <p>{product.name}</p>
                        </div>
                        <div className='w-[15%]'>
                            <form>
                                <div class="relative flex items-center w-[30%]">
                                    <button type="button" id="decrement-button" data-input-counter-decrement={product.id} class="white p-4 h-11 text-brown-new"
                                        onClick={() => this.handleQuantityChange(product.id, 'decrement')}>
                                        <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input type="text" id={product.id} data-input-counter data-input-counter-min="1" aria-describedby="helper-text-explanation" class="h-10 w-10 rounded-lg bg-[#f4f4f4] border-none text-brown-new" required
                                    value={product.quantity || 1}/>
                                    <button type="button" id="increment-button" data-input-counter-increment={product.id} class="white p-4 h-11 text-brown-new"
                                        onClick={() => this.handleQuantityChange(product.id, 'increment')}>
                                        <svg class="w-3 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='text-brown-new flex items-center w-[10%] pl-2'>
                            <p>{convertToVND(product.price)}</p>
                        </div>
                        <div className='text-brown-new font-bold flex items-center absolute inset-y-0 right-0 w-[10%]'>
                            <p>{convertToVND((product.price * (product.quantity || 1)))}</p>
                        </div>
                    </div>
                    <div class="border-t-2 border-light-new"></div>
                    </div>
                    ))}

                    <div class="border-t-2 border-light-new mt-6"></div>

                    <div class="relative h-auto w-full pb-12">
                        <div class="text-brown-new font-bold absolute inset-y-0 left-0 w-[10%] pt-6">Delivery</div>
                        <div class="text-brown-new font-bold absolute inset-y-0 right-0 w-[30%] pt-6">Free Returns</div>
                    </div>

                    <div className='flex justify-stretch pt-6 space-x-8'>
                        <div className='h-full px-4 w-1/3 border-2 rounded-lg border-light-new flex flex-col'>
                            <div className='pt-4 basis-1/3'>
                                <img class="rounded-full h-[20%] w-[20%] bg-gray-300" src={bg1} alt='Cake1'></img>
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
                        <div className='h-full px-4 w-1/3 border-2 rounded-lg border-light-new flex flex-col'>
                            <div className='pt-4 basis-1/3'>
                                <img class="rounded-full h-[20%] w-[20%] bg-gray-300" src={bg2} alt='Cake1'></img>
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
                        <div className='h-full px-4 w-1/3 border-2 rounded-lg border-light-new flex flex-col'>
                            <div className='pt-4 basis-1/3'>
                                <img class="rounded-full h-[20%] w-[20%] bg-gray-300" src={bg3} alt='Cake1'></img>
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
                                <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new" 
                                value={this.state.name}
                                onChange={this.handleName}/>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-2 text-brown-new">Your phone</label>
                                <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new" 
                                value={this.state.phone}
                                onChange={this.handlePhone}/>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-2 text-brown-new">Your address</label>
                                <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new" 
                                value={this.state.address}
                                onChange={this.handleAddress}/>
                            </div>
                        </form>
                        <div class="border-t-2 border-light-new mt-[24px] pb-[24px]"></div>
                        <div class="flex justify-between">
                            <div class='text-brown-new'>Subtotal</div>
                            <div class='text-brown-new font-bold'>{convertToVND(subtotal)}</div>
                        </div>
                        <div class="flex justify-between pt-6">
                            <div class='text-brown-new'>Discount</div>
                            <div class='text-brown-new font-bold'>{convertToVND(discount)}</div>
                        </div>
                        <div class="flex justify-between pt-6 pb-6">
                            <div class='text-brown-new'>Shipping Costs</div>
                            <div class='text-brown-new font-bold'>{convertToVND(shippingCost)}</div>
                        </div>
                        <div class="flex justify-between pb-6">
                            <div class='text-brown-new'>Total</div>
                            <div class='text-brown-new font-bold' onChange={this.handleTotalChange}>{convertToVND(total)}</div>
                        </div>
                        <div data-style="clean" class="flex items-end mb-3">
                            <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                            <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
                                <div class="relative w-full mr-3 formkit-field">
                                    <input id="coupon code" class="formkit-input bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brown-new focus:border-brown-new block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brown-new dark:focus:border-brown-new" name="Coupon Code" aria-label="Coupon Code" placeholder="Coupon Code" required="" type="text"
                                        value={this.state.couponCode}
                                        onChange={this.handleCouponCodeChange}/>
                                </div>
                                <button data-element="submit" class="formkit-submit"
                                    onClick={this.applyCouponCode}>
                                    <div class="formkit-spinner">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <span class="px-10 py-3 text-sm font-medium text-center text-brown-new bg-[#ff915d] rounded-lg cursor-pointer focus:ring-4 focus:ring-blue-300 dark:bg-brown-new dark:hover:bg-brown-new dark:focus:ring-brown-new">Apply</span>
                                </button>
                            </div>
                        </div>
                        
                        {this.state.stateCoupon && (
                        <div id="toast-success" class="flex items-center w-full max-w p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span class="sr-only">Check icon</span>
                            </div>
                            <div class="ms-3 text-sm font-normal">Coupon code applied successfully.</div>
                            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close"
                            onClick={this.handleCouponSuccessfull}>
                                <span class="sr-only">Close</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        )}

                        {this.state.stateCouponFail && (
                        <div id="toast-danger" class="flex items-center w-full max-w p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                            </svg>
                            <span class="sr-only">Error icon</span>
                        </div>
                        <div class="ms-3 text-sm font-normal">Coupon code applied unsuccessfully.</div>
                        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close"
                        onClick={this.handleCouponFailed}>
                            <span class="sr-only">Close</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                        </div>
                        )}

                        {this.state.isCouponApplied && (
                        <div id="toast-warning" class="flex items-center w-full max-w p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                                </svg>
                                <span class="sr-only">Warning icon</span>
                            </div>
                            <div class="ms-3 text-sm font-normal">A coupon code applied successfully before.</div>
                            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close"
                            onClick={this.handleCouponApplied}>
                                <span class="sr-only">Close</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        )}
                        
                        {this.state.annouceflag && (
                            <div id="alert-additional-content-1" class="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                            <div class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span class="sr-only">Info</span>
                                <h3 class="text-lg font-medium">This is a info alert</h3>
                            </div>
                            <div class="mt-2 mb-4 text-sm">
                                You cannot add products once a discount code has been applied, please add the discount code again.
                            </div>
                            <div class="flex">
                                <button type="button" class="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-1" aria-label="Close"
                                onClick={this.handleRestart}>
                                Dismiss
                                </button>
                            </div>
                            </div>
                        )}


                        <div class="border-t-2 border-light-new mt-[24px] pb-[24px]"></div>
                        <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                            <div class="bg-brown-new h-1.5 rounded-full dark:bg-brown-new w-[45%]"></div>
                        </div>
                        <p class='text-brown-new pt-6'>Get Free shipping for orders over <span class='text-red-500'>{convertToVND(500000)}</span></p>
                        <a href="#" class="pt-6 font-medium text-brown-new dark:text-brown-new hover:underline">Continue Shopping</a>
                        <div class='pt-6'>
                            <button type="button" class="text-lg w-[100%] h-[48px] text-white bg-brown-new hover:bg-amber-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={this.handleClick}>Play order</button>
                        </div>
                        <div class="border-t-2 border-light-new mt-[24px] pb-[24px]"></div>
                        <p class='text-gray-400'>SECURE PAYMENTS PROVIDED BY</p>
                        <div class="pt-3 pb-3 flex flex-row">
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
                                <img src={paypal}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cart;

