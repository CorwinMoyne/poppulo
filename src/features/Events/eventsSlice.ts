import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchEvents } from "./eventsApi";

export interface EventsState {
  events: any; // TODO: create model
}

const initialState: EventsState = {
  events: [],
};

export const getProducts = createAsyncThunk(
  "events/getEvents",
  async (_, thunkAPI) => {
    try {
      const events = await fetchEvents();
      thunkAPI.dispatch(addEvents(events));
    } catch (error) {
      console.log(error);
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
  },
});

export const { addEvents } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;

export default eventsSlice.reducer;
