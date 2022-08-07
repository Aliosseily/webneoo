import React, { Fragment, useEffect } from "react";
import classes from "./OurProducts.module.css";

import Product from "./Product";
import useAxios from "../../hooks/use-http";
import { CircularProgress } from "@mui/material";

const OurProducts = () => {
  // const [products, setProducts] = useState([]);

  const { response, error, loading, fetchData } = useAxios();

  useEffect(() => {
    fetchData({ url: "/products/getAll" });
  }, [fetchData]);

  return (
    <Fragment>
      <div className={classes.container__header}>
        <p>you might want to see {"\n"} our products selection</p>
      </div>

      <div className={classes.container}>
        {error && <p className="error-text">{error}</p>}
        {loading && <CircularProgress />}
        {response &&
          response.map((item) => (
            <Product key={item._id}
              image={require(`../../uploads/${item.prodImage}`)}
              alt={item.alt}
              text={item.text.replace(" ", `\n`)}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default OurProducts;
