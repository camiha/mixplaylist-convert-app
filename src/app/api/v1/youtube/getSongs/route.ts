import { NextResponse } from "next/server";

import { YOUTUBE_API_KEY } from "@/config/constants";

import { YoutubeData } from "./types";
const ENDPOINT = "https://www.googleapis.com/youtube/v3/videos";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId") ?? "";
  const response = await fetch(
    `${ENDPOINT}?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`,
  );
  // TODO: type refactor
  const data = (await response.json()) as YoutubeData;

  try {
    const targetItem = data.items.find((item) => {
      return item.id === videoId;
    });

    if (!targetItem) {
      throw new Error("targetItem is not found");
    }

    const { description } = targetItem.snippet;
    const lines = description.split("\n");
    const songLines = lines.filter((line) => line.charAt(0).match(/[0-9]/));

    const songs = songLines.map((songLine) => {
      const splitStr = songLine.split(" ");
      const [_timeStamp, ...songInfo] = splitStr;
      const joinedSongInfo = songInfo.join(" ");
      const info = joinedSongInfo.split(/[\u2013\-:]/).map((str) => str.trim());
      return {
        artist: info[0] ? info[0].trim() : "",
        title: info[1] ? info[1].trim() : "",
        searchString: info.join(" "),
      };
    });

    return NextResponse.json({
      songs,
    });
  } catch (error) {
    return NextResponse.json({
      songs: [],
    });
  }
}
