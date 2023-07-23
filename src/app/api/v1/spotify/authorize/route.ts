import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  SPOTIFY_AUTH_STATE_KEY,
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
} from "@/config/constants";
import { generateRandomString, setUrlParams } from "@/utils";

export async function GET() {
  const scope = "user-read-private user-read-email";
  const state = generateRandomString(16);

  cookies().set({
    name: SPOTIFY_AUTH_STATE_KEY,
    value: state,
  });

  const url = setUrlParams(`${SPOTIFY_AUTH_URL}/authorize`, {
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    redirect_uri: SPOTIFY_REDIRECT_URI,
    state,
    scope,
  });

  return NextResponse.json({
    href: url.href,
  });
}
