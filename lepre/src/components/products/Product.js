import React from 'react'
import classes from "./Product.module.css"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Product = ({image, alt, text}) => {
  return (
        <div className={classes.container__image}>
          <img src={image} alt={alt} />
          <div className={classes.container__image_footer}>
            <div className={classes.container__image_footer_text}>
              <span>{text}</span>
            </div>
            <div className={classes.container__image_footer_circle}>
              <KeyboardArrowRightIcon sx={{ fontSize: "3rem" }} />
            </div>
          </div>
        </div>
  )
}

export default Product

