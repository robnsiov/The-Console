"use client";
import RippleAnim from "@/components/shared/anims/ripple";
import ScaleAnim from "@/components/shared/anims/scale";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import cls from "classnames";
import { CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Logout } from "iconsax-react";
import Link from "@/components/shared/link";
import Button from "@/components/shared/button";
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div className="relative">
              <ScaleAnim>
                <div
                  className={cls(
                    `border-2 border-white outline outline-2 
       rounded-full overflow-hidden relative duration-200 transition-all active:outline-black`,
                    open
                      ? "outline-black dark:outline-zinc-950"
                      : "outline-zinc-100 dark:outline-zinc-950"
                  )}
                >
                  <RippleAnim />
                  <Avatar>
                    <AvatarImage src="/images/avatar_25.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </ScaleAnim>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom" className="w-56">
            <DropdownMenuLabel>Robnsiov@gmail.com</DropdownMenuLabel>
            <CardDescription className="px-1.5">Admin</CardDescription>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="w-full flex justify-start flex-col items-center p-0 !bg-inherit">
                <Button
                  active={"/"}
                  className="w-full flex justify-start items-center px-2"
                  variant="ghost"
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  active={"/profile"}
                  className="w-full flex justify-start items-center px-2 my-1"
                  variant="ghost"
                >
                  <Link href="/profile">Profile</Link>
                </Button>
                <Button
                  active={"/settings"}
                  className="w-full flex justify-start items-center px-2"
                  variant="ghost"
                >
                  <Link href="/settings">Settings</Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer !bg-inherit p-0">
              <Button
                className="w-full felx justify-between items-center px-2"
                variant="ghost"
              >
                <span>Log out</span>
                <DropdownMenuShortcut>
                  <Logout />
                </DropdownMenuShortcut>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
export default Profile;
