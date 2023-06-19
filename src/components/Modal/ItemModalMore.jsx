import React from "react";
import { ItemBtn } from "../Categories/CategoryItem/CategoryItem.style";
import { ItemMore } from "./ItemModalMore.stytle";

export const ItemModalMore = () => {
  return (
    <ItemMore>
      <ItemBtn button="button">Edit</ItemBtn>
      <ItemBtn button="button">Delete</ItemBtn>
    </ItemMore>
  );
};
