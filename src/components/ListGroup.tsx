import { useState } from "react";



interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul style={{listStyle : 'none'}}>
        {items.map((item, index) => (
          <li style={{
            background: 'orange', 
            margin: 10
          }}
            key={index}
            onClick={() => {
              setSelected(index);
              onSelectItem(item);
            }}   
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
