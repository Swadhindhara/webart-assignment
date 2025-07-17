import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "./authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const storedToken = localStorage.getItem("token");

export const login = createAsyncThunk(
    "auth/login", async(data, thunkAPI) => {
        try {
            const response = await authApi.loginUser(data);
            if(response.token){
                localStorage.setItem("token", response.token);
                localStorage.setItem("name", response.data?.name);
                localStorage.setItem("user", JSON.stringify(response?.data?.user_id))
            }
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const initialState = {
    user: localStorage.getItem("user") || '',
    token: storedToken || "",
    isAuthenticated: !!storedToken,
    isLoading: false,
    isError: '',
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        logout : (state) => {
            state.isAuthenticated = false;
            state.user = '';
            state.token = "";
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("user");
            localStorage.removeItem("userDetails");
            toast.success("Logout Successful!!")
        }
    },  
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload;
            state.isLoading = false;
            state.isAuthenticated = true;
        })
        .addCase(login.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })
    }
})


export default loginSlice.reducer;
export const {logout} = loginSlice.actions;