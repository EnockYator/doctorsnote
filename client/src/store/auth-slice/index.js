import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null, // To store user data like role, name, etc.
    error: null, // To store any errors
    token: null, // To store JWT token
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/register',
          formData,
          { withCredentials: true }
        );
        return response.data; // The message will be in response.data.message
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Registration failed. Please try again.";
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/login',
          formData,
          { withCredentials: true }
        );
        return response.data; // The message will be in response.data.message
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Registration failed. Please try again.";
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );
  
  

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuth(state, action) {
        state.isAuthenticated = true;
        state.user = action.payload.user; // You can store user data like role here
        state.token = action.payload.token; // Store token
      },
      setUser: (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true; 
      },
      logout: (state) => {
          state.user = null;
          state.isAuthenticated = false;
      },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user; // Update user with response data
                state.isAuthenticated = false; // Registration succeeded but not yet authenticated
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Store the error message
                state.isAuthenticated = false;
            });
    },
});

export const { setAuth, setUser, logout } = authSlice.actions;
export default authSlice.reducer;