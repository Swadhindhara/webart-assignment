import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import emailAPI from "./emailApi";
import { toast } from "sonner";

    export const emailVerify = createAsyncThunk(
        'email/verify', async(data, thunkAPI) => {
            try {
                const response = await emailAPI.verifyEmail(data);
                return response;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message || "Something issue on email");
            }
        }
    )

    const emailSlice = createSlice({
    name: "emailSlice",
    initialState: {
        isLoading: false,
        data: '',
        isError: ''
    },
    extraReducers: (builder) => {
        builder
        .addCase(emailVerify.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(emailVerify.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // toast.success("Email verified.")
            state.isError = ''
        })
        .addCase(emailVerify.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
            state.data = action.payload
        })
    }
})


export default emailSlice.reducer;