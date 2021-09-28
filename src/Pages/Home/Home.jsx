import React from "react";
import Button from "../../Components/Button/Button";
import { ReactComponent as Community } from "./community.svg";
import classes from "./Home.module.css";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import { bannerData } from "./data";
import BannerCard from "./BannerCard";
import Quote from "./Quote";

function Home() {
  return (
    <Container>
      <div className={classes.contain}>
        <div className={classes.left}>
          <h2>Join our community</h2>
          <ul>
            <li>Start Writing blogs</li>
            <li>Ask some question</li>
            <li>Search for jobs</li>
          </ul>
          <Button className={classes.btn} theme="dark">
            get started
          </Button>
        </div>
        <div className={classes.right}>
          <Community />
        </div>
      </div>
      <Card className={classes.card}>
        <h2>Why should i use Aider ?</h2>
        <div className={classes.flex}>
          {bannerData.map((data) => {
            return (
              <BannerCard
                title={data.title}
                content={data.content}
                action={data.action}
              />
            );
          })}
        </div>
      </Card>
      <Quote />
    </Container>
  );
}

export default Home;
