import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {

  const [selected, setSelected] = useState(-1);


  return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
          {items.map((item, index) => <li className={(index == selected) ? 'list-group-item active' : 'list-group-item'} key={index} onClick={()=>{setSelected(index)}}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;


