import React from "react";
import Button from "../../Components/Button/Button";
import { ReactComponent as Community } from "./forum.svg";
import classes from "./Home.module.css";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import { bannerData } from "./data";
import BannerCard from "./BannerCard";

function Home() {
  return (
    <Container>
      <Card className={classes.cardBanner}>
        <div className={classes.contain}>
          <div className={classes.left}>
            <h2>Join our community</h2>
            <p>
              Ask question or answer some, help other by writing blogs and
              Search for jobs and get hired.
            </p>
            <Button className={classes.btn} theme="dark">
              get started
            </Button>
          </div>
          <div className={classes.right}>
            <Community
              style={{ color: "#333533" }}
              className={classes.bannerIcon}
            />
          </div>
        </div>
      </Card>
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
    </Container>
  );
}

export default Home;
