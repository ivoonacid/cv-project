import { useState } from "react";
import Educational from "./components/Educational";
import General from "./components/General";
import Practical from "./components/Practical";

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <General data={data} setData={setData} />
      <Educational data={data} setData={setData} />
      <Practical data={data} setData={setData} />
      <button onClick={() => console.log(data)}>Send Data</button>
    </div>
  );
}

export default App;
