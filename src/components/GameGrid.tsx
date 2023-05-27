import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Ganre } from "../hooks/useGanres";

interface Props {
  selectedGanre: Ganre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGanre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGanre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
