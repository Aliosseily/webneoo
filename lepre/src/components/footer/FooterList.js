import React from "react";
import classes from "./FooterList.module.css";

const list = [
  { id: 1, name: "e-shop" },
  { id: 2, name: "our story" },
  { id: 3, name: "our products" },
  { id: 4, name: "latest news" },
  { id: 5, name: "opportunities" },
  { id: 6, name: "contact us" },
];

const FooterList = () => {
  return (
    <ul className={classes.list}>
      {list.map(({id, name}) => {
        return <li  className={classes.list__item} key={id}>{name}</li>;
      })}
    </ul>
  );
};

export default FooterList;
