import React, { useState } from "react";
import { question } from "../../data";

const News_n_ques = () => {
  const sortedQuestions = [...question].sort((a, b) => {
    if (a.rating !== b.rating) {
      return b.rating - a.rating; // Sort by rating in descending order
    } else {
      return new Date(b.date) - new Date(a.date); // If ratings are equal, sort by date in descending order
    }
  });

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      {sortedQuestions.slice(0, 3).map((q) => (
        <React.Fragment key={q.id}>
          <h2 id={`accordion-flush-heading-${q.id}`}>
            <button
              type="button"
              className="flex items-start justify-start w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target={`#accordion-flush-body-${q.id}`}
              aria-expanded={expandedItem === q.id}
              aria-controls={`accordion-flush-body-${q.id}`}
              onClick={() => toggleAccordion(q.id)}
            >
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${expandedItem === q.id ? 'rotate-0' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
              <span>{q.ques}</span>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${q.id}`}
            className={`py-5 border-b border-gray-200 dark:border-gray-700 ${expandedItem === q.id ? 'block' : 'hidden'}`}
            aria-labelledby={`accordion-flush-heading-${q.id}`}
          >
            <div className="">
              <p className="text-gray-500 dark:text-gray-400 ">{q.ans}</p>
              {/* <p className="text-gray-500 dark:text-gray-400">{`Date: ${q.date}`}</p> */}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default News_n_ques;
