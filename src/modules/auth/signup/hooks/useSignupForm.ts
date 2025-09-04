"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignupTypes } from "../types/sgnupTypes";

export function useSignupForm() {
  const router = useRouter();
  const [Users, setUser] = useState<SignupTypes[]>([]);
  const [formInputs, setFormInputs] = useState<SignupTypes>({
    firstName: "",
    lastName: "",
    Name: "",
    emilorphone: "",
    password: "",
    address: "",
    order: [],
    revision: [],
    collection: [],
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("Users");
    if (storedUsers) {
      setUser(JSON.parse(storedUsers));
    }
  }, []);

  function signup() {
    const updatedUsers = [...Users, formInputs];
    setUser(updatedUsers);
    localStorage.setItem("Users", JSON.stringify(updatedUsers));
    setFormInputs({
      ...formInputs,
      Name: "",
      emilorphone: "",
      password: "",
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    signup();
    router.push("/login");
  }

  return {
    handleSubmit,
    formInputs,
    setFormInputs,
  };
}
