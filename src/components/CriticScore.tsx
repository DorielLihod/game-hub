import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize={15}
      paddingX={2}
      borderRadius={4}
      colorScheme={score >= 75 ? "green" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
