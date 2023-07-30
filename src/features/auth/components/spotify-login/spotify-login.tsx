import { useRouter } from "next/navigation";

import { Button } from "@/components/button";

import { useSpotifyAuthLink } from "../../api/spotify-auth-link";

export const SpotifyLogin = () => {
  const router = useRouter();
  const { refetch } = useSpotifyAuthLink();

  const handleClick = async () => {
    const { data } = await refetch();
    if (!data) return;

    router.push(data.href);
  };

  return (
    <Button fill={false} onClick={handleClick} variant="attention">
      {"login =>"}
    </Button>
  );
};
