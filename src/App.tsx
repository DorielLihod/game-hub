import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GanreList from "./components/GanreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Ganre } from "./hooks/useGanres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGanre, setSelectedGanre] = useState<Ganre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GanreList
            selectedGanre={selectedGanre}
            onSelectGanre={(ganre) => setSelectedGanre(ganre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack justifyContent="center">
          <PlatformSelector />
        </HStack>
        <GameGrid selectedGanre={selectedGanre} />
      </GridItem>
    </Grid>
  );
}

export default App;
