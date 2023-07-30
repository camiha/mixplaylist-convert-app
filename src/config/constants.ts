// Next

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
export const API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === "true";
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const IS_SERVER = typeof window === "undefined";

// Spotify
// NOTE: 要素が増えた場合は型安全に扱う
export const SPOTIFY_AUTH_URL = process.env
  .NEXT_PUBLIC_SPOTIFY_AUTH_URL as string;
export const SPOTIFY_API_URL = process.env
  .NEXT_PUBLIC_SPOTIFY_API_URL as string;
export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
export const SPOTIFY_CLIENT_SECRET = process.env
  .SPOTIFY_CLIENT_SECRET as string;
export const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI as string;
export const SPOTIFY_AUTH_STATE_KEY = process.env
  .SPOTIFY_AUTH_STATE_KEY as string;

// Youtube
export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY as string;
