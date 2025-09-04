"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LoginTypes } from "../types/LoginTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";

export function useLoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>();

  const handleLogin: SubmitHandler<LoginTypes> = (data) => {
    const { email, password } = data;

    const storedUsers = localStorage.getItem("Users");
    const users: LoginTypes[] = storedUsers ? JSON.parse(storedUsers) : [];

    const matchedUser = users.find((user: LoginTypes) => user.emilorphone === email && user.password === password);

    if (matchedUser) {
      toast.success("✅ Login successful!");
      Cookies.set("token", JSON.stringify(matchedUser), {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });

      setTimeout(() => {
        router.push("/");
      });
    } else {
      toast.error("❌ Invalid email/phone or password.");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleLogin,
  };
}
