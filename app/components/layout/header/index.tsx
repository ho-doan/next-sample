"use client";
import {
  AppBar,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  iconSort: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div
      id="header"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar
        elevation={0}
        style={{
          background: "none",
        }}
      >
        <Toolbar
          style={{
            margin: "0 auto",
            width: "80%",
          }}
        >
          <Typography variant="h5" style={{ flexGrow: 1, color: "#ff0bbb" }}>
            Hello <span style={{ color: "#ff00aa" }}>app</span>
          </Typography>
          <IconButton className={classes.iconSort}>
            <SortIcon
              style={{
                color: "#fff",
                fontSize: "2rem",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          Welcome to <br /> Hello <span style={{ color: "#ff00aa" }}>app</span>
        </Typography>
        <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
            <ExpandMoreIcon
              style={{
                color: "#5AFF3D",
                fontSize: "4rem",
              }}
            />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
}
