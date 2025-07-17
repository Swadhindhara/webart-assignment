import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { emailVerify } from "@/features/email/emailSlice";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EmailVerify = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useSelector((state) => state.email);

  const onSubmit = (data) => {
    dispatch(emailVerify(data));
    // console.log(data);
  };

  useEffect(() => {
    if (data.success === 1) {
      toast.success("Email verified.");
      navigate("/signin");
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
              className="shadow-xs rounded-2xl px-6 py-8 w-full md:w-2/3 lg:w-1/3 flex flex-col gap-3 bg-black"
            >
              <h2 className="text-primary text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
                Verify Email Id
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
  <label htmlFor="otp">OTP</label>
  <Input
    type="text"
    placeholder="Enter your OTP"
    maxLength={6}
    inputMode="numeric"
    pattern="[0-9]*"
    onKeyDown={(e) => {
      const allowedKeys = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Tab",
      ];
      if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }}
    {...register("otp", {
      required: "OTP is required",
      pattern: {
        value: /^\d{6}$/,
        message: "OTP must be exactly 6 digits",
      },
    })}
  />
  {errors.otp && (
    <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
  )}
</div>

              <Button className={`text-black mt-4`}>{`${
                isLoading ? "Loading..." : "Verify Email"
              }`}</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerify;
