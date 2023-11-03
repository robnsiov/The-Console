"use client";
import { SearchNormal1 } from "iconsax-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RippleAnim from "@/components/shared/anims/ripple";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Search = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="rounded-full overflow-hidden relative"
              size="icon"
            >
              <SearchNormal1 size="18" />
              <RippleAnim />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <Command className="mt-3">
              <CommandInput placeholder="Type page name..." />
              <CommandList className="max-h-none">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <ScrollArea className="h-[232px] w-full">
                    {Array(20)
                      .fill("")
                      .map((_, i) => (
                        <Link
                          onClick={() => setOpen(false)}
                          key={i}
                          className="w-full"
                          href="/"
                        >
                          <CommandItem className="cursor-pointer">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Calendar + {i}</span>
                          </CommandItem>
                        </Link>
                      ))}
                  </ScrollArea>
                </CommandGroup>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        <Badge className="px-1.5 py-1 ms-1" variant="secondary">
          ⌘K
        </Badge>
      </div>
    </>
  );
};
export default Search;