import * as React from "react";
import { useAppSelector } from "../../../app/hooks";
import { Box } from "../../../components/styles/Box";
import { selectedEvent } from "../eventsSlice";

interface Props {}

const Event: React.FunctionComponent<Props> = (props) => {
  const event = useAppSelector(selectedEvent);

  return <Box>{event?.date}</Box>;
};

export default Event;
