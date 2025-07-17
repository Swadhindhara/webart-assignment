import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "./authApi";
import { toast } from "sonner";

export const createUser = createAsyncThunk(
    'auth/createUser', async(data, thunkAPI) => {
        try {
            const response = await authApi.createProfile(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "Failed to crate profile")
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        isError: '',
        isSuccess: false,
        data: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
            // toast.success("Please verify email address.")
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isError = action.payload || action.payload.errors[0].email;
            state.isSuccess = false;
            state.isLoading = false;
        })
    }
})


export default authSlice.reducer;