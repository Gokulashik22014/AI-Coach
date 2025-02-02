import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const videoId = params.get("videoId");
  let trans=""
  await axios
    .get(
      `https://api.supadata.ai/v1/youtube/transcript?videoId=${videoId}`,{
        headers:{
            "x-api-key":process.env.TRANS_API,
        }
      }
    )
    .then((res) =>{
        const arr=res.data.content
        for(let i=0;i<arr.length;i++){
            trans+=arr[i].text
        }
    })
    // console.log(trans)
  return NextResponse.json({ message: trans });
}
