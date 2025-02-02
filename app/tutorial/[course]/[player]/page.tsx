"use client";

import Chat from "@/app/component/Chat";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const IFrame = ({video}:{video:string}) => {
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Player = () => {
  const params = useParams<{ course: string; player: string }>();
  useEffect(()=>{
    const getTranscription=async()=>{
    try {
      await axios.get(`http://localhost:3000/api/video?videoId=${params.player}`)
    } catch (error) {
      console.log(error)
    }
    }
    getTranscription()
  },[])
  return (
    <div className="w-full h-screen flex p-4 bg-gray-700">
      {/* YouTube Player (4/5 of the screen) */}
      <div className="w-4/6 h-full pr-2">
        <IFrame video={params.player}/>
      </div>

      {/* Chat/Notes Section (1/5 of the screen) */}
      <div className="w-2/6 h-full pl-2">
        <div className="w-full h-full bg-black rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Chat</h2>
          <Chat videoId={params.player}/>
        </div>
      </div>
    </div>
  );
};

export default Player;