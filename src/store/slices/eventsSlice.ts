import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoriesFromJson,
  fetchEvents,
} from "../../features/Events/eventsApi";
import { Event } from "../../models/event";
import { setIsLoading } from "../../services/loadingService";
import { showToast } from "../../services/toastService";
import { RootState } from "../store";

export interface EventsState {
  events: Event[];
  selectedEvent: Event | undefined;
  placeCategories: string[];
  topicCategories: string[];
}

const initialState: EventsState = {
  events: [],
  selectedEvent: undefined,
  placeCategories: [],
  topicCategories: [],
};

export const getEvents = createAsyncThunk<void, string>(
  "events/getEvents",
  async (query, thunkAPI) => {
    try {
      setIsLoading(true);
      const events = await fetchEvents(query);
      thunkAPI.dispatch(addEvents(events));
    } catch (error) {
      console.error(error);
      showToast(`No results found for query ${query}`, "error");
    } finally {
      setIsLoading(false);
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
    } finally {
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
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    setPlaceCategories: (state, action) => {
      state.placeCategories = action.payload;
    },
    setTopicCategories: (state, action) => {
      state.topicCategories = action.payload;
    },
  },
});

export const {
  addEvents,
  setSelectedEvent,
  setPlaceCategories,
  setTopicCategories,
} = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;
export const selectedEvent = (state: RootState) => state.events.selectedEvent;
export const selectPlaceCategories = (state: RootState) =>
  state.events.placeCategories;
export const selectTopicCategories = (state: RootState) =>
  state.events.topicCategories;

export default eventsSlice.reducer;
