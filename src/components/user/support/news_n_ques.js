import React from "react";
import { articles } from "../../data"
import "../../../styles/support/sp.css"
import Frequently_ques from "./frequently_ques"

class News_n_ques extends React.Component {
    render() {
      // Sắp xếp bài viết theo ngày giảm dần để lấy bài mới nhất
      const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
      // Lấy ra 6 bài đăng mới nhất
      const latestArticles = sortedArticles.slice(0, 6);
  
      return (
        <div className="w-full">
          <div className=" w-full pl-[7%]">
            <div className="text-2xl text-[#69432b] font-serif font-semibold py-4">
              Hot news
            </div>
            
            <div className="flex flex-wrap -mr-10 text-[#46494f] font-serif text-lg">
              {latestArticles.map((article, index) => (
                <div key={index} className="w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-3">
                  <div className="flex justify-between">
                    <div className="title-container">
                      {`${article.title}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full pl-[7%]">
                <div className="text-2xl text-[#69432b] font-serif font-semibold py-4">
                    Frequently asked questions
                </div>
                <div id="your_code_here">
                    <Frequently_ques />
                </div>
          </div>
        </div>
      );
    }
  }

export default News_n_ques;
