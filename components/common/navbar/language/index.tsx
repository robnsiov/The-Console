"use client";
import RippleAnim from "@/components/shared/anims/ripple";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/shared/button";
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
          <div>
            <Button
              variant="secondary"
              className="rounded-full relative w-[40px] h-[40px] overflow-hidden"
            >
              {lang}
              <RippleAnim />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuGroup className="relative">
            {languages.map(({ symbol, country }) => (
              <Link
                href={"/"}
                locale={symbol}
                key={country}
                className="w-full inline-block mb-1 last:mb-0"
              >
                <Button
                  variant="ghost"
                  className="cursor-pointer w-full felx justify-between items-center px-2"
                  forceActive={lang === symbol}
                  onClick={() => setLang(symbol)}
                >
                  <span>{country}</span>{" "}
                  <DropdownMenuShortcut className="ml-[unset]">
                    {symbol}
                  </DropdownMenuShortcut>
                </Button>
              </Link>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default Language;
