"use client";
import RippleAnim from "@/components/shared/anims/ripple";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import languages from "@/constants/languages";
import { useAtom } from "jotai";
import appConfigsAtom from "@/context/atoms/app-configs";
import Link from "@/components/shared/link";

const Language = () => {
  const [appConfigs] = useAtom(appConfigsAtom);
  const [lang, setLang] = useState("");
  useEffect(() => {
    if (appConfigs.locale) setLang(appConfigs.locale);
  }, [appConfigs.locale]);
  return (
    <div className="flex justify-center items-center me-4">
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
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuGroup className="relative">
            {languages.map(({ symbol, country }) => (
              <Link href={"/"} locale={symbol} key={country}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setLang(symbol)}
                >
                  {lang === symbol && (
                    <Badge className="absolute inset-0" variant="secondary" />
                  )}
                  <span className="z-10 w-full">{country}</span>{" "}
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
