import { useState } from "react";

const useAuth = () => {
  const [activeForm, setActiveForm] = useState<"Sign in" | "Sign up">(
    "Sign in"
  );
  const toggleActiveForm = () => {
    setActiveForm(activeForm === "Sign in" ? "Sign up" : "Sign in");
  };
  return { activeForm, setActiveForm, toggleActiveForm };
};
export default useAuth;
