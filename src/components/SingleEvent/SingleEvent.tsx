import { Typography } from "@mui/material";
import * as React from "react";
import { Event } from "../../models/event";
import { formatDate } from "../../utils/formatDate";
import { Box } from "../styles/Box";

interface Props {
  event: Event;
  handleEventClick?: (event: Event) => void;
}

const SingleEvent: React.FunctionComponent<Props> = (props) => {
  return (
    <Box
      key={props.event.date}
      flexDirection="column"
      mb={3}
      cursor="pointer"
      onClick={() => props.handleEventClick?.(props.event)}
    >
      <Box>
        <Typography variant="h6" color="primary">
          {formatDate(props.event.date)}
        </Typography>
      </Box>
      <Box>{props.event.description}</Box>
    </Box>
  );
};

export default SingleEvent;
