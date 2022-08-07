import React, { useEffect } from "react";
import classes from "./FooterOffices.module.css";
import useAxios from "../../hooks/use-http";
import CircularProgress from "@mui/material/CircularProgress";

const FooterOffices = () => {

  const { response, error, loading, fetchData } = useAxios();
  useEffect(() => {
    fetchData({
      url: "/offices/getAll",});
  }, [fetchData]);


  return (
    <ul className={classes.list}>
      {error && <p className="error-text">{error}</p>}
      {loading && <CircularProgress />}
      {response &&
        response.map(({ _id, title, address1, address2, address3 }) => {
          return (
            <li className={classes.list__item} key={_id}>
              <p className={classes.list__item_title}>{title}</p>
              <p className={classes.list__item_address}>{address1}</p>
              <p className={classes.list__item_address}>{address2}</p>
              <p className={classes.list__item_address}>{address3}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default FooterOffices;
