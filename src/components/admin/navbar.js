import React from 'react';
import logo from '../../assets/logo.png'
import logoSearch from '../../assets/Button.png'
import logoShell from '../../assets/shell.png'

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
        window.location.href = myLink;
    }


    render() {
        return (
            <div className="w-full bg-white">
                {/* Notification */}
                <div className='w-full text-center bg-[#654229] p-0.5 text-white space-x-4'>
                    <div className='my-1'>
                        <span>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
                        <span className='font-medium'>{this.state.currentTime}</span>
                    </div>
                </div>

                {/* Logo Search Account */}
                <div className='w-full h-20 bg-[#ffffff] flex justify-around'>
                    <div className='h-full'><img src={logo} alt='logo' className='h-full'></img></div>
                    <div className='py-1.5 w-2/4 flex justify-center items-center'>
                        <input type="text" placeholder="Search" className='w-3/5 h-[72%] rounded-full border border-[#C8C9CB] p-2 mr-4 ml-[100px]' />
                        {/* <img src={logoSearch} alt='logoSearch' className='h-full'></img> */}
                        {/* <button type="button" className='h-full bg-cover bg-no-repeat bg-[{logoSearch}]' onClick={() => this.handleButtonClick()}></button> */}
                        <button type="button" className='h-[72%] w-[20%] bg-no-repeat' style={{ backgroundImage: `url(${logoSearch})`, backgroundSize: 'contain' }} onClick={() => this.handleButtonClick()}></button>
                    </div>
                    <div className='flex justify-end items-center space-x-3'>
                        <div onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Your Account</div>
                        <hr className='border-l border-[#C8C9CB] h-[50%]' />
                        <img src={logoShell} alt='logoShell' className=''></img>
                    </div>
                </div>

                {/* menu */}
                <div className='w-full h-2/3 bg-[#ffffff] border-2 border-y-stone-[#C8C9CB] flex justify-center'>
                    <div className='w-5/6 flex flex-row justify-between my-2'>
                        <div className='flex-1 text-lg' onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Home</div>
                        <div className='flex-1 text-lg' onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Categories</div>
                        <div className='flex-1 text-lg' onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>About us</div>
                        <div className='flex-1 text-lg' onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Support</div>
                        <div className='flex-1 text-lg' onClick={this.handleClick('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>Contact us</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;