import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello/")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend React + Django API</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default App;
