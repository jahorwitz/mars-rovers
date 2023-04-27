import { Camera } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import { DateTime } from "luxon";
import pluralize from "pluralize";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rover } from "../../types";

const CardPopoverButton = ({ cameras }: { cameras: Rover.Camera[] }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button size="small" aria-describedby={id} onClick={handleClick}>
        <Camera sx={{ marginRight: "4px" }} /> {cameras.length} Cameras
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List dense>
          {cameras.map((camera) => (
            <ListItem key={_.uniqueId(camera.name)}>
              <ListItemIcon>
                <Camera />
              </ListItemIcon>
              <ListItemText primary={camera.name} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export const RoverCard = ({ rover }: { rover: Rover }) => {
  return (
    <>
      <Grid item key={_.uniqueId(rover.name)} xs={12} sm={6} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {rover.name}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Launched:</span>
              {DateTime.fromFormat(rover.launch_date, "yyyy-MM-dd").toFormat(
                "MMM dd, yyyy"
              )}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ display: "flex", justifyContent: "space-between" }}
              gutterBottom
            >
              <span>Landed:</span>
              {DateTime.fromFormat(rover.landing_date, "yyyy-MM-dd").toFormat(
                "MMM dd, yyyy"
              )}
            </Typography>
            <Typography color="text.secondary">
              {rover.total_photos.toLocaleString("en-US")}{" "}
              {pluralize("Photo", rover.total_photos)}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <CardPopoverButton cameras={rover.cameras} />

            <Link to={`/${rover.name.toLowerCase()}`}>
              <Button size="small">View Details</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
