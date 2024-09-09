"use client";
import { Box, Stack, Theme, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "@/app/theme/colors";

const useStyles = makeStyles((theme: Theme) => ({}));

interface Props {
  title?: string;
  children?: React.ReactNode;
  paddingChild?: string | number;
  spacing?: number;
  animation?: string;
  color?: string;
}
export default function BoxCard(
  props: Props = {
    spacing: 0,
  }
) {
  const classes = useStyles();

  return (
    <Box
      sx={{
        padding: "15px",
        width: "100%",
        display: "table-row",
        borderRadius: "10px",
        backgroundColor: props.color || Colors.background,
        animation: props.animation,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "inline-block",
          ":after": {
            width: "70px",
            height: "2px",
            content: "initial",
            backgroundColor: "#003333",
          },
        }}
      >
        {props.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Stack
          spacing={props.spacing}
          direction="column"
          useFlexGap
          style={{
            padding: props.paddingChild,
            width: "100%",
            display: "flex",
          }}
        >
          {props.children}
        </Stack>
      </Box>
    </Box>
  );
}
