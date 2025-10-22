import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: null,
};

// Async thunk to load token from AsyncStorage on app start
export const loadToken = createAsyncThunk("auth/loadToken", async () => {
  const token = await AsyncStorage.getItem("userToken");
  return token;
});

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // Replace with your actual API call
      const response = await fetch(`${process.env.API}/userP/loginP`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      await AsyncStorage.setItem("userToken", data.token);
      return data.token;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await AsyncStorage.removeItem("userToken");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Synchronous action if you need to set token manually
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Load token
    builder.addCase(loadToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });

    // Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.token = null;
    });
  },
});

export const { setToken, clearError } = authSlice.actions;
export default authSlice.reducer;
