"use client";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useLoginForm } from "../hooks/useLoginForm";

export default function Login() {
  const { register, handleSubmit, errors, handleLogin } = useLoginForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-md rounded-md overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-blue-50">
          <Image src="/images/beatsnoop.webp" alt="Login Illustration" width={500} height={500} className="w-full h-auto object-contain p-8" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-1">
            {"Log in to"} <span className="text-red-500">{"Cyber"}</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6">{"Enter your details below"}</p>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <input
              type="text"
              placeholder={"Email or Phone Number"}
              {...register("email", { required: "Email or phone is required" })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            {errors.email && <p className="text-red-600 font-bold">{errors.email.message}</p>}

            <input
              type="password"
              placeholder={"Password"}
              {...register("password", { required: "Password is required" })}
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none focus:border-black"
            />
            {errors.password && <p className="text-red-600 font-bold">{errors.password.message}</p>}

            <div className="flex items-center justify-between mt-2">
              <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                {"Log In"}
              </button>
              <h2 className="text-red-500 text-sm hover:underline">{"Forget Password?"}</h2>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}
