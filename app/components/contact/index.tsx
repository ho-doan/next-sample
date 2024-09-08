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
import StackLayout from "../stack-layout";

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
        <StackLayout center={false} direction="column">
          <Typography
            variant="h3"
            sx={{
              paddingLeft: "24px",
              paddingBottom: "24px",
            }}
          >
            Liên hệ với chúng tôi
          </Typography>
          <StackLayout center={false}>
            <Box
              sx={(theme) => ({
                display: "flex",
                width: "50%",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              })}
            >
              <Stack
                spacing={1}
                direction="column"
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                  alignItems: "stretch",
                  display: "flex",
                  width: "100%",
                }}
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
                <BoxCard
                  title="Mạng xã hội"
                  spacing={2}
                  paddingChild="35px 20px"
                >
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
                width: "45%",
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
                sx={{
                  flexWrap: "wrap",
                  alignItems: "self-start",
                  display: "flex",
                  width: "100%",
                }}
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
          </StackLayout>
        </StackLayout>
      </div>
    </div>
  );
}
