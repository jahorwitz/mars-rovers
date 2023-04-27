import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Spinner } from "../../components";
import { useRovers } from "../../hooks";
import { RoverCard } from "./rover-card";

export const Home = () => {
  const { rovers, loading, error } = useRovers();

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
          >
            Mars Rovers
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{ py: 8, display: "flex", justifyContent: "center" }}
        maxWidth="lg"
      >
        {error ? (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something went wrong while loading the rover data. Please try again
            later
          </Typography>
        ) : loading ? (
          <Spinner />
        ) : (
          <Grid container spacing={4}>
            {rovers.map((rover) => (
              <RoverCard rover={rover} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
