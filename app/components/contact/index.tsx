"use client";
import { Box, Stack, Theme, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";
import { Colors } from "@/app/theme/colors";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import BoxCard from "../box-card";

const useStyles = makeStyles((theme: Theme) => ({
  rootContact: {
    height: "100%",
    width: "100vw",
    background: 'url("/assets/bg.jpeg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContact: {
    paddingTop: "60px",
    justifyContent: "center",
    alignItems: "center",
    display: "table-column",
    alignContent: "center",
    justifyItems: "center",
    width: "70%",
  },
  contentRight: {
    padding: "15px",
    minWidth: "30%",
    borderRadius: "10px",
    backgroundColor: Colors.background,
    [theme.breakpoints.down("sm")]: {
      minWidth: "80%",
    },
  },
}));

interface Props {}

export default function ContactComponent(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.rootContact}>
      <div className={classes.contentContact}>
        <Typography variant="h3">Liên hệ với chúng tôi</Typography>
        <Stack
          spacing={1}
          direction="row"
          useFlexGap
          sx={{
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              minWidth: "40%",
              [theme.breakpoints.down("sm")]: {
                minWidth: "100%",
              },
            })}
          >
            <Stack
              spacing={1}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap", alignItems: "self-start" }}
            >
              <BoxCard title="Trụ sở">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />
                  <Typography variant="h6">Trụ sở</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />
                  <Typography variant="h6">Trụ sở</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MailIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />
                  <Typography variant="h6">Trụ sở</Typography>
                </Box>
              </BoxCard>
              <BoxCard title="Mạng xã hội" paddingChild="35px 20px">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />

                  <PlaceIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />

                  <PlaceIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />
                </Box>
              </BoxCard>
            </Stack>
          </Box>
          <Box
            sx={(theme) => ({
              minWidth: "30%",
              display: "flex",
              [theme.breakpoints.down("sm")]: {
                minWidth: "100%",
              },
            })}
          >
            <Stack
              spacing={1}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap", alignItems: "self-start" }}
            >
              <BoxCard title="Tuyển dụng">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />
                  <Typography variant="h6">Trụ sở</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon
                    sx={{
                      color: "#a4ce39",
                    }}
                  />
                  <Typography variant="h6">Trụ sở</Typography>
                </Box>
              </BoxCard>
              <BoxCard title="Liên kết nhanh">
                <Typography variant="h6">Trụ sở</Typography>
                <Typography variant="h6">Trụ sở</Typography>
                <Typography variant="h6">Trụ sở</Typography>
                <Typography variant="h6">Trụ sở</Typography>
              </BoxCard>
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
