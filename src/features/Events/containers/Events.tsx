import { Button, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Select from "../../../components/Select/Select";
import { ByFilter } from "../../enums/byFilter";
import {
  getEvents,
  getEventsCategories,
  selectPlaceCategories,
  selectTopicCategories,
} from "../eventsSlice";

interface Props {}

const Events: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  const placeCategories = useAppSelector(selectPlaceCategories);
  const topicCategories = useAppSelector(selectTopicCategories);

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

  return (
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
          onChange={(event: SelectChangeEvent) => setPlace(event.target.value)}
          options={placeCategories}
        />
      )}

      {filter === ByFilter.ByTopic && topicCategories.length > 0 && (
        <Select
          label="Topic"
          value={topic}
          onChange={(event: SelectChangeEvent) => setTopic(event.target.value)}
          options={topicCategories}
        />
      )}

      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
};

export default Events;
