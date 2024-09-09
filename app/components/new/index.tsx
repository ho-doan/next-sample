"use client";
import {
  Box,
  CardMedia,
  Grid2,
  Paper,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import BoxCard from "../box-card";
import { Colors } from "@/app/theme/colors";

const useStyles = makeStyles((theme: Theme) => ({
  rootNew: {
    height: "100%",
    width: "100vw",
    backgroundImage: 'url("/assets/bg.jpeg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImagePartner: {
    height: 180,
    width: "100%",
  },
}));

interface Props {
  activate?: boolean;
}

export default function NewComponent(
  props: Props = {
    activate: false,
  }
) {
  const classes = useStyles();

  return (
    <div className={classes.rootNew}>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          height: "70%",
        }}
      >
        <BoxCard
          title="Tin tức & sự kiên"
          color={Colors.transparent}
          paddingChild="32px 0px"
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
            }}
          >
            <Grid2
              columns={12}
              container
              spacing={2}
              // sx={{ display: "flex" }}
              direction="row"
            >
              <Grid2 size={5}>
                <Paper>
                  <Box>
                    <CardMedia
                      className={classes.cardImagePartner}
                      image="https://erasgroup.vn/pictures/catalog/tintuc/aerial-view-ho-chi-minh-city-skyline-skyscrapers-center-heart-business-downtown.jpg"
                    />
                    <Box
                      sx={{
                        padding: "10px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={(theme) => ({
                          color: Colors.background,
                          // animation: `${
                          //   props.roll ? textLeft : textRight
                          // } 0.7s ease-in both`,
                          // color,
                        })}
                      >
                        Thị trường bất dộng sản trầm lắng, cơ hội lớn cho nhà
                        đầu tư ....
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={(theme) => ({
                          color: Colors.background,
                          // animation: `${
                          //   props.roll ? textLeft : textRight
                          // } 0.7s ease-in both`,
                          // color,
                        })}
                      >
                        Thị trường bất dộng sản trầm lắng, cơ hội lớn cho nhà
                        đầu tư ....
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={(theme) => ({
                          padding:'15px 0px',
                          color: Colors.background,
                          // animation: `${
                          //   props.roll ? textLeft : textRight
                          // } 0.7s ease-in both`,
                          // color,
                        })}
                      >
                        Thị trường bất dộng sản trầm lắng, cơ hội lớn cho nhà
                        đầu tư ....
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid2>
              <Grid2 size={7}>
                <Paper style={{ height: "100%" }}>
                  <Box
                    sx={{
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      className={classes.cardImagePartner}
                      image="https://erasgroup.vn/pictures/catalog/tintuc/aerial-view-ho-chi-minh-city-skyline-skyscrapers-center-heart-business-downtown.jpg"
                    />
                  </Box>
                </Paper>
              </Grid2>
            </Grid2>
          </Box>
        </BoxCard>
      </Box>
    </div>
  );
}
