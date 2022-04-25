import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import BrasileiraoScorers from "./BrasileiraoScorers";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const App = () => (
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Heading>Top Football Scorers</Heading>
      <BrasileiraoScorers />
    </QueryClientProvider>
  </ChakraProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
