import { useState } from "react";
import { toast } from "react-toastify";
import { FormData } from "../types/ContactTypes";

export function useContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    toast.success("✅ Your message has been saved successfully! 🎉");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return { formData, handleChange, handleSubmit };
}
