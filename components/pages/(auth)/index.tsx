"use client";
import Button from "@/components/shared/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import SignIn from "./signin";
import SignUp from "./signup";
import useAuth from "./use";

const Authentication = () => {
  const { activeForm, toggleActiveForm } = useAuth();
  return (
    <>
      <div className="w-full h-screen">
        <div className="container h-full p-4">
          <Card className="w-full h-full flex justify-start items-center overflow-hidden relative text-center">
            <div className="w-1/2 h-full flex justify-center items-center lg:hidden">
              <Image
                src={"/images/auth.png"}
                width="800"
                height="600"
                alt="auth"
                className="object-cover"
              />
            </div>
            <Button
              className="absolute top-8 right-8 rtl:right-auto rtl:left-8 md:top-4 
              md:right-4 md:rtl:right-auto md:rtl:left-4"
              variant="ghost"
              onClick={toggleActiveForm}
            >
              {activeForm === "Sign in" ? "Sign up" : "Sign in"}
            </Button>
            <div className="w-1/2 lg:w-full flex justify-center items-center md:p-4">
              {activeForm === "Sign in" && <SignIn />}
              {activeForm === "Sign up" && <SignUp />}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Authentication;
