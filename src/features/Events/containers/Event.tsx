import { Typography } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../../app/hooks";
import { Box } from "../../../components/styles/Box";
import { Container } from "../../../components/styles/Container";
import SingleEvent from "../components/SingleEvent";
import { selectedEvent } from "../eventsSlice";

interface Props {}

const Event: React.FunctionComponent<Props> = (props) => {
  const event = useAppSelector(selectedEvent);

  if (event) {
    return (
      <Container maxWidth="md">
        <Box mb={4}>
          <Typography variant="h5" color="primary">
            Historical Event
          </Typography>
        </Box>

        <SingleEvent event={event} />
      </Container>
    );
  }
  return null;
};

export default Event;
