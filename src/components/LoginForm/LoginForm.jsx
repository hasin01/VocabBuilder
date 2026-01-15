import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import loginUser from "../../auth/services/lodinservices";
import {  NavLink } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data);
      reset(); 
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container py-8 px-4 bg-bgForm rounded-t-[25px] rounded-b-none"
    >
      <h1 className="font-macpaw text-xl font-bold rounded-card bg-main">
        Login
      </h1>
      <p className="font-macpaw text-base font-normal leading-6 text-textColor">
        Please enter your login details to continue using our service:
      </p>

      <div className="flex flex-col gap-3 my-4">
        {/* Email */}
        <input
          className="border border-gray-300 rounded-xl p-3 placeholder-gray-950"
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Введите email",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
              message: "Некорректный email",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Пароль */}
        <input
          className="border border-gray-300 rounded-xl p-3 placeholder-gray-950"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button text="Login" />

      <div className="flex justify-center">
        <button
          type="button"
          className="m-4 font-macpaw text-base font-bold underline text-greyText hover:text-black focus:text-black"
        >
          <NavLink to="/Register">Register</NavLink>

        </button>
      </div>
    </form>
  );
};

export default LoginForm;