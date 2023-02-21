import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/greeting/GET';

const greetingsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

const greet = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://localhost:3000/greetings/index');
    return response.data;
  },
);

export { greetingsReducer, greet };
