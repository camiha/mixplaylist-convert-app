import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api-client";

import { SpotifyAuthLink } from "../types";
export const getSpotifyAuthLink = (): Promise<SpotifyAuthLink> => {
  return apiClient.get("/api/v1/spotify/authorize");
};

export const useSpotifyAuthLink = () => {
  const { refetch } = useQuery({
    queryKey: ["auth-spotify-auth-link"],
    queryFn: () => getSpotifyAuthLink(),
    enabled: false,
  });

  return { refetch };
};
