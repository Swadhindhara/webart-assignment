import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/features/auth/loginSlice";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, isError } = useSelector(
    (state) => state.user
  );

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(login(data));
  };

  useEffect(() => {
    if (user.success === 1) {
      navigate("/");
      toast.success("Login successful!!");
    }
    // console.log(user);
  }, [user]);

  return (
    <>
      <div className="register_container px-[4%]">
        <div className="container mx-auto">
          <div className="register py-10  flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="shadow-xs rounded-2xl px-6 py-8 w-full md:w-2/3 lg:w-1/3 flex flex-col gap-3 bg-black"
            >
              <h2 className="text-primary text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
                Login Account
              </h2>
              <div className="input_div flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="input_div flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <Input
                  type="text"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button className={`text-black mt-4`}>{`${
                isLoading ? "Loading..." : "Continue with Account"
              }`}</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
