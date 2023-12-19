import React from 'react';
import FadeIn from '../../animations/Fadein';
import CakeImage from '../../../assets/image_2.png';

function convertToVND(giaTri) {
    return giaTri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

class FeatureProduct extends React.Component {
    render(){
        return(
            <div className='w-full flex flex-col text-lg font-bold p-16'>
                <div className='my-4 text-[#69432B]'>
                    Featured Product
                </div>
                <div className='flex flex-row w-full h-[430px] justify-around'>
                    <div className='flex flex-col w-[20%] items-center border rounded-lg border-slate-400'>
                        <img src={CakeImage} className='h-[45%]'></img>
                        <div className='items-center p-6 text-center'>
                            <div className='text-[#69432B] text-lg mb-2'>Title Title Title Title Title Title Title</div>
                            <div className='text-[#FF915D] text-lg'>
                                {convertToVND(500000)}
                            </div>
                        </div>
                        <div className='divide-x-2 flex flex-row items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <svg className="h-6 w-6 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                            <path
                                                d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                            </path>
                                </svg>
                                <span className='font-semibold text-xs ml-2 mr-2' >4/5</span>
                            </div>

                            <div className='items-center text-center'>
                                <span className='font-semibold text-xs ml-2' >135</span>
                                <span className='text-[#FF915D] text-xs ml-2 mr-1' >Reviews</span>
                            </div>
                        </div>

                        <button className='mt-4 w-[50%] bg-[#69432B] text-center text-white font-medium text-[17px] px-4 py-2 rounded-lg'>
                            Add to Cart
                        </button>
                    </div>
                    <div className='flex flex-col w-[20%] items-center border rounded-lg border-slate-400'>
                        <img src={CakeImage} className='h-[45%]'></img>
                        <div className='items-center p-6 text-center'>
                            <div className='text-[#69432B] text-lg mb-2'>Title Title Title Title Title Title Title</div>
                            <div className='text-[#FF915D] text-lg'>
                                {convertToVND(500000)}
                            </div>
                        </div>
                        <div className='divide-x-2 flex flex-row items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <svg className="h-6 w-6 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                            <path
                                                d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                            </path>
                                </svg>
                                <span className='font-semibold text-xs ml-2 mr-2' >4/5</span>
                            </div>

                            <div className='items-center text-center'>
                                <span className='font-semibold text-xs ml-2' >135</span>
                                <span className='text-[#FF915D] text-xs ml-2 mr-1' >Reviews</span>
                            </div>
                        </div>

                        <button className='mt-4 w-[50%] bg-[#69432B] text-center text-white font-medium text-[17px] px-4 py-2 rounded-lg'>
                            Add to Cart
                        </button>
                    </div>
                    <div className='flex flex-col w-[20%] items-center border rounded-lg border-slate-400'>
                        <img src={CakeImage} className='h-[45%]'></img>
                        <div className='items-center p-6 text-center'>
                            <div className='text-[#69432B] text-lg mb-2'>Title Title Title Title Title Title Title</div>
                            <div className='text-[#FF915D] text-lg'>
                                {convertToVND(500000)}
                            </div>
                        </div>
                        <div className='divide-x-2 flex flex-row items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <svg className="h-6 w-6 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                            <path
                                                d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                            </path>
                                </svg>
                                <span className='font-semibold text-xs ml-2 mr-2' >4/5</span>
                            </div>

                            <div className='items-center text-center'>
                                <span className='font-semibold text-xs ml-2' >135</span>
                                <span className='text-[#FF915D] text-xs ml-2 mr-1' >Reviews</span>
                            </div>
                        </div>

                        <button className='mt-4 w-[50%] bg-[#69432B] text-center text-white font-medium text-[17px] px-4 py-2 rounded-lg'>
                            Add to Cart
                        </button>
                    </div>
                    <div className='flex flex-col w-[20%] items-center border rounded-lg border-slate-400'>
                        <img src={CakeImage} className='h-[45%]'></img>
                        <div className='items-center p-6 text-center'>
                            <div className='text-[#69432B] text-lg mb-2'>Title Title Title Title Title Title Title</div>
                            <div className='text-[#FF915D] text-lg'>
                                {convertToVND(500000)}
                            </div>
                        </div>
                        <div className='divide-x-2 flex flex-row items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <svg className="h-6 w-6 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                            <path
                                                d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                            </path>
                                </svg>
                                <span className='font-semibold text-xs ml-2 mr-2' >4/5</span>
                            </div>

                            <div className='items-center text-center'>
                                <span className='font-semibold text-xs ml-2' >135</span>
                                <span className='text-[#FF915D] text-xs ml-2 mr-1' >Reviews</span>
                            </div>
                        </div>

                        <button className='mt-4 w-[50%] bg-[#69432B] text-center text-white font-medium text-[17px] px-4 py-2 rounded-lg'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeatureProduct