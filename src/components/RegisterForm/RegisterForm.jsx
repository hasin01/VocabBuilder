import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import registerUser from "../../auth/services/registerservices";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      reset();
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container py-8 px-4 bg-bgForm rounded-t-[25px] rounded-b-none h-screen"
    >
      <h1 className="font-macpaw text-xl font-bold rounded-card bg-main">
        Register
      </h1>
      <p className="font-macpaw text-base font-normal leading-6 text-textColor">
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>

      <div className="flex flex-col gap-3 my-4">
        {/* Имя */}
        <input
          className="border border-gray-300 rounded-xl p-3 placeholder-gray-950"
          placeholder="Name"
          {...register("name", { required: "Введите имя" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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

      <Button text="Register" />

      <div className="flex justify-center">
        <button
          type="button"
          className="m-4 font-macpaw text-base font-bold underline text-greyText hover:text-black focus:text-black"
        >
    <Link to="/VocabBuilder/Login">Login</Link>

        </button>
      </div>
    </form>
  );
};

export default RegisterForm;