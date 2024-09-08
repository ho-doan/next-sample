"use client";
import { Box, Stack, Theme, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Colors } from "@/app/theme/colors";

const useStyles = makeStyles((theme: Theme) => ({}));

interface Props {
  title: string;
  children: React.ReactNode;
  paddingChild?: string | number;
}

export default function BoxCard(props: Props) {
  const classes = useStyles();

  return (
    <Box
      sx={{
        padding: "15px",
        minWidth: "100%",
        borderRadius: "10px",
        backgroundColor: Colors.background,
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
        }}
      >
        <Stack
          spacing={{ sx: 1, sm: 2 }}
          direction="column"
          useFlexGap
          style={{
            padding: props.paddingChild,
          }}
        >
          {props.children}
        </Stack>
      </Box>
    </Box>
  );
}
