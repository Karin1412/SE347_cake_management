import React from 'react';
import FadeIn from '../../animations/Fadein';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageIntro from '../../../assets/ChocolateIntro.png';
import ImageIntro1 from '../../../assets/slider1.jpg';
import ImageIntro2 from '../../../assets/slider2.jpg';
import ImageIntro3 from '../../../assets/slider3.jpg';
import ImageIntro4 from '../../../assets/slider4.jpg';
import ImageIntro5 from '../../../assets/slider5.jpg';
import ImageIntro6 from '../../../assets/slider6.jpg';

class Intro extends React.Component {
    componentDidMount() {
        this.setupSlider();
        this.autoSlideInterval = setInterval(this.autoPrev, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlideInterval);
    }

    handleSliderInteraction = () => {
        // Bạn có thể gọi hàm này khi người dùng tương tác với slider
        // Đặt logic để giảm xung đột với tự động chạy
        clearInterval(this.autoSlideInterval);
    };

    setupSlider = () => {
        let sliderContainer = document.getElementById('sliderContainer');
        let slider = document.getElementById('slider');
        let cards = slider.getElementsByTagName('li');

        let sliderContainerWidth = sliderContainer.clientWidth;
        let elementToShow = 3;
        if (document.body.clientWidth <= 550)
            elementToShow = 1;
        else if(document.body.clientWidth <= 850)
            elementToShow = 2;
        else
            elementToShow = 3
        let cardWidth = sliderContainerWidth / elementToShow;

        slider.style.transition = 'margin'
        slider.style.transitionDuration = '1s'
        slider.style.width = cards.length * cardWidth + 'px';

        for (let idx = 0; idx < cards.length; idx++) {
            const element = cards[idx];
            element.style.width = cardWidth + 'px';
        }
    };

    prev = () => {
        let sliderContainer = document.getElementById('sliderContainer');
        let slider = document.getElementById('slider');
        let cards = slider.getElementsByTagName('li');
        let sliderContainerWidth = sliderContainer.clientWidth;
        let elementToShow = 3;
        let cardWidth = sliderContainerWidth / elementToShow;
        let marginLeft = Math.round(+slider.style.marginLeft.slice(0, -2));
        let numStop = Math.round(-cardWidth * (cards.length - elementToShow));

        if (marginLeft !== numStop)
            slider.style.marginLeft = (+slider.style.marginLeft.slice(0, -2) - cardWidth) + 'px';
        else
            slider.style.marginLeft = 0 + 'px'
    }

    next = () => {
        let sliderContainer = document.getElementById('sliderContainer');
        let slider = document.getElementById('slider');
        let cards = slider.getElementsByTagName('li');
        let sliderContainerWidth = sliderContainer.clientWidth;
        let elementToShow = 3;
        let cardWidth = sliderContainerWidth / elementToShow;
        let marginLeft = Math.round(+slider.style.marginLeft.slice(0, -2));

        if (marginLeft !== 0)
            slider.style.marginLeft = (+slider.style.marginLeft.slice(0, -2) + cardWidth) + 'px';
        else
            slider.style.marginLeft = -cardWidth * (cards.length - elementToShow) + 'px';
    }

    autoPrev = () => {
        this.prev();
    };


    render() {
        return (
            <div className='flex flex-col items-center '>
                <div className='bg-gradient-to-r from-[#ffffff] to-[#eab676]'>
                    <div className='flex flex-row'>
                        <div className='flex flex-col ml-16 mt-8 w-[50%]'>
                            <FadeIn delay={0.2} direction="down">
                                <div className='text-[#69432B] text-6xl  font-medium mb-5'>Bring you Happiness through a piece of cake</div>
                            </FadeIn>

                            <FadeIn delay={0.2} direction="down">
                                <div className='text-[#272727] text-3xl w-[77%] my-5 '>We make Different types of cakes, chocolate, soft cookies, cheesecake pie, or anything you want.</div>
                            </FadeIn>
                            <FadeIn delay={0.2} direction="right">
                                <div className='flex flex-row my-5'>
                                    <button type="button" className="text-[#69432b] border border-[#69432b] bg-[#ffffff] hover:bg-[#69432b] hover:text-[#ffffff] font-medium rounded-lg text-xl px-8 py-2.5 me-2 mb-2 mr-4">Order Now</button>
                                    <button type="button" className="text-[#69432b] border border-[#69432b] bg-[#ffffff] hover:bg-[#69432b] hover:text-[#ffffff] font-medium rounded-lg text-xl px-8 py-2.5 me-2 mb-2 ml-4">See All Menus</button>
                                </div>
                            </FadeIn>
                        </div>
                        <FadeIn delay={0.2} direction="right">
                            <div>
                                <img src={ImageIntro} alt='ImageIntro' className=''></img>
                            </div>
                        </FadeIn>
                        
                    </div>
                    <FadeIn delay={0.2} direction="right">
                        <div className='flex w-screen'>
                            <div className='w-2/12 flex items-center'>
                                <div className='w-full text-right'>
                                    <button onClick={this.next} className='p-3 rounded-full bg-white border border-gray-100 shadow-lg opacity-50 mr-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>                        
                            <div className='w-8/12 overflow-hidden rounded-lg' id='sliderContainer'>
                            <ul id='slider' className='flex w-full'>
                                <li className='p-5'>
                                    <div className=' rounded-lg p-5 h-full'>
                                        <img className='w-full h-52 object-cover rounded-md' src={ImageIntro1} alt='imageSlider'></img>
                                    </div>
                                </li>

                                <li className='p-5'>
                                    <div className=' rounded-lg p-5 h-full'>
                                        <img className='w-full h-52 object-cover rounded-md' src={ImageIntro2} alt='imageSlider'></img>
                                    </div>
                                </li>

                                <li className='p-5'>
                                    <div className=' rounded-lg p-5 h-full'>
                                        <img className='w-full h-52 object-cover rounded-md' src={ImageIntro3} alt='imageSlider'></img>
                                    </div>
                                </li>

                                <li className='p-5'>
                                    <div className=' rounded-lg p-5 h-full'>
                                        <img className='w-full h-52 object-cover rounded-md' src={ImageIntro4} alt='imageSlider'></img>
                                    </div>
                                </li>

                                <li className='p-5'>
                                    <div className=' rounded-lg p-5 h-full'>
                                        <img className='w-full h-52 object-cover rounded-md' src={ImageIntro5} alt='imageSlider'></img>
                                    </div>
                                </li>

                                <li className='p-5'>
                                    <div className='rounded-lg p-5 h-full'>
                                        <img className='w-full h-52 object-cover rounded-md' src={ImageIntro6} alt='imageSlider'></img>
                                    </div>
                                </li>
                            </ul>
                            </div>
                            
                            <div className='w-2/12 flex items-center'>
                                <div className='w-full text-left'>
                                    <button onClick={this.prev} className='p-3 rounded-full bg-white border border-gray-100 shadow-lg opacity-50 ml-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>     
                        </div>
                    </FadeIn>
                </div>

            </div>
        );
    }
}

export default Intro;