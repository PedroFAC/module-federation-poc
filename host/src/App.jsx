import React from "react";
import ReactDOM from "react-dom";
import BrasileiraoScorers from "scorers/BrasileiraoScorers";
import PremierLeagueStanding from "standings/PremierLeagueStanding";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

const client = new QueryClient();
const App = () => (
  <ChakraProvider>
    <QueryClientProvider client={client}>
      <h1>This is the Host app</h1>
      <h3>Brasileirão Top scorers from scores app:</h3>
      <BrasileiraoScorers />
      <h3>Premier League standings from standings app:</h3>
      <PremierLeagueStanding />
    </QueryClientProvider>
  </ChakraProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
