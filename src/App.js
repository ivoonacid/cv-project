import { useState } from "react";
import Educational from "./components/Educational";
import General from "./components/General";
import Practical from "./components/Practical";

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <h1>CV App</h1>
      <h3>General Information</h3>
      <General data={data} setData={setData} />
      <h3>School Information</h3>
      <Educational data={data} setData={setData} />
      <h3>Practical Information</h3>
      <Practical data={data} setData={setData} />
      <button onClick={() => console.log(data)}>Send Data</button>
    </div>
  );
}

export default App;
