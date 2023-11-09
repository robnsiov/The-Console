"use client";
import SidebarItemImpl from "./types";
import { Badge } from "@/components/ui/badge";
import { ArrowRight2 } from "iconsax-react";
import RippleAnim from "@/components/shared/anims/ripple";
import { motion, AnimatePresence } from "framer-motion";
import useSidebarItem from "./use";
import cls from "classnames";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Bullet from "@/components/shared/bullet";
import Link from "@/components/shared/link";
import Button from "@/components/shared/button";

const SidebarItem = ({
  href,
  icon: Icon,
  title,
  subs,
  label,
  minimumSidebar,
}: SidebarItemImpl) => {
  const { open, setOpen } = useSidebarItem();
  return (
    <>
      <div
        className="flex justify-start items-start flex-col w-full"
        key={title + href}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-full">
              <Link className="w-full mb-1 inline-block" href={href}>
                <Button
                  active={href}
                  onClick={() => setOpen(!open)}
                  asChild
                  className={cls(
                    `w-full overflow-hidden relative flex justify-between items-center py-[22px]`,
                    { "px-2 justify-center": minimumSidebar }
                  )}
                  variant="ghost"
                >
                  <div className="w-full">
                    <div
                      className={cls(`flex justify-start items-center`, {
                        "flex-col justify-center": minimumSidebar,
                      })}
                    >
                      <Icon
                        variant="Bulk"
                        size="20"
                        className={cls(`opacity-60`, {
                          "mt-1": minimumSidebar,
                        })}
                      />
                      <span
                        className={cls(
                          minimumSidebar ? "ms-0 text-[10px]" : "ms-3"
                        )}
                      >
                        {title}
                      </span>
                    </div>
                    {label && !minimumSidebar && (
                      <div className="flex justify-end items-center me-2">
                        <Badge>+36</Badge>
                      </div>
                    )}
                    {!!subs?.length && (
                      <ArrowRight2
                        size="12"
                        className={cls(
                          `absolute top-1/2 -translate-y-1/2 right-2 rtl:right-auto rtl:left-2 
                    transition-all duration-[0.3s]
                    rtl:-scale-100`,
                          {
                            "rotate-90 rtl:-rotate-90 ":
                              open && !minimumSidebar,
                          },
                          {
                            "translate-x-0.5 rtl:-translate-x-0.5":
                              minimumSidebar,
                          }
                        )}
                      />
                    )}
                    <RippleAnim />
                  </div>
                </Button>
              </Link>
            </div>
          </DropdownMenuTrigger>
          {minimumSidebar && !!subs?.length && (
            <DropdownMenuContent side="right" align="center" className="w-56">
              <DropdownMenuGroup>
                {subs.map(({ href, title }) => (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    key={href + title}
                  >
                    <Link
                      href={href}
                      className="flex justify-start items-center"
                    >
                      <Bullet />
                      <span className="ms-2">{title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        {!minimumSidebar && (
          <AnimatePresence>
            {open && (
              <motion.div
                style={{ overflow: "hidden" }}
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
                className="w-full"
                exit={{ height: 0 }}
              >
                <div className="w-full flex justify-start items-start flex-col my-1">
                  {subs?.map(({ href, title }) => (
                    <Link href={href} className="w-full" key={href + title}>
                      <Button
                        active={href}
                        asChild
                        className="w-full overflow-hidden relative flex justify-start items-center py-3"
                        variant="ghost"
                      >
                        <div className="w-full">
                          <Bullet />
                          <span className="ms-3 opacity-70">{title}</span>
                          <RippleAnim />
                        </div>
                      </Button>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};
export default SidebarItem;
