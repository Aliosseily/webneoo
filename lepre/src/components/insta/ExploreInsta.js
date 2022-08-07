import React from "react";
import classes from "./ExploreInsta.module.css";
import CustomSwiper from "../UI/CustomSwiper"
const ExploreInsta = ({instaImages}) => {
  return (
    <div className={classes.container}>
      <div  className={classes.container__header} >
        <p>Explore sips of our wolrd on {"\n"} Instagram</p>
      </div>
        <div>
            <CustomSwiper instaImages={instaImages}/>
        </div>
    </div>
  );
};

export default ExploreInsta;
