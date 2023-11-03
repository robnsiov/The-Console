"use client";
import RippleAnim from "@/components/shared/anims/ripple";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Language = () => {
  const [lang, setLang] = useState("en");
  return (
    <div className="flex justify-center items-center mr-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="rounded-full relative w-[40px] h-[40px] overflow-hidden"
          >
            {lang}
            <RippleAnim />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="bottom" className="w-40">
          <DropdownMenuGroup className="relative">
            <DropdownMenuItem onClick={() => setLang("en")}>
              {lang === "en" && (
                <Badge className="absolute inset-0" variant="secondary" />
              )}
              <span className="z-10">English</span>{" "}
              <DropdownMenuShortcut>us</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang("fa")}>
              {lang === "fa" && (
                <Badge className="absolute inset-0" variant="secondary" />
              )}
              <span className="z-10">Iran</span>{" "}
              <DropdownMenuShortcut>fa</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default Language;
