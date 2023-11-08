"use client";

import Button from "@/components/shared/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Input from "@/components/shared/input";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full max-w-xs">
        <CardTitle className="text-2xl font-semibold">
          Sign Up to account
        </CardTitle>
        <CardDescription className="mt-2">
          Enter your email below to sign up your account
        </CardDescription>
        <form className="flex justify-center items-center flex-col mt-6 w-full">
          <Input placeholder="jack" autoComplete="username" />
          <Input
            placeholder="jack@gmail.com"
            className="my-1.5"
            autoComplete="email"
          />
          <Input
            placeholder="password"
            type="password"
            autoComplete="current-password"
          />

          <Button type="submit" className="w-full mt-1.5">
            Sign Up with Email
          </Button>
        </form>
        <div className="relative w-full my-8">
          <CardDescription
            className="absolute top-1/2 left-1/2 
                  -translate-y-1/2 -translate-x-1/2 bg-white px-3 whitespace-nowrap text-xs z-10"
          >
            OR CONTINUE WITH
          </CardDescription>
          <Separator className="opacity-70" />
        </div>
        <div className="w-full flex justify-start items-start flex-col">
          <Button variant="outline" className="w-full">
            <GitHubLogoIcon />
            <span className="ms-2">Github</span>
          </Button>
          <Button variant="outline" className="w-full mt-1.5">
            <LinkedInLogoIcon />
            <span className="ms-2">LinkedIn</span>
          </Button>
        </div>
        <CardDescription className="text-center mt-6 px-8">
          By clicking continue, you agree to our{" "}
          <Button variant="link" asChild className="p-0 inline-block">
            <span className="cursor-pointer">Terms of Service</span>
          </Button>{" "}
          and
          <Button variant="link" asChild className="ms-1 p-0 inline-block">
            <span className="cursor-pointer"> Privacy Policy.</span>
          </Button>{" "}
        </CardDescription>
      </div>
    </>
  );
};

export default SignUp;
