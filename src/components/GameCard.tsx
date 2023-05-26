import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformListIcon from "./PlatformListIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformListIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
