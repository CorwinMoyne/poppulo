import { Button, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Select from "../../../components/Select/Select";
import { Box } from "../../../components/styles/Box";
import { ByFilter } from "../../enums/byFilter";
import { Event } from "../../models/event";
import {
  getEvents,
  getEventsCategories,
  selectEvents,
  selectPlaceCategories,
  selectTopicCategories,
  setSelectedEvent,
} from "../eventsSlice";

interface Props {}

const Events: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const placeCategories = useAppSelector(selectPlaceCategories);
  const topicCategories = useAppSelector(selectTopicCategories);
  const events = useAppSelector(selectEvents);

  const [filter, setFilter] = React.useState(ByFilter.ByPlace);
  const [place, setPlace] = React.useState("");
  const [topic, setTopic] = React.useState("");

  React.useEffect(() => {
    dispatch(getEventsCategories());
  }, []);

  React.useEffect(() => {
    if (placeCategories[0]) {
      setPlace(placeCategories[0]);
    }
  }, [placeCategories]);

  React.useEffect(() => {
    if (topicCategories[0]) {
      setTopic(topicCategories[0]);
    }
  }, [topicCategories]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = filter === ByFilter.ByPlace ? place : topic;
    if (query) {
      dispatch(getEvents(query));
    }
  };

  const handleEvent = (event: Event) => {
    dispatch(setSelectedEvent(event));
    navigate("event");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Select
          label="Filter"
          value={filter}
          onChange={(event: SelectChangeEvent) =>
            setFilter(event.target.value as ByFilter)
          }
          options={Object.values(ByFilter)}
        />

        {filter === ByFilter.ByPlace && placeCategories.length > 0 && (
          <Select
            label="Place"
            value={place}
            onChange={(event: SelectChangeEvent) =>
              setPlace(event.target.value)
            }
            options={placeCategories}
          />
        )}

        {filter === ByFilter.ByTopic && topicCategories.length > 0 && (
          <Select
            label="Topic"
            value={topic}
            onChange={(event: SelectChangeEvent) =>
              setTopic(event.target.value)
            }
            options={topicCategories}
          />
        )}

        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>

      <Box mt={2} display="block">
        {events.length > 0 &&
          events.map((event) => (
            <Box
              key={event.date}
              flexDirection="column"
              mb={2}
              cursor="pointer"
              onClick={() => handleEvent(event)}
            >
              <Box>{event.date}</Box>
              <Box>{event.description}</Box>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Events;
