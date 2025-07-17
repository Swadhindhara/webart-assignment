import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/authSlice';
import emailReducer from '@/features/email/emailSlice'
import loginReducer from '@/features/auth/loginSlice'
import userReducer from '@/features/user/useSlice'


const store = configureStore({
    reducer : {
        auth: authReducer,
        email: emailReducer,
        user: loginReducer,
        profile: userReducer,
    }
})

export default store;