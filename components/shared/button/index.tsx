"use client";
import { Button as ShadButton } from "@/components/ui/button";
import { usePathname } from "next-intl/client";

const Button = (props: any) => {
  const pathname = usePathname();
  const attrs = { ...props };
  if (pathname === props.active || props.forceActive) {
    attrs.variant = "secondary";
  }
  delete attrs.forceActive;
  return (
    <>
      <ShadButton {...attrs} />
    </>
  );
};
export default Button;
