import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUser } from "@/features/auth/authSlice";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (data) => {
    dispatch(createUser(data));
  };

  useEffect(() => {
    if (data?.success === 1) {
      navigate("/email-verification");
      toast.success("Please verify email address.")
    }
  }, [data]);
  return (
    <>
      <div className="register_container px-[4%]">
        <div className="container mx-auto">
          <div className="register py-10  flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="shadow-xs rounded-2xl px-6 py-8 w-full md:w-2/3 lg:w-1/3 flex flex-col gap-2 bg-black"
            >
              <h2 className="text-primary text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
                Register Yourself
              </h2>
              <div className="input_div flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Name must be at most 30 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only letters and spaces are allowed",
                    },
                  })}
                />
                {errors.name && (
                  <small className="text-red-500 text-xs">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div className="input_div flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 4,
                      message: "Username must be at least 4 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must be at most 20 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message:
                        "Username can only contain letters, numbers, and underscores",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs">
                    {errors.username.message}
                  </p>
                )}
              </div>
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
              <div className="input_div flex flex-col gap-2">
                <label htmlFor="name">Role</label>
                <select
                  className="border border-white/60 py-1 px-3 rounded-lg"
                  {...register("role", {
                    validate: (value) =>
                      value !== "null" || "Please select a role",
                  })}
                >
                  <option value="null">Select your role</option>
                  <option value="0">User</option>
                  <option value="1">Creator</option>
                  <option value="2">Studio</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-xs">{errors.role.message}</p>
                )}
              </div>
              <Button className={`text-black mt-4`}>{`${
                isLoading ? "Loading..." : "Sign Up"
              }`}</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
