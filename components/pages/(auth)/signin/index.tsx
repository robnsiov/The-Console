"use client";

import Button from "@/components/shared/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const SignIn = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full max-w-xs">
        <CardTitle className="text-2xl font-semibold">
          Sign In to account
        </CardTitle>
        <CardDescription className="mt-2">
          Enter your email below to sign in your account
        </CardDescription>
        <form className="flex justify-center items-center flex-col mt-6 w-full">
          <Input placeholder="jack@gmail.com" autoComplete="email" />
          <Input
            autoComplete="current-password"
            placeholder="password"
            className="my-1.5"
            type="password"
          />

          <Button type="submit" className="w-full">
            Sign In with Email
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
      </div>
    </>
  );
};

export default SignIn;