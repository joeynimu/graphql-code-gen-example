import { useGetLaunchesQuery } from "./generated/graphql";

function App() {
  const { data, loading, error } = useGetLaunchesQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ul>
      {data?.launchesPast?.map((launch) =>
        launch?.ships?.map((ship) => <li key={ship?.name}>{ship?.name}</li>)
      )}
    </ul>
  );
}

export default App;
