import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  API_URL,
  SPOTIFY_AUTH_STATE_KEY,
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URI,
} from "@/config/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const storedState = cookies().get(SPOTIFY_AUTH_STATE_KEY) || { value: null };

  if (code === null || state === null || state !== storedState.value) {
    return NextResponse.redirect(`${API_URL}/?error`);
  }

  cookies().set({
    name: SPOTIFY_AUTH_STATE_KEY,
    value: "",
  });

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
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      grant_type: "authorization_code",
    }).toString(),
  });

  if (!response.ok && response.status !== 200) {
    return NextResponse.redirect(`${API_URL}/?error`);
  }

  // TODO: type definition
  const { access_token, refresh_token } = (await response.json()) as {
    access_token: string;
    refresh_token: string;
  };

  return NextResponse.redirect(
    `${API_URL}/convert?access_token=${access_token}&refresh_token=${refresh_token}`,
  );
}
