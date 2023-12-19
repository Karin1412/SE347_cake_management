import React from 'react';
import logo from '../../assets/logo.png'
import logoSearch from '../../assets/Button.png'
import logoShell from '../../assets/shell.png'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.getCurrentTime(),
        };
    }

    componentDidMount() {
        // Cập nhật giờ mỗi giây
        this.interval = setInterval(() => {
            this.setState({
                currentTime: this.getCurrentTime(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    formatNumber(value) {
        return value < 10 ? `0${value}` : `${value}`;
    }

    getCurrentTime() {
        const now = new Date();
        const hours = this.formatNumber(now.getHours());
        const minutes = this.formatNumber(now.getMinutes());
        const seconds = this.formatNumber(now.getSeconds());
        return `${hours}:${minutes}:${seconds}`;
    }
    
    handleButtonClick() {
        // Action
        console.log('Button Clicked!');
      }
    
    handleClick = (myLink) => () => {
        window.location.href=myLink;
    }
    

    render(){
        return (
            <div className="w-full h-1/6 bg-gray-400">
                {/* Notification */}
                <div className='w-full h-1/4 text-center bg-[#654229] p-0.5 text-white space-x-4'>
                    <span>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
                    <span className='font-medium'>{this.state.currentTime}</span>
                </div>

                {/* Logo Search Account */}
                <div className='w-full h-1/2 bg-[#ffffff]  flex justify-around'>
                    <img src={logo} alt='logo' className='h-full'></img>
                    <div className='py-1.5 w-2/4 flex justify-center items-center'>
                        <input type="text" placeholder="Search" className='w-3/5 h-[85%] rounded-xl border border-[#C8C9CB] p-2 mr-4 ml-[100px]'/>
                        {/* <img src={logoSearch} alt='logoSearch' className='h-full'></img> */}
                        {/* <button type="button" className='h-full bg-cover bg-no-repeat bg-[{logoSearch}]' onClick={() => this.handleButtonClick()}></button> */}
                        <button type="button" className='h-[80%] w-[20%] bg-no-repeat' style={{ backgroundImage: `url(${logoSearch})`, backgroundSize: 'contain'}} onClick={() => this.handleButtonClick()}></button>
                    </div>
                    <div className='flex justify-end items-center space-x-3'>
                    <div onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Your Account</div>
                        <hr className='border-l border-[#C8C9CB] h-[50%]' />
                        <img src={logoShell} alt='logoShell' className=''></img>
                    </div>
                </div>

                {/* menu */}
                <div className='w-full h-1/4 bg-[#ffffff] border border-[#C8C9CB] flex justify-around'>
                    <div onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Home</div>
                    <div onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Categories</div>
                    <Link to = "/about-us">About Us</Link>
                    <div onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Support</div>
                    <div onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Contact us</div>
                </div>  
            </div>  
        )
    }
}

export default NavBar;