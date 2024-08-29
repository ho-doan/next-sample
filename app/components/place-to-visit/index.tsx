"use client";
import ImageCard from "../image-card";
import { useWindowPosition } from "@/app/hooks/useWindowPosition";
import places from "../static/places";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => {
  return {
    playToVisit: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
  };
});

function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition({ id: "header" });

  return (
    <div className={classes.playToVisit} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}

export { PlaceToVisit };
