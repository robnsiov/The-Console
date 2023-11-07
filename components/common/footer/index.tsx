import Button from "@/components/shared/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full text-center flex justify-center items-center flex-col">
        <Separator className="opacity-70" />
        <p className="p-4">
          <span className="text-sm opacity-70">Developed by</span>{" "}
          <Button variant="link" asChild className="p-0">
            <Link href={"https://github.com/robnsiov"} target="_blank">
              Robnsiov
            </Link>
          </Button>
        </p>
      </div>
    </>
  );
};
export default Footer;
