import { Button, SelectChangeEvent, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Select from "../../components/Select/Select";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import { Box } from "../../components/styles/Box";
import { Container } from "../../components/styles/Container";
import { Event } from "../../models/event";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getEvents,
  getEventsCategories,
  selectEvents,
  selectPlaceCategories,
  selectTopicCategories,
  setSelectedEvent,
} from "../../store/slices/eventsSlice";
import { CategoryFilter } from "./enums/categoryFilter";

interface Props {}

const Events: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const placeCategories = useAppSelector(selectPlaceCategories);
  const topicCategories = useAppSelector(selectTopicCategories);
  const events = useAppSelector(selectEvents);

  const [filter, setFilter] = React.useState(CategoryFilter.ByPlace);
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
    const query = filter === CategoryFilter.ByPlace ? place : topic;
    if (query) {
      dispatch(getEvents(query));
    }
  };

  const handleEventClick = (event: Event) => {
    dispatch(setSelectedEvent(event));
    navigate("event");
  };

  return (
    <Container maxWidth="md">
      <Box mb={4}>
        <Typography variant="h5" color="primary">
          Historical Events
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box flexDirection="column">
          <Box mb={3}>
            <Select
              label="Filter"
              value={filter}
              onChange={(event: SelectChangeEvent) =>
                setFilter(event.target.value as CategoryFilter)
              }
              options={Object.values(CategoryFilter)}
            />
          </Box>

          <Box mb={3}>
            {filter === CategoryFilter.ByPlace &&
              placeCategories.length > 0 && (
                <Select
                  label="Place"
                  value={place}
                  onChange={(event: SelectChangeEvent) =>
                    setPlace(event.target.value)
                  }
                  options={placeCategories}
                />
              )}

            {filter === CategoryFilter.ByTopic &&
              topicCategories.length > 0 && (
                <Select
                  label="Topic"
                  value={topic}
                  onChange={(event: SelectChangeEvent) =>
                    setTopic(event.target.value)
                  }
                  options={topicCategories}
                />
              )}
          </Box>

          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>
      </form>

      <Box mt={4} display="block">
        {events.length > 0 &&
          events.map((event) => (
            <SingleEvent
              key={event.date}
              event={event}
              handleEventClick={handleEventClick}
            />
          ))}
      </Box>
    </Container>
  );
};

export default Events;
