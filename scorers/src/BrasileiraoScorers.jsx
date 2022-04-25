import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  CircularProgress,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";

const fetcher = () =>
  axios
    .get("http://api.football-data.org/v2/competitions/BSA/scorers", {
      headers: {
        "X-Auth-Token": "e06aa8facedb47bc8386cb1c739dd737",
      },
    })
    .then((res) => res.data);
export default function BrasileiraoScorers() {
  const { isLoading, data } = useQuery("brasileirao scorers", fetcher);

  if (isLoading) {
    return <CircularProgress isIndeterminate color="green.300" />;
  }

  return (
    <TableContainer>
      <Table style={{ width: "100%" }} variant="simple">
        <TableCaption>Brasileirao Top Scorers</TableCaption>
        <Thead>
          <Tr>
            <Th>Player</Th>
            <Th>Club</Th>
            <Th isNumeric>Goals</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.scorers?.map(({ player, team, numberOfGoals }) => (
            <Tr>
              <Td>{player.name}</Td>
              <Td>{team.name}</Td>
              <Td>{numberOfGoals}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
