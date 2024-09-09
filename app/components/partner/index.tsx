"use client";
import { Box, CardMedia, Grid2, List, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import BoxCard from "../box-card";
import StackLayout from "../stack-layout";

const useStyles = makeStyles((theme: Theme) => ({
  rootPartner: {
    height: "100%",
    width: "100vw",
    backgroundImage: 'url("/assets/bg.jpeg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {}

export default function PartnerComponent(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.rootPartner}>
      <center>
        <Box
          sx={{
            display: "flex",
            width: "60%",
          }}
        >
          <BoxCard title="Đối tác chiến lược" color="#0000">
            <Box
              sx={{
                border: "1px solid red",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Grid2
                spacing={2}
                container
                direction="column"
                sx={{
                  overflow: "hidden",
                  height: "292px",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14].map((e) => (
                  <Grid2>
                    <Paper>
                      <CardMedia
                        style={{
                          height: 138,
                          width: 280,
                        }}
                        image="https://erasgroup.vn/pictures/catalog/about/partner/Viettinweb.png"
                        title="Contemplative Reptile"
                      />
                    </Paper>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </BoxCard>
        </Box>
      </center>
    </div>
  );
}
