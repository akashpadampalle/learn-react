import { useState } from "react";
import style from 'styled-components'

const List = style.ul`
 list-style: none;
 background: yellow;
`

interface ListItemProps {
  active: boolean;
}

const ListItem = style.li<ListItemProps>`
  background: ${ props => props.active ? 'cyan' : 'orange'};
  margin: 10px;
`

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
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selected === index}
            key={index}
            onClick={() => {
              setSelected(index);
              onSelectItem(item);
            }}   
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
