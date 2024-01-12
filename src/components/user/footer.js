import React from 'react';
import Logo  from '../../assets/logo.png';
import FB_logo from '../../assets/Facebook.svg'
import Ins_logo from '../../assets/Instagram.svg'
import Twi_logo from '../../assets/Twitter.svg'
import Git_logo from '../../assets/Github.svg'
import Ldln_logo from '../../assets/Linkedln.svg'
import 'flowbite';

class Footer extends React.Component {
    render() {
        return(
            <div className="w-screen bg-[#ffdec9] divide-y divide-[#d7b4a4] ">
                <div className="w-full flex flex-row justify-around items-center">
                    <div className='flex pl-[4%] w-1/12'><img src={Logo} alt=''></img></div>
                    <div className="flex w-full h-[30%] justify-evenly text-[#69432b] font-serif text-xl">
                        <button className='nav-button'>Home</button>
                        <button className='nav-button'>Categories</button>
                        <button className='nav-button'>About us</button>
                        <button className='nav-button'>Support</button>
                        <button className='nav-button'>Contact us</button>
                    </div>
                </div>
                <div className='flex flex-row justify-between pt-[2%]'>
                    <div class="font-serif text-base pl-[5%]">&copy; 2021 SE347. All rights reserved.</div>
                    
                    <div className='flex flex-row pr-[2%] '>
                        <button><div class="w-16 h-16 relative pr-[10px]"><img src={FB_logo} alt=''></img></div></button>
                        <button><div class="w-16 h-16 relative pr-[10px]"><img src={Twi_logo} alt=''></img></div></button>
                        <button><div class="w-16 h-16 relative pr-[10px]"><img src={Ins_logo} alt=''></img></div></button>
                        <button><div class="w-16 h-16 relative pr-[10px]"><img src={Git_logo} alt=''></img></div></button>
                        <button><div class="w-16 h-16 relative pr-[10px]"><img src={Ldln_logo} alt=''></img></div></button>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default Footer;