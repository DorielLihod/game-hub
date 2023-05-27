import useData from "./useData";
import { Ganre } from "./useGanres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform} [];
  metacritic: number;
}


const useGames = (selectedGanre: Ganre | null, selectedPlatform: Platform | null) => 
  useData<Game>('/games', {
    params: {
      genres: selectedGanre?.id, 
      platforms: selectedPlatform?.id
    }},
    [selectedGanre?.id, selectedPlatform?.id]);

export default useGames;