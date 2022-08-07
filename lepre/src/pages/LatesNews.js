import React, { useEffect } from "react";
import CustomBreadcrumbs from "../components/UI/CustomBreadcrumb";
import NewsCard from "../components/news/NewsCard";
import OurProducts from "../components/products/OurProducts";
import classes from "./LatestNews.module.css";
import ExploreInsta from "../components/insta/ExploreInsta";
import useAxios from "../hooks/use-http";
import CircularProgress from "@mui/material/CircularProgress";

const data = [{ name: "HOME", href: "/" }, { name: "LATEST NEWS" }];
const LatestNews = () => {
  const {
    response: news,
    error: newsError,
    loading: newsLoading,
    fetchData: fetchNewsData,
  } = useAxios();
  const {
    response: instaImages,
    error: instaError,
    loading: instaLoading,
    fetchData: fetchInstaData,
  } = useAxios();

  useEffect(() => {
    fetchNewsData({ url: "/news/getAll" });
  }, [fetchNewsData]);

  useEffect(() => {
    fetchInstaData({ url: "/insta/getAll" });
  }, [fetchInstaData]);

  return (
    <div className={classes.latest}>
      <CustomBreadcrumbs data={data} />
      <span className={classes.latest__header}>LATEST NEWS</span>
      {newsError && <p className="error-text">{newsError}</p>}
      {newsLoading && <CircularProgress />}
      {news &&
        news.map((item) => (
          <div key={item._id}>
            <NewsCard
              image={require(`../uploads/${item.productImage}`)}
              date={item.date}
              date_title={item.date_title}
              title={item.title}
              caption={item.caption}
              position={item.position}
              read_more={item.read_more}
            />
            <div className={classes.line}></div>
          </div>
        ))}
      <OurProducts />
      {instaError && <p className="error-text">{instaError}</p>}
      {instaLoading && <CircularProgress />}
      {instaImages && <ExploreInsta instaImages={instaImages} />}
    </div>
  );
};

export default LatestNews;
