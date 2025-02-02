import React from "react";
import CourseCard from "../component/CourseCard";

const Course = () => {
  return (
    <div className="w-full min-h-screen space-y-6 flex flex-col">
      <div className="w-full flex-row mb-4 h-1/2">
        <span className="w-full h-full border-b border-white pb-4 text-7xl">
            My Courses
        </span>
        <div className="h-full">

        </div>
      </div>
      <div className="w-full flex-row h-1/2">
      <span className="w-full h-full border-b border-white pb-4 text-7xl">
            Avaliable Courses
        </span>
        <div className="mt-8">
            <CourseCard/>
        </div>
      </div>
    </div>
  );
};

export default Course;
