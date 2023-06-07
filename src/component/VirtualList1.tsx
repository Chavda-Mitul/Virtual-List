import List from "rc-virtual-list";
import data from "../data.json";

function VirtualList1() {
  return (
    <div
      style={{
        border: "3px solid red",
        width: "400px",
        textAlign: "center",
        margin: "30px auto",
      }}
    >
      <List data={data} height={600} itemHeight={40} itemKey="id">
        {(obj, idx) => (
          <div key={idx}>
            <h3>Name: {obj.name}</h3>
            <p>Country: {obj.country}</p>
            <p>Email: {obj.email}</p>
          </div>
        )}
      </List>
    </div>
  );
}

export default VirtualList1;
