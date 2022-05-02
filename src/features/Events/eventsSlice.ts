import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { showToast } from "../../services/toastService";
import { Event } from "../models/event";
import { fetchCategoriesFromJson, fetchEvents } from "./eventsApi";

export interface EventsState {
  events: Event[];
  placeCategories: string[];
  topicCategories: string[];
}

const initialState: EventsState = {
  events: [],
  placeCategories: [],
  topicCategories: [],
};

export const getEvents = createAsyncThunk<void, string>(
  "events/getEvents",
  async (query, thunkAPI) => {
    try {
      const events = await fetchEvents(query);
      thunkAPI.dispatch(addEvents(events));
    } catch (error) {
      console.error(error);
      showToast(`No results found for query ${query}`, "error");
    }
  }
);

export const getEventsCategories = createAsyncThunk(
  "events/getEventCategories",
  async (_, thunkAPI) => {
    try {
      const categories = await fetchCategoriesFromJson();
      thunkAPI.dispatch(setPlaceCategories(categories.placeCategories));
      thunkAPI.dispatch(setTopicCategories(categories.topicCategories));
    } catch (error) {
      console.error(error);
      showToast("There was a problem getting the categories", "error");
    }
  }
);

export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvents: (state, action) => {
      state.events = action.payload;
    },
    setPlaceCategories: (state, action) => {
      state.placeCategories = action.payload;
    },
    setTopicCategories: (state, action) => {
      state.topicCategories = action.payload;
    },
  },
});

export const { addEvents, setPlaceCategories, setTopicCategories } =
  eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;
export const selectPlaceCategories = (state: RootState) =>
  state.events.placeCategories;
export const selectTopicCategories = (state: RootState) =>
  state.events.topicCategories;

export default eventsSlice.reducer;
