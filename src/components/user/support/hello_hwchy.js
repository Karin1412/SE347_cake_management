import React from "react";
import '../../../styles/support/sp.css'
import SearchButton from '../../../assets/search_button_w.png'

class Hello_hwchy extends React.Component {
    render() {
        return (
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col justify-center bg-[#69432b] pl-[7%] text-[#ffffff]">
                    <div className="text-5xl font-serif font-semibold mb-7"> 
                        Hello, <br></br>
                        How can we help you?
                    </div>
                    <div className="text-[#69432b] w-full flex flex-row">
                        <input type="text" className="border rounded-full py-2 pl-4 font-medium w-[400px] lg:w-[25%] placeholder:text-[#69432b] mr-[10px]" placeholder="Question and Keyword?" />
                        <button className="w-[3%]" ><img src={SearchButton}></img></button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Hello_hwchy;
