import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformListIcon from "./PlatformListIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card width="300px" borderRadius={10} overflow="hidden">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformListIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
