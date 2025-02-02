import { NextResponse } from "next/server";
import axios from "axios";
import { google } from "googleapis";
export async function GET() {
  await axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${process.env.YT_AUTH}`
    )
    .then((res) => console.log(res.data));
  //developers.google.com/youtube/v3/docs/playlists/list?apix=true&apix_params=%7B%22part%22%3A%22snippet%2CcontentDetails%22%2C%22mine%22%3A%22true%22%7D#try-it
  https: return NextResponse.json({ message: "hello world" });
}
