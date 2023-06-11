import VList from "./component/VList";
import Element from "./component/Element";
import Data from "./data.json";
function App() {
  type Person = {
    name: string;
    email: string;
    country: string;
  };
  const data: Person[] = Data;

  return <VList length={500} data={data} />;
}

export default App;
