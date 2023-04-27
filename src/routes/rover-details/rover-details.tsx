import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import _ from "lodash";
import { DateTime } from "luxon";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../../components";
import { useRovers, useSearchPhotos } from "../../hooks";
import { Rover } from "../../types";
import { PhotoCard } from "./photo-card";

export const RoverDetails = () => {
  let { name } = useParams();
  const { rovers, loading: loadingRoverInfo } = useRovers();
  const { searchPhotos, loading: loadingSearchResults } = useSearchPhotos();
  const [photos, setPhotos] = useState<Rover.Photo[]>([]);
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);

  const maxDate = useMemo((): DateTime | undefined => {
    const rover = rovers.find((x) => x.name === _.capitalize(name));
    return rover
      ? DateTime.fromFormat(rover.max_date, "yyyy-MM-dd")
      : undefined;
  }, [rovers]);

  const minDate = useMemo((): DateTime | undefined => {
    const rover = rovers.find((x) => x.name === _.capitalize(name));
    return rover
      ? DateTime.fromFormat(rover.landing_date, "yyyy-MM-dd")
      : undefined;
  }, [rovers]);

  const handleDateChange = useCallback(
    (date: DateTime | null) => {
      setSelectedDate(date);
      if (name && date) {
        searchPhotos(name, date.toFormat("yyyy-MM-dd")).then((data) =>
          setPhotos(data.photos)
        );
      } else {
        setPhotos([]);
      }
    },
    [searchPhotos, name]
  );

  useEffect(() => {
    if (selectedDate) {
      handleDateChange(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (maxDate) {
      setSelectedDate(maxDate);
    }
  }, [maxDate]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 4,
          pl: 4,
        }}
      >
        <Link to="/">
          <Button>Back to Rovers</Button>
        </Link>
      </Box>

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
            Explore Photos from {_.capitalize(name)}
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="lg"
      >
        {loadingRoverInfo ? (
          <Spinner />
        ) : (
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker
              label="Select a Day"
              minDate={minDate}
              maxDate={maxDate}
              onChange={handleDateChange}
              value={selectedDate}
            />
          </LocalizationProvider>
        )}

        {loadingSearchResults ? (
          <Spinner />
        ) : photos.length === 0 ? (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ pt: "12px" }}
          >
            No photos found for the selected date. Please choose another date.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {photos.map((photo) => (
              <PhotoCard photo={photo} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
