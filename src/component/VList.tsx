import { useEffect, useState, useRef } from "react";

type Person = {
  name: string;
  email: string;
  country: string;
};
type Props = {
  data: Person[];
};

function VList({ data }: Props) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemHeight = 30;
  const containerHeight = data.length;
  const visibleItemCount = Math.ceil(containerHeight / itemHeight);

  const start = Math.floor(scrollTop / itemHeight);
  const end = start + visibleItemCount;
  const visibleData = data.slice(start, end);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTop;
    }
  }, [scrollTop]);
  console.log(visibleData);

  return (
    <div
      id="list-container"
      style={{
        height: `${containerHeight}px`,
        overflowY: "auto",
        width: "500px",
        margin: "auto",
      }}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <div
        id="list-content"
        style={{ position: "relative", top: `${start * itemHeight + 20}px` }}
      >
        {visibleData.map((item, idx) => (
          <div key={idx} style={{ border: "1px solid black" }}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VList;
