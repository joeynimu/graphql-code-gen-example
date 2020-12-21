import { useQuery, gql } from '@apollo/client';

interface ShipInterface {
  name:string
home_port:string
image:string
}

const SPACE_X_LAUNCHES = gql`
  query GetSpaceXlaunches {
    launchesPast(limit: 10) {
      ships {
        name
        home_port
        image
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(SPACE_X_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data", data);
  return (<ul>{data.launchesPast.map((launch: any) => launch.ships.map((ship: ShipInterface) => <li>{ship.name}</li>))}</ul>)
}

export default App;
