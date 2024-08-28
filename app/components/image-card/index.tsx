import {
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import { Place } from "../static/places";

type props = {
  place: Place;
  checked: boolean;
};

export default function ImageCard(props: props) {
  return (
    <Collapse in={props.checked} {...(props.checked ? { timeout: 1000 } : {})}>
      <Card
        style={{
          maxWidth: 645,
          background: "rgba(0,0,0,0.5)",
          margin: "20px",
        }}
      >
        <CardMedia
          style={{
            height: 440,
          }}
          image={props.place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            style={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#fff",
            }}
          >
            {props.place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              fontFamily: "Nunito",
              fontSize: "1.1rem",
              color: "#ddd",
            }}
          >
            {props.place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
