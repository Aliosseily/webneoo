import React from "react";
import classes from "./NewsCard.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";

const NewsCard = ({
  image,
  date,
  date_title,
  title,
  caption,
  position,
  read_more,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.container__image}>
        <img src={image} alt="header" style={{ objectPosition: position }} />
      </div>
      <div className={classes.container__description}>
        <div className={classes.container__text}>
          <div>
            <span className={classes.container__text_date}>{date}</span>
            <span className={classes.container__text_date_text}>
              - {date_title}
            </span>
          </div>
          <div className={classes.container__text_title}>
            <span>{title.replaceAll("|", `\n`)}</span>
          </div>
          <div className={classes.container__text_caption}>
            <span>{caption.replaceAll("|", `\n`)}</span>
          </div>
        </div>
        <div className={classes.container__footer}>
          {read_more && (
            <span className={classes.container__footer_icon}>
              <AddIcon /> Read more
            </span>
          )}
          <span className={classes.container__footer_icon}>
            <ThumbUpOffAltIcon /> Like
          </span>
          <span className={classes.container__footer_icon}>
            <ShareIcon /> Share
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
