import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
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


const useGames = (selectedGanre: Ganre | null) => 
  useData<Game>('/games', {params: {genres: selectedGanre?.id}},[selectedGanre?.id,])

export default useGames;