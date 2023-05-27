import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGanres from "../hooks/useGanres";
import getCroppedImageUrl from "../services/image-url";

const GanreList = () => {
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
            <Text fontSize="lg">{ganre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GanreList;
