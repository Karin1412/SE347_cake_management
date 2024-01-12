import NavBar from "../../productDetails/navbar";
import Footer from "../../productDetails/footer";
import FadeIn from "../../animations/Fadein";

function Contact() {
  return (
    <div className='w-screen h-screen flex flex-col'>
        <NavBar />
        <div className="w-full h-full flex flex-col px-[10%] py-[3%]">
            <FadeIn delay={0.2} direction="down">
                <div>
                    <div className="w-full text-[#69432B] text-4xl font-medium text-center">
                        CONTACT US
                    </div>
                    <div className="w-full text-[#69432B] text-xl font-light text-center mt-2">
                        Any question or remarks? Just write us a message!
                    </div>
                </div>   
            </FadeIn>
            <div className="w-full flex flex-row mt-10">
                <div className="w-1/2 h-auto bg-[#FFF2E9] mr-4 flex flex-col p-12">
                    <div className="w-full text-[#69432B] text-4xl font-medium ">
                        Contact Information
                    </div>
                    <div className="w-full text-[#C9C9C9] text-lg font-normal ">
                        Tell with us
                    </div>

                    <div className="w-full text-[#69432B] flex text-lg mt-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        09.0909.0909
                    </div>

                    <div className="w-full text-[#69432B] flex text-lg mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        bakery@email.com
                    </div>

                    <div className="w-full text-[#69432B] flex text-lg mt-6 mb-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        01 Han Thuyen, Linh Trung, Thu Duc, Ho Chi Minh city
                    </div>
                </div>
                <div className="w-4/6 bg-[#FFFFFF] ml-4 pt-4 flex flex-col">
                    <div className="w-full flex flex-row justify-between">
                        <input className="rounded-lg w-[45%] p-3 bg-[#fdf2e9] border-none text-[#69432B] text-lg placeholder:text-[#69432B] focus:ring-[#69432B]" type="text" id="first-name" placeholder="First name" required/>
                        <input className="rounded-lg w-[45%] p-3 bg-[#fdf2e9] border-none text-[#69432B] text-lg placeholder:text-[#69432B] focus:ring-[#69432B]" type="text" id="last-name" placeholder="Last name" required/>
                    </div>

                    <div className="w-full flex flex-row justify-between mt-9">
                        <input className="rounded-lg w-[45%] p-3 bg-[#fdf2e9] border-none text-[#69432B] text-lg placeholder:text-[#69432B] focus:ring-[#69432B]" type="email" id="email" placeholder="Email" required/>
                        <input className="rounded-lg w-[45%] p-3 bg-[#fdf2e9] border-none text-[#69432B] text-lg placeholder:text-[#69432B] focus:ring-[#69432B]" type="tel" id="phone" placeholder="Phone" required/>
                    </div>

                    <div className="w-full flex flex-col mt-9">
                        <div className="text-base text-[#69432B] font-medium">Select Subject</div>
                        <div className="flex justify-around mt-4">
                            <div>
                                <input id='taste' type="radio" name="subject" className="mr-2 bg-[#E0E0E0] border-[#E0E0E0] focus:ring-[#69432B] focus:bg-[#69432B] checked:bg-[#69432B]">
                                </input>
                                <label for='taste' className="text-[#E0E0E0] text-sm">
                                    Taste
                                </label>
                            </div>

                            <div>
                                <input id='service' type="radio" name="subject" className="mr-2 bg-[#E0E0E0] border-[#E0E0E0] focus:ring-[#69432B] focus:bg-[#69432B] checked:bg-[#69432B]">
                                </input>
                                <label for='service' className="text-[#E0E0E0] text-sm">
                                    Service
                                </label>
                            </div>
                            <div>
                                <input id='delivery' type="radio" name="subject" className="mr-2 bg-[#E0E0E0] border-[#E0E0E0] focus:ring-[#69432B] focus:bg-[#69432B] checked:bg-[#69432B]">
                                </input>
                                <label for='delivery' className="text-[#E0E0E0] text-sm">
                                    Delivery
                                </label>
                            </div>
                            <div>
                                <input id='price' type="radio" name="subject" className="mr-2 bg-[#E0E0E0] border-[#E0E0E0] focus:ring-[#69432B] focus:bg-[#69432B] checked:bg-[#69432B]">
                                </input>
                                <label for='price' className="text-[#E0E0E0] text-sm">
                                    Price
                                </label>
                            </div>
                            
                        </div>
                    </div>

                    <textarea className="bg-[#fdf2e9] h-[30%] rounded-lg border border-gray-300 focus:border-[#69432B] focus:ring-[#69432B] w-full mt-9 text-[#69432B]" placeholder="Write your thoughts here...">
                    </textarea>
                    <button className="bg-[#69432B] w-[30%] h-[10%] text-white rounded-lg mt-auto ml-auto">
                        Send message
                    </button>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
  );
}

export default Contact;