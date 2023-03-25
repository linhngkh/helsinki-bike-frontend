import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SingleStation = (props) => {
  //create route parameters
  const { id } = useParams();
  const address = props.Osoite;
  const city = props.Kaupunki;

  return (
    <Card
      sx={{
        maxWidth: 700,
        display: "flex",
        margin: "50px auto",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="500"
          style={{ border: "none" }}
          src="https://maps.google.com/maps?hl=en&amp;q=${address}+${city}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total number of journeys starting from the station
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total number of journeys ending at the station
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleStation;
