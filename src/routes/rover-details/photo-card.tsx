import { Camera } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import _ from "lodash";
import { Rover } from "../../types";

export const PhotoCard = ({ photo }: { photo: Rover.Photo }) => {
  return (
    <>
      <Grid item key={_.uniqueId(String(photo.id))} xs={12} sm={6} md={4}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <CardMedia
              component="img"
              sx={{
                aspectRatio: "1",
              }}
              image={photo.img_src}
              alt={`${photo.rover.name} photo from camera ${photo.camera.name}`}
            />
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.secondary"
            >
              <Camera sx={{ marginRight: "4px" }} /> {photo.camera.full_name}
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
