import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleStation = () => {
  //create route parameters
  const { id } = useParams();
  const [center, setCenter] = useState([50.879, 4.6997]);
  const [zoom, setZoom] = useState(11);

  return (
    <Card
      sx={{
        maxWidth: 400,
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <CardContent>
        <Map
          provider={osm}
          height={500}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SingleStation;
