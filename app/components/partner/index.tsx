"use client";
import {
  Box,
  CardMedia,
  Grid2,
  IconButton,
  keyframes,
  Theme,
} from "@mui/material";
import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import BoxCard from "../box-card";
import { Colors } from "@/app/theme/colors";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const aniBottom = keyframes`
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
    -webkit-filter: blur(12px) opacity(0.01%);
            filter: blur(12px) opacity(0.01%);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-filter: blur(0);
            filter: blur(0);
  }
`;

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
  cardImagePartner: {
    height: 138,
    width: 280,
    mixBlendMode: "color-dodge",
    filter: "brightness(0) invert(1)",
    "&:hover": {
      filter: "brightness(100%)",
      mixBlendMode: "multiply",
    },
  },
}));

interface Props {
  activate?: boolean;
}

export default function PartnerComponent(
  props: Props = {
    activate: false,
  }
) {
  const classes = useStyles();

  const refGrid = useRef<HTMLDivElement | null>(null);

  function onPre() {
    console.log(refGrid.current);

    refGrid.current?.scrollBy({
      left: -200,
    });
  }
  function onNext() {
    console.log(refGrid.current);

    refGrid.current?.scrollBy({
      left: 200,
    });
  }

  return (
    <div className={classes.rootPartner}>
      <center>
        <Box
          sx={{
            display: "flex",
            width: "70vw",
          }}
        >
          <BoxCard
            title="Đối tác chiến lược"
            color={Colors.transparent}
            paddingChild="32px 0px"
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                }}
              >
                <IconButton onClick={onPre}>
                  <NavigateBefore
                    fontSize="large"
                    style={{
                      transform: "scale(1.8)",
                      color: Colors.white,
                    }}
                  />
                </IconButton>
              </Box>
              <Box
                sx={{
                  border: "1px solid red",
                  borderRadius: "8px",
                  padding: "16px",
                  animation: props.activate
                    ? `${aniBottom} 0.7s ease-in both`
                    : null,
                }}
              >
                <Grid2
                  ref={refGrid}
                  spacing={2}
                  container
                  direction="column"
                  sx={{
                    overflow: "hidden",
                    height: "292px",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14].map((e) => (
                    <Grid2 key={`.h${e}`}>
                      <Paper style={{ backgroundColor: Colors.transparent }}>
                        <CardMedia
                          className={classes.cardImagePartner}
                          image="https://erasgroup.vn/pictures/catalog/about/partner/Viettinweb.png"
                          title="Contemplative Reptile"
                        />
                      </Paper>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
              <Box
                sx={{
                  padding: "20px",
                }}
              >
                <IconButton onClick={onNext}>
                  <NavigateNext
                    fontSize="large"
                    style={{
                      transform: "scale(1.8)",
                      color: Colors.white,
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </BoxCard>
        </Box>
      </center>
    </div>
  );
}
