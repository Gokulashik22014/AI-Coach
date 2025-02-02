"use client";
import React, { useEffect, useState } from "react";
import { questions } from "../../constants/data.tsx";
import Link from "next/link.js";
const Question = ({
  data,
  index,
  submitted,
}: {
  data: any;
  index: number;
  submitted: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [color, setColor] = useState("bg-slate-800");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const validateOption = (option:string): string => {
    if (selectedOption === data.answer && selectedOption===option) return "bg-green-600";
    else if (selectedOption === option) return "bg-red-400";
    return "bg-slate-800";
  };
  return (
    <div className="mb-3 px-4 py-2 w-full">
      <h1>{data.question}</h1>
      <div className="w-full grid grid-flow-col grid-rows-2 mt-2">
        {data.options.map((option: string) => (
          <label
            className={`flex items-center space-x-2 ${
              submitted ? validateOption(option) : "bg-slate-800"
            } w-1/2 p-1 rounded-lg mt-1 `}
            key={option}
          >
            <input
              type="radio"
              name={`${data.question}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
const CouerseQuiz = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleScore = () => {
    setSubmitted(true);
  };
  return (
    <div className="h-screen w-full">
      <h1 className="text-7xl mb-12">Python Quiz</h1>
      <div>
        {questions.map((data: any, index: number) => (
          <Question data={data} index={index} submitted={submitted} />
        ))}
      </div>
      <div className="flex w-ful justify-end items-center gap-5">
        {submitted && <Link href="/tutorial/python" className="bg-white text-black px-4 py-2 rounded-full">Go to your course</Link>}
        <button
          className="bg-green-600 px-12 py-4 rounded-full"
          onClick={handleScore}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CouerseQuiz;
