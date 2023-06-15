import VList from "./component/VList";
import VirtualList1 from "./component/VirtualList1";
import Element from "./component/Element";
import Data from "./data.json";
import FPSStats from "react-fps-stats";
function App() {
  type Person = {
    name: string;
    email: string;
    country: string;
  };
  const data: Person[] = Data;

  return (
    <>
      <div>
        <h2 style={{ marginTop: 60 }}>Minimal example using react-fps-stats</h2>
        <FPSStats />
      </div>
      <div>
        <VList data={data} />
      </div>
      <div>
        <VirtualList1 />
      </div>
    </>
  );
}

export default App;
