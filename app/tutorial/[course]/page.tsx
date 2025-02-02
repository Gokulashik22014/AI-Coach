"use client";
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import axios from "axios";
import { usePathname } from "next/navigation";
import Link from "next/link";

const VideoCard = ({ videoId, title }: { videoId: string; title: string }) => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-white shadow-sm hover:shadow-black transition-shadow duration-300 flex items-center space-x-4">
      <Link href={`${pathname}/${videoId}`}>
        <div className="flex-shrink-0">
          <img
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt={title}
            className="w-32 h-20 rounded-lg object-cover"
          />
        </div>
      </Link>
      <Link href={`${pathname}/${videoId}`} className="flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
          <p className="text-sm text-gray-400">Watch now →</p>
        </div>
      </Link>
      <button>
        <FaDownload className="text-gray-100 w-6 h-6" />
      </button>
    </div>
  );
};

const CoursePlayList = () => {
  const [items, setItems] = useState<any>();
  useEffect(() => {
    const id = "PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3";
    const getPlaylistItems = async () => {
      try {
        const result = await axios
          .get(`http://localhost:3000/api/playlist?playlistId=${id}`)
          .then((res) => {
            const temp = res.data.items;
            let items = temp.map((data: any) => data.snippet);
            return items;
          })
          .catch((error) => console.log(error));
        setItems(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getPlaylistItems();
  }, []);
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      {/* Course Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-2">
          Python Course for Beginners
        </h1>
        <p className="text-gray-400">
          Learn Python from scratch and build your first project!
        </p>
      </div>

      <div className="flex space-x-8">
        {/* Left Section: Questions */}
        <div className="flex-grow w-1/3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              Why not test what you learnt?
            </h2>
            <div className="mt-4 shadow-sm shadow-white rounded-sm p-1">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  Quiz 1
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Attend the test to unlock more videos
                </p>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Attend Test
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Video List */}
        <div className="flex-grow w-2/3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[500px] overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Videos</h2>
            <div className="space-y-4">
              {items &&
                items.map((data: any, index: number) => (
                  <VideoCard
                    videoId={data.resourceId.videoId}
                    title={data.title}
                    key={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayList;
