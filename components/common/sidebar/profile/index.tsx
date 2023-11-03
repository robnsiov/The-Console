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
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div className="relative">
              <ScaleAnim>
                <div
                  className={cls(
                    `border-2 border-white outline outline-2 
      outline-zinc-100 rounded-full overflow-hidden relative duration-200 transition-all active:outline-black`,
                    { "outline-black": open }
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
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Robnsiov@gmail.com</DropdownMenuLabel>
            <CardDescription className="px-1.5">Admin</CardDescription>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
export default Profile;
