import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
// const youtubePlaylistUrl=`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.YT_AUTH} `
export async function GET(request:NextRequest){
    const params=request.nextUrl.searchParams
    // console.log(params.get("playlistId"))
    const playlistId=params.get("playlistId")
    const ytVideos=await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${process.env.YT_AUTH}`).then((res)=>res.data)
    return NextResponse.json({items:ytVideos.items})
}