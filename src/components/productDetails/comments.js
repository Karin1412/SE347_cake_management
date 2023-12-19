// Trong Comments.js
import React from "react";
import { commentsData } from '../data'; 
import Star from "../../assets/star.svg";
import FadeIn from '../animations/Fadein';

class Comments extends React.Component {
    renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
            <img
                key={i}
                className={`w-4 h-4 text-[#f38e58] `}
                src={Star}
                alt={`Star ${i}`}
            />
            );
        }
        return stars;
        };
    render() {
        return (
            <FadeIn delay={0.2} direction="right">
                <div className="w-full flex flex-col mt-4">
                    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({commentsData.length})</h2>
                        </div>

                        {commentsData.map(comment => (
                        <article key={comment.id} className="p-6 text-base bg-white rounded-xl dark:bg-gray-900 border border-gray mb-4">
                            <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white font-semibold">
                                    <img className="mr-2 w-8 h-8 rounded-full" src={comment.avatar} alt={comment.author} />
                                    {comment.author}
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                <time pubdate dateTime="2022-02-08" title={comment.date}>{comment.date}</time>
                                </p>
                            </div>

                            <button id={`dropdownComment${comment.id}Button`} data-dropdown-toggle={`dropdownComment${comment.id}`}
                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                type="button">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>

                            <div id={`dropdownComment${comment.id}`}
                                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownMenuIconHorizontalButton${comment.id}`}>
                                <li>
                                    <a href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                </li>
                                </ul>
                            </div>
                            </footer>
                            <div className="flex ml-10">
                                {this.renderStars(comment.rating)}
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 mt-4">{comment.content}</p>
                            
                        </article>
                        ))}

                        <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#f38e58] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post comment
                        </button>
                        </form>
                    </div>
                    </section>
                </div>
            </FadeIn>
        );
  }
}

export default Comments;
