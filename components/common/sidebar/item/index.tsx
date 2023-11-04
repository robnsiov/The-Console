"use client";
import { Button } from "@/components/ui/button";
import SidebarItemImpl from "./types";
import { Badge } from "@/components/ui/badge";
import { ArrowRight2 } from "iconsax-react";
import RippleAnim from "@/components/shared/anims/ripple";
import Link from "next-intl/link";
import { motion, AnimatePresence } from "framer-motion";
import useSidebarItem from "./use";
import cls from "classnames";

const SidebarItem = ({
  href,
  icon: Icon,
  title,
  subs,
  label,
}: SidebarItemImpl) => {
  const { open, setOpen } = useSidebarItem();
  return (
    <>
      <div
        className="flex justify-start items-start flex-col w-full"
        key={title + href}
      >
        <Link className="w-full" href={href}>
          <Button
            onClick={() => setOpen(!open)}
            asChild
            className="w-full overflow-hidden relative flex justify-between items-center py-[22px]"
            variant="ghost"
          >
            <div className="w-full">
              <div className="flex justify-start items-center">
                <Icon variant="Bulk" size="20" className="opacity-60" />
                <span className="ms-3">{title}</span>
              </div>
              {label && (
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
                    { "rotate-90 rtl:-rotate-90 ": open }
                  )}
                />
              )}
              <RippleAnim />
            </div>
          </Button>
        </Link>
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
                      asChild
                      className="w-full overflow-hidden relative flex justify-start items-center py-3"
                      variant="ghost"
                    >
                      <div className="w-full">
                        <div className="w-[20px] h-full flex justify-center items-center">
                          <Button className="p-0 w-1 h-1 rounded-full"></Button>
                        </div>
                        <span className="ms-3">{title}</span>
                        <RippleAnim />
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default SidebarItem;
