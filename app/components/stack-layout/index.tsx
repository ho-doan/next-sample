"use client";
import { Stack, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({}));

interface Props {
  children?: React.ReactNode | undefined;
  center: boolean;
  direction?: "row" | "column";
}

export default function StackLayout(
  props: Props = {
    center: true,
    direction: "row",
  }
) {
  const classes = useStyles();

  return (
    <Stack
      spacing={1}
      direction={props.direction}
      margin={0}
      useFlexGap
      sx={{
        display: "flex",
        width: "100%",
        margin: "0px",
        flexWrap: "wrap",
        padding: 0,
        alignItems: "stretch",
        justifyContent: props.center ? "center" : "space-between",
      }}
    >
      {props.children}
    </Stack>
  );
}
