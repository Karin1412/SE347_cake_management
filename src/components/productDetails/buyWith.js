import React from "react";
import FadeIn from '../animations/Fadein';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyImg from '../../assets/BuyItWith.png'

function convertToVND(giaTri) {
    return giaTri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

class BuyMore extends React.Component {
    render(){
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
        return(
            <FadeIn delay={0.2} direction="left">
                <div className="w-8/12 flex justify-center items-center mt-8">
                    <div className="w-11/12 flex flex-col items-center justify-center border rounded-lg relative">
                        <div className="text-[#69432B] absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-white p-1  rounded font-bold text-3xl z-10">
                            BUY IT WITH
                        </div>
                        <div className="mt-8 w-full px-1 py-2 flex flex-col justify-center items-center ">
                            <div className="flex flex-row w-4/6 mt-4 justify-center items-center">
                                <img src={BuyImg} className="w-[25%] h-auto" alt="ImgAdd" />
                                <div className="flex flex-col mx-4">
                                    <div className="text-[#69432B] text-xl font-medium">Happy Birthday Cake Topper</div>
                                    <div className="text-[#69432B] text-xl font-medium">Branchise Good Cake</div>
                                    <div className="text-[#69432B] text-base font-normal mb-2">{convertToVND(15000)}</div>
                                    <button onClick={notifyAddition} className="bg-[#E8E5E2] text-[#69432B] rounded-lg flex p-2 h-full border w-7/12 text-base justify-center items-center">ADD TO CART</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 w-full px-1 py-2 flex flex-col justify-center items-center ">
                            <div className="flex flex-row w-4/6 mt-4 justify-center items-center">
                                <img src={BuyImg} className="w-[25%] h-auto" alt="ImgAdd" />
                                <div className="flex flex-col mx-4">
                                    <div className="text-[#69432B] text-xl font-medium">Happy Birthday Cake Topper</div>
                                    <div className="text-[#69432B] text-xl font-medium">Branchise Good Cake</div>
                                    <div className="text-[#69432B] text-base font-normal mb-2">{convertToVND(15000)}</div>
                                    <button onClick={notifyAddition} className="bg-[#E8E5E2] text-[#69432B] rounded-lg flex p-2 h-full border w-7/12 text-base justify-center items-center">ADD TO CART</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 w-full px-1 py-2 flex flex-col justify-center items-center ">
                            <div className="flex flex-row w-4/6 mt-4 justify-center items-center">
                                <img src={BuyImg} className="w-[25%] h-auto" alt="ImgAdd" />
                                <div className="flex flex-col mx-4">
                                    <div className="text-[#69432B] text-xl font-medium">Happy Birthday Cake Topper</div>
                                    <div className="text-[#69432B] text-xl font-medium">Branchise Good Cake</div>
                                    <div className="text-[#69432B] text-base font-normal mb-2">{convertToVND(15000)}</div>
                                    <button onClick={notifyAddition} className="bg-[#E8E5E2] text-[#69432B] rounded-lg flex p-2 h-full border w-7/12 text-base justify-center items-center">ADD TO CART</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 w-full px-1 py-2 flex flex-col justify-center items-center ">
                            <div className="flex flex-row w-4/6 mt-4 justify-center items-center">
                                <img src={BuyImg} className="w-[25%] h-auto" alt="ImgAdd" />
                                <div className="flex flex-col mx-4">
                                    <div className="text-[#69432B] text-xl font-medium">Happy Birthday Cake Topper</div>
                                    <div className="text-[#69432B] text-xl font-medium">Branchise Good Cake</div>
                                    <div className="text-[#69432B] text-base font-normal mb-2">{convertToVND(15000)}</div>
                                    <button onClick={notifyAddition} className="bg-[#E8E5E2] text-[#69432B] rounded-lg flex p-2 h-full border w-7/12 text-base justify-center items-center">ADD TO CART</button>
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
                        />-
                    </div>
                    
                </div>
            </FadeIn>
        )
    }
}

export default BuyMore;