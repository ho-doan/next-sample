"use client";
import {
  keyframes,
  Theme,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const textRight = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-filter: blur(0.01);
            filter: blur(0.01);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
    -webkit-filter: blur(12px) opacity(0%);
            filter: blur(12px) opacity(0%);
  }
`;
const textLeft = keyframes`
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            -webkit-filter: blur(12px) opacity(0%);
            filter: blur(12px) opacity(0%);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-filter: blur(0.01);
            filter: blur(0.01);
  }
`;

const useStyles = makeStyles((theme: Theme) => ({}));

interface Props {
  texts?: string[];
}

export default function TextPageView(props: Props) {
  const classes = useStyles();

  const [text, setText] = useState("none");
  const [textNext, setTextNext] = useState("none");
  const [roll, setRoll] = useState(false);

  useEffect(() => {
    if (props.texts && props.texts.length > 0) {
      setText(props.texts[0]);
    }
  }, []);

  useEffect(() => {
    if (props.texts && props.texts.length > 0) {
      const interval = setInterval(() => {
        let index = props.texts!.indexOf(text);
        let newIndex = index + 1;
        if (newIndex >= props.texts!.length) {
          newIndex = 0;
        }

        setRoll(!roll);
        setTextNext(text);
        setText(props.texts![newIndex]);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [text, roll]);

  return (
    <div>
      <Stack
        roll={roll}
        text={roll ? text : textNext}
        textNext={roll ? textNext : text}
      ></Stack>
    </div>
  );
}

type PropsStack = {
  text: string;
  textNext: string;
  roll: boolean;
};

function Stack(props: PropsStack) {
  const { roll } = props;
  const color = !roll ? "none" : undefined;
  return (
    <Typography
      // component="div"
      variant="h5"
      padding={0}
      style={{
        // height: 100,
        width: "80%",
        position: "relative",
      }}
    >
      <Typography
        sx={(theme) => ({
          backgroundColor: "none",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          animation: `${props.roll ? textLeft : textRight} 0.7s ease-in both`,
          color,
        })}
      >
        {props.text}
      </Typography>
      <Typography
        sx={(theme) => ({
          bgcolor: "none",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          animation: `${props.roll ? textRight : textLeft} 0.7s ease-in both`,
          color,
        })}
      >
        {props.textNext}
      </Typography>
    </Typography>
  );
}
