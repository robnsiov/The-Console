import { useForm, SubmitHandler } from "react-hook-form";
import { SigninFormImpl } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const useSignin = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(64),
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormImpl>({
    resolver: zodResolver(schema),
    defaultValues: { email: "jack@gmail.com", password: "12345678" },
  });
  const onSubmit: SubmitHandler<SigninFormImpl> = (data) => {
    // call api
    router.replace("/");
  };

  return { errors, handleSubmit, onSubmit, register };
};
export default useSignin;
