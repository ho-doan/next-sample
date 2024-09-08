"use client";
import { Box, Card, CardMedia, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import TextPageView from "./components/text-page-view";
import { PlaceToVisit } from "./components/place-to-visit";

const useStyles = makeStyles((theme: Theme) => ({
  rootWelcomeHome: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: 'url("/assets/bg.jpeg")',
    padding: "5% 5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

interface Props {}

export default function Home(props: Props) {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <PlaceToVisit />
      <div className={classes.rootWelcomeHome}>
        <Box
          sx={(theme) => ({
            width: "50%",
            padding: "5% 5%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <Typography variant="h6">
            Nền tảng tạo Landing Page nhỏ nhất Việt nam
          </Typography>
          <Typography variant="h6">Tạo landing page</Typography>
          <TextPageView
            texts={["Giới thiệu", "Ha la1", "Ha la2", "Ha la3"]}
          ></TextPageView>
        </Box>
        <Box
          sx={(theme) => ({
            width: "50%",
            padding: "5% 5%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "inline-block",
              position: "relative",
              paddingTop: "56.25%",
            }}
          >
            <CardMedia
              style={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
              image="http://localhost:3000/assets/bg.jpeg"
              title="Contemplative Reptile"
            />
          </Card>
        </Box>
      </div>
    </div>
  );
}
