"use client";
import RippleAnim from "@/components/shared/anims/ripple";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next-intl/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import languages from "@/constants/languages";

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
            {languages.map(({ symbol, country }) => (
              <Link href={"/"} locale={symbol} key={country}>
                <DropdownMenuItem onClick={() => setLang(symbol)}>
                  {lang === symbol && (
                    <Badge className="absolute inset-0" variant="secondary" />
                  )}
                  <span className="z-10">{country}</span>{" "}
                  <DropdownMenuShortcut>{symbol}</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default Language;
