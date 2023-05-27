import { useState } from "react";
import './ListGroup.css';

interface Props {
  items: string[];
  heading: string;
  // function
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index == selected ? "list-group-item active" : "list-group-item item"
            }
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
