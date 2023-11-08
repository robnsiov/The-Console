"use client";
import { Input as ShadInput } from "@/components/ui/input";
import InputImpl from "./types";
import cls from "classnames";
import { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeSlash } from "iconsax-react";
import useInput from "./use";

const Input = forwardRef<HTMLInputElement, InputImpl>(function Input(
  { className, error, container, type, ...props }: InputImpl,
  ref
) {
  const { toggleType, inpType } = useInput(type || "text");
  return (
    <>
      <div
        className={cls(
          "w-full flex justify-start items-start flex-col",
          container
        )}
      >
        <div className="w-full relative">
          <ShadInput
            ref={ref}
            {...props}
            type={inpType}
            className={cls(className, {
              "border-red-400 !ring-red-400": error,
              "pe-8": type === "password",
            })}
          />
          {type === "password" && (
            <div
              onClick={toggleType}
              className="absolute top-1/2 -translate-y-1/2 right-2 rtl:right-auto rtl:left-2 cursor-pointer"
            >
              {inpType === "password" && <Eye size="16" />}
              {inpType === "text" && <EyeSlash size="16" />}
            </div>
          )}
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              className="text-sm mt-1 text-red-400"
              exit={{ height: 0 }}
              key={"container"}
            >
              <span className="text-red-400 text-[12px]">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
});
export default Input;
