import { NextResponse } from "next/server";

import {
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} from "@/config/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const refresh_token = searchParams.get("refresh_token") ?? "";

  const response = await fetch(`${SPOTIFY_AUTH_URL}/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
          "base64",
        ),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }).toString(),
  });

  if (!response.ok && response.status !== 200) {
    return NextResponse.json({
      status: response.status,
      error: response.statusText,
    });
  }

  // TODO: type definition
  const { access_token } = (await response.json()) as { access_token: string };

  return NextResponse.json({
    status: response.status,
    access_token,
  });
}
