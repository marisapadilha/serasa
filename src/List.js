import React from "react";

import { ContainerList, ListItem } from "./styles-list";

import { formatCurrency } from "./utils";

const List = ({ list }) => {
  return (
    <ContainerList>
      {list.map((item) => (
        <ListItem key={Math.random()}>
          <strong>{item.description}:</strong>
          <span>{formatCurrency(parseFloat(item.amount))}</span>
        </ListItem>
      ))}
    </ContainerList>
  );
};

export default List;
