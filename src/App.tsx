import {
  Box,
  Button,
  ButtonGroup,
  Flex,
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
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  ganre: Ganre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GanreList
            selectedGanre={gameQuery.ganre}
            onSelectGanre={(ganre) => setGameQuery({ ...gameQuery, ganre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={9}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelecetSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
