import React, { useEffect, useState } from "react";
type Person = {
  name: string;
  email: string;
  country: string;
};
type Props = {
  length: number;
  data: Person[];
};

function VList({ length, data }: Props) {
  const [scrollTop, setScrollTop] = useState(0);
  const listHeight = length;
  const start = Math.floor(scrollTop / listHeight);
  const end = start + listHeight;
  const visibleData = data.slice(start, end);
  const handleScroll = (event: React.UIEvent<HTMLElement>): void => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  return (
    <>
      <div
        id="list-container"
        style={{ height: "400px", overflowY: "auto" }}
        onScroll={handleScroll}
      >
        <div
          id="list-content"
          style={{
            position: "relative",
            marginTop: "2px",
            top: `${data.length * listHeight}`,
          }}
        >
          <div>
            {visibleData.map((item) => (
              <h1>{item.name}</h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default VList;
