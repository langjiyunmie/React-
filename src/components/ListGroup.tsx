import { Fragment, useState } from "react";

interface Props {
    items : string[];
    heading: string;
    onselect:(item: string) => void
};


function ListGroup({items,heading,onselect}:Props) {
  
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const handleSelectItem = (item : string) => {
    console.log(item);
  }
 
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
                setSelectedIndex(index);
                onselect(item)
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
