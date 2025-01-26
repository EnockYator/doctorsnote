
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../../../axios"; // axiosInstance which allow sending cookies to backend

const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user: null, // To store user data like role, name, etc.
    error: null, // To store any errors
    accessToken: null, // To store JWT token
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

  // Login any registered user
  export const loginUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/login',
          formData,
          { withCredentials: true }
        );

        localStorage.setItem('accessToken', response.data.accessToken); // Store token
       
        return response.data; // The message will be in response.data.message
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Registration failed. Please try again.";
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );

  // Logout User
  export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/logout',
          { withCredentials: true }
        );
        localStorage.removeItem('accessToken'); // Clear token
        return response.data?.message; //logged out message from response.data.message
      } catch (error) {
        const errorMessage =
          error.response?.data || "Failed to log out. Please try again.";
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );


  // Redux slice for authentication 

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      // On successful login
      setAuth(state, action) {
        state.isAuthenticated = true;
        state.user = action.payload.user; // You can store user data like role here
        state.accessToken = action.payload.accessToken; // Store token
      },
      // On successful logout
      resetAuth(state) {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
      }
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
            })
            // login
            .addCase(loginUser.pending, (state) => {
              state.isLoading = true;
              state.error = null; 
              state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user; // Update user with response data
                state.isAuthenticated = true; // Login succeeded
                state.accessToken = action.payload.accessToken;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Store the error message
                state.isAuthenticated = false;
            })
            // logout
            .addCase(logoutUser.pending, (state) => {
              state.isLoading = true;
              state.error = null; 
              state.isAuthenticated = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null; 
                state.isAuthenticated = false; // Logout succeeded
                //toast.success('Logged out successfully')
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Store the error message
                state.isAuthenticated = true;
            });

    },
});

export const { setAuth, resetAuth, logout } = authSlice.actions;
export default authSlice.reducer;



