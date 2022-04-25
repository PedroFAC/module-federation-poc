import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import useSWR from "swr";
import axios from "axios";

const fetcher = () =>
  axios
    .get(
      "https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2012&sort=asc"
    )
    .then((res) => res.data);

export default function PremierLeagueStanding() {
  const { data, error } = useSWR("/leagues/eng.1", fetcher);

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!data ? (
        <Spinner
          style={{
            alignSelf: "center",
            margin: "200px 0",
          }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <Card.Title>{`${data.data.name} : ${data.data.seasonDisplay}`}</Card.Title>
          <Card.Body>
            <Table striped bordered hover size="sm">
              {console.log(data.data)}
              <thead>
                <tr>
                  <th>Club</th>
                  <th>Points</th>
                  <th>Played</th>
                </tr>
              </thead>
              <tbody>
                {data.data.standings?.map(({ team, stats }) => (
                  <tr key={team.id}>
                    <td>{team.displayName}</td>
                    <td>{stats.find(({ name }) => name === "points").value}</td>
                    <td>
                      {stats.find(({ name }) => name === "gamesPlayed").value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </>
      )}
    </Card>
  );
}
