import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Chat = ({videoId}:{videoId:string}) => {
    // useEffect(()=>{
    //   setLoading(true)
    //     const getData=async()=>{
    //         await axios.get(`http://localhost:3000/api/video?videoId=${videoId}`).then((res)=>{
    //           return setContext(res.data.message)
    //         })
    //     }
    //     getData()
    //     // console.log(context)
    //     if(context.length!=0){
    //       setHistory(old=>[...(old||[]),{role:"user",parts:[{text:context}]}])
    //       setLoading(false)
    //     }
    // },[])
  const [context,setContext]=useState("")
  const [loading,setLoading]=useState<boolean>(false)
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [history,setHistory]=useState<{role:string;parts:{text:string}[]}[]>([])
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    try {
      const res = await axios.post("http://localhost:3000/api/ai", {
        message: input,
        history: history, // Send previous messages for context
        context: context || "",
      });

      if (res.data.response) {
        setMessages([...messages, userMessage, { role: "bot", text: res.data.response }]);
        setHistory(res.data.history)
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput(""); // Clear input after sending
  };

  return (
    <div className="h-full overflow-y-auto flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Chat Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto max-h-[500px] p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg w-fit max-w-[75%] ${
              msg.role === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center bg-white p-2 rounded-md shadow-sm">
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-md outline-none text-black"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send on Enter
        />
        <button className="bg-blue-500 p-2 rounded-full text-white ml-2" onClick={sendMessage} disabled={loading}>
          <AiOutlineSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
