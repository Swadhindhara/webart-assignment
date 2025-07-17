import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./userApi";


export const getUser = createAsyncThunk(
    "get/user", async(id, thunkAPI) => {
        try {
            const response = await userApi.getProfile(id);
        if(response.data){
            localStorage.setItem("userDetails", JSON.stringify(response.data));
        }
        return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
        isLoading: false,
        isSuccess: false,
        isError: ""
    },
    reducers: {
    resetUser: (state) => {
        state.userDetails = null;
        localStorage.removeItem("userDetails");
        state.isSuccess = false;
        state.isError = "";
    }
},

    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userDetails = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
            state.isSuccess = false;
        })
    }
})


export default profileSlice.reducer;
export const {resetUser} = profileSlice.actions;