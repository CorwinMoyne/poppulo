import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchCategoriesFromJson } from "./eventsApi";

export interface EventsState {
  events: any; // TODO: create model
  placeCategories: string[];
  topicCategories: string[];
}

const initialState: EventsState = {
  events: [],
  placeCategories: [],
  topicCategories: [],
};

export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (_, thunkAPI) => {
    try {
      const events = await fetchCategoriesFromJson();
      // thunkAPI.dispatch(addEvents(events));
    } catch (error) {
      console.log(error);
      // TODO: handle error
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
      // TODO: handle error
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
