"use client";

import Button from "@/components/shared/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Input from "@/components/shared/input";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <Dialog>
            <DialogTrigger asChild>
              <div className="inline-block">
                <Button variant="link" asChild className="p-0 inline-block">
                  <span className="cursor-pointer me-1">Terms of service</span>
                </Button>{" "}
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="mb-2 mt-6">Edit profile</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.{" "}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          and
          <Dialog>
            <DialogTrigger asChild>
              <div className="inline-block">
                <Button
                  variant="link"
                  asChild
                  className="ms-1 p-0 inline-block"
                >
                  <span className="cursor-pointer"> Privacy Policy.</span>
                </Button>{" "}
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="mb-2 mt-6">Edit profile</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.{" "}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardDescription>
      </div>
    </>
  );
};

export default SignUp;
