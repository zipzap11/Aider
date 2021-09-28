import React from "react";
import classes from "./BannerCard.module.css";
import Button from "../../Components/Button/Button";

function BannerCard({ title, content, action }) {
  return (
    <div className={classes.bannerCard}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button className={classes.btn} theme="dark">
        {action}
      </Button>
    </div>
  );
}

export default BannerCard;
