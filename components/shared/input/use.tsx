import { useState } from "react";

const useInput = (type: string) => {
  const [inpType, setInpType] = useState(type);
  const toggleType = () => {
    if (type === "password") {
      if (inpType === "password") setInpType("text");
      else setInpType("password");
    }
  };
  return { toggleType, inpType };
};
export default useInput;
