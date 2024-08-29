"use client";
import { Box, Card, CardMedia, Theme, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

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
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

interface Props {}

export default function Home(props: Props) {
  const classes = useStyles();

  return (
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
        <Typography variant="h6">Giới thiệu</Typography>
      </Box>
      <Box
        sx={(theme) => ({
          width: "50%",
          display: "inline-block",
          position: "relative",
          padding: "5% 5%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        })}
      >
        <div
          style={{
            marginTop: "50%",
          }}
        >
          <Card
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <CardMedia
              style={{
                width: "100%",
                height: "100%",
              }}
              image="http://localhost:3000/assets/bg.jpeg"
              title="Contemplative Reptile"
            />
          </Card>
        </div>
      </Box>
    </div>
  );
}
