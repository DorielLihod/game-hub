import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGanres, { Ganre } from "../hooks/useGanres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGanre: (ganre: Ganre) => void;
}
const GanreList = ({ onSelectGanre }: Props) => {
  const { data, isLoading, error } = useGanres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List>
      {data.map((ganre) => (
        <ListItem key={ganre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(ganre.image_background)}
            />
            <Button
              onClick={() => onSelectGanre(ganre)}
              fontSize="lg"
              variant="link"
            >
              {ganre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GanreList;
