import React from 'react';
import Logo from '../../assets/logo.png';
import Search_Logo from '../../assets/search.png';
import Bag_Logo from '../../assets/bag.png';
import '../../styles/user/nav.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className="w-screen h-[20%] divide-y">
                {/* notification */}
                <div className="w-full h-[25%] bg-[#69432b] flex items-center justify-center text-lg text-[#d2c7bf]">
                    LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
                </div>
                {/* search */}
                
                <div className="w-full h-[40%] flex justify-around">
                    <div className='flex pl-[4%] w-1/3'>
                        <img className='h-16'src={Logo} alt=''></img> </div>
                    <div className='flex items-center justify-center w-1/3 '>
                        <input type="text" class=" w-3/5 min-w-100 w-full border rounded-full py-2 pl-4 " placeholder="Search" />
                        <button className="pl-3 h-[70%]">
                            <img src={Search_Logo} alt='' className="w-full h-full" /></button>
                    </div>
                    <div className="flex justify-end items-center w-1/3 pr-[4%]">
                        <button className='text-[#46494F]'>Your Account</button>
                        <div className="h-[25%] w-px bg-[#C8C9CB] mx-5"></div>
                        <button><img src={Bag_Logo} alt='' className="pl-[25]"></img></button>
                    </div>
                </div>

                {/* menu */}
                {/* divier */}
                <div className="flex w-full h-[30%] text-xl justify-evenly items-center text-[#46494F] font-serif">
                    <button className='nav-button'>Home</button>
                    <button className='nav-button'>Categories</button>
                    <button className='nav-button'>About us</button>
                    <button className='nav-button'>Support</button>
                    <button className='nav-button'>Contact us</button>
                </div>
            </div>
        );
    }
}

export default Navigation;
