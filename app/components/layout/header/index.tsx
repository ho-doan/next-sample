"use client";
import {
  AppBar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@mui/styles";
import { Colors } from "@/app/theme/colors";

const useStyles = makeStyles((theme: Theme) => ({
  iconSort: {},
  welcomeText: {
    textAlign: "center",
    fontSize: "3rem",
    color: theme.typography.h5.color,
  },
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Header(props: Props) {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          <IconButton className={classes.iconSort} onClick={handleDrawerToggle}>
            <SortIcon
              style={{
                color: "#fff",
                fontSize: "2rem",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box
            sx={{
              backgroundColor: Colors.background,
              height: "100vh",
            }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              component="div"
              sx={{
                my: 2,
                display: "block",
                flexGrow: 1,
              }}
            >
              MUI
            </Typography>
            <Divider />
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary="Home"></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary="About"></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary="About US"></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={30}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" className={classes.welcomeText}>
          Welcome to <br /> Hello <span style={{ color: "#ff00aa" }}>app</span>
        </Typography>
        <Scroll to="place-to-visit" smooth={true}>
          <center>
            <IconButton>
              <ExpandMoreIcon
                style={{
                  color: "#5AFF3D",
                  fontSize: "4rem",
                }}
              />
            </IconButton>
          </center>
        </Scroll>
      </Collapse>
    </div>
  );
}
