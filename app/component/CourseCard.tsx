'use client'
import React from "react";
import SpotlightCard from "./SpotLightCard";
import Link from "next/link";
const CourseCard = () => {
  return (
    <SpotlightCard className="w-96 h-52 flex flex-col bg-slate/500">
      <div className=" flex-wrap">
        <h1 className="text-2xl w-2/3 text-white pb-2 border-b border-white ">
          Python Course
        </h1>
        <div className="flex flex-col space-y-3">
          <h1>Course duration: 6 weeks</h1>
          <h1>Take a quiz and start with the lessons</h1>
          <div className="flex justify-end w-full">
            <Link className="bg-white text-black px-6 py-2 rounded-full hover:scale-105" href="/quiz/python">Get Started</Link>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default CourseCard;
