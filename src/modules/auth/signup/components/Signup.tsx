"use client";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useSignupForm } from "../hooks/useSignupForm";

export default function Signup() {
  const { handleSubmit, formInputs, setFormInputs } = useSignupForm();
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-md rounded-md overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-blue-100">
          <Image src="/images/beatsnoop.webp" alt="Shopping Illustration" width={500} height={500} className="w-full h-auto object-contain p-6" priority />
        </div>
        <div className="p-8 w-full">
          <h2 className="text-2xl font-bold mb-2">{"Create an account"}</h2>
          <p className="text-sm text-gray-600 mb-6">{"Enter your details below"}</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              value={formInputs.Name}
              onChange={(e) => setFormInputs({ ...formInputs, Name: e.target.value })}
              type="text"
              placeholder={"Name"}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={formInputs.emilorphone}
              onChange={(e) => setFormInputs({ ...formInputs, emilorphone: e.target.value })}
              type="text"
              placeholder={"Email or Phone Number"}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={formInputs.password}
              onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
              type="password"
              placeholder={"Password"}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
              {"Create Account"}
            </button>
            <div className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded cursor-pointer hover:bg-gray-100 transition">
              <FcGoogle />
              <span className="text-sm text-gray-700">{"Sign up with Google"}</span>
            </div>
          </form>
          <div className="text-center mt-6 text-sm text-gray-600">
            {"Already have account?"}
            <Link href="/login" className="text-black font-medium hover:underline">
              {"Log in"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
