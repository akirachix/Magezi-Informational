"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface InsightsProps {
  question: string;
  answer: string;
}

const Insights = ({ question, answer }: InsightsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary rounded-lg mb-4 mx-1 md:mx-2 lg:mx-3 font-jost">
      <button
        className="flex justify-between w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="insights-answer"
      >
        <span className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold">
          {question}
        </span>
        <RiArrowDropDownLine
          className={`w-12 h-12 text-primary transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } md:w-18 md:h-18 lg:w-18 lg:h-18`}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0" id="insights-answer">
          <p className="text-black text-base sm:text-lg md:text-base lg:text-lg">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Insights;
