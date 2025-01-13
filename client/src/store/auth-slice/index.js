
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null, // To store user data like role, name, etc.
    error: null, // To store any errors
    token: null, // To store JWT token
};


// Register customers
export const registerCustomer = createAsyncThunk(
    'auth/register',
    async (customerFormData, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/register',
          customerFormData,
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

  // Register doctors
  export const registerDoctor = createAsyncThunk(
    'auth/register-doctor',
    async (doctorFormData, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/register-doctor',
          doctorFormData,
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

  // Register admins
  export const registerAdmin = createAsyncThunk(
    'auth/register-admin',
    async (adminFormData, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/register-admin',
          adminFormData,
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
            // customers
            .addCase(registerCustomer.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerCustomer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user; // Update user with response data
                state.isAuthenticated = false; // Registration succeeded but not yet authenticated
            })
            .addCase(registerCustomer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Store the error message
                state.isAuthenticated = false;
            })
            // doctors
            .addCase(registerDoctor.pending, (state) => {
              state.isLoading = true;
              state.error = null; 
            })
            .addCase(registerDoctor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user; // Update user with response data
                state.isAuthenticated = false; // Registration succeeded but not yet authenticated
            })
            .addCase(registerDoctor.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Store the error message
                state.isAuthenticated = false;
            })
            // admin
            .addCase(registerAdmin.pending, (state) => {
              state.isLoading = true;
              state.error = null; 
            })
            .addCase(registerAdmin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user; // Update user with response data
                state.isAuthenticated = false; // Registration succeeded but not yet authenticated
            })
            .addCase(registerAdmin.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Store the error message
                state.isAuthenticated = false;
            });
    },
});

export const { setAuth, setUser, logout } = authSlice.actions;
export default authSlice.reducer;



