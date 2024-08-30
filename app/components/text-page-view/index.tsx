"use client";
import { Slide, Theme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({}));

interface Props {
  texts?: string[];
}

export default function TextPageView(props: Props) {
  const classes = useStyles();

  const [text, setText] = useState("none");
  const [roll, setRoll] = useState(false);

  useEffect(() => {
    if (props.texts && props.texts.length > 0) {
      setText(props.texts[0]);
    }
  }, []);

  useEffect(() => {
    if (props.texts && props.texts.length > 0) {
      console.log("create interval");
      const interval = setInterval(() => {
        let index = props.texts!.indexOf(text);
        let newIndex = index + 1;
        if (newIndex >= props.texts!.length) {
          newIndex = 0;
        }

        setTimeout(() => {
          setRoll(false);
        }, 500);

        setTimeout(() => {
          setText(props.texts![newIndex]);
        }, 750);

        setTimeout(() => {
          setRoll(true);
        }, 1000);

        console.log("interval", text, index, newIndex, roll);
      }, 4000);

      console.log("ok interval");
      return () => clearInterval(interval);
    }
  }, [text, roll]);

  return (
    <div>
      <Slide
        direction="right"
        in={roll}
        {...(roll ? { timeout: 1000 } : { timeout: 1500 })}
      >
        <Typography variant="h6">{text}</Typography>
      </Slide>
    </div>
  );
}
