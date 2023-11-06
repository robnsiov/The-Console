"use client";
import { useTheme } from "next-themes";
import { Moon, Sun1 } from "iconsax-react";

import Button from "@/components/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RippleAnim from "@/components/shared/anims/ripple";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="me-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-full">
              <Button
                className="rounded-full overflow-hidden  relative w-[40px] h-[40px] text-zinc-500"
                variant="secondary"
                size="icon"
              >
                <RippleAnim />
                <Sun1
                  variant="Bold"
                  className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  variant="Bold"
                  className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex justify-start items-start flex-col p-0 !bg-inherit">
              <Button
                forceActive={theme === "light"}
                variant="ghost"
                className="cursor-pointer w-full flex justify-start items-center px-2"
                onClick={() => setTheme("light")}
              >
                Light
              </Button>
              <Button
                forceActive={theme === "dark"}
                variant="ghost"
                className="cursor-pointer w-full flex justify-start items-center px-2"
                onClick={() => setTheme("dark")}
              >
                Dark
              </Button>
              <Button
                forceActive={theme === "system"}
                variant="ghost"
                className="cursor-pointer w-full flex justify-start items-center px-2"
                onClick={() => setTheme("system")}
              >
                system
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
export default ToggleTheme;
