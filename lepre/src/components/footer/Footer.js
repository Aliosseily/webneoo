import React from "react";
import classes from "./Footer.module.css";
import FooterList from "./FooterList";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterOffices from "./FooterOffices"

const Footer = () => {
  return (
    <div className={classes.container}>
      <FooterList />
      <div className={classes.container__connect}>
        <div className={classes.container__connect_title}>
          <span>connect with us</span>
        </div>
        <div className={classes.container__connect_email}>
          <div>
            <p>info@le-pre.com</p>
          </div>
          <div className={classes.container__connect_email_icons}>
            <span>@le-pre.com</span>
            <InstagramIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
        <div className={classes.container__subscribe}>
          <div className={classes.container__subscribe_title}>
            <p>subscribe to our newsletter</p>
          </div>
          <div className={classes.container__subscribe_description}>
            <p>
              Occasionly, you will receive updates about {"\n"} our latest
              products and news
            </p>
          </div>
          <form className={classes.container__form}>
            <input
              className={classes.container__input}
              type="text"
              placeholder="Enter your email"
            />
            <button className={classes.container__button} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <FooterOffices />
    </div>
  );
};

export default Footer;
