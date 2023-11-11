import Button from "@/components/shared/button";
import { Badge } from "@/components/ui/badge";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="w-full me-6 xl:me-0 xl:mb-8">
        <Badge
          variant="secondary"
          className="w-full h-full flex font-medium text-base  p-[40px]  justify-between items-center
          rounded-2xl sm:flex-col sm:text-center"
        >
          <div
            className="w-[50%] flex justify-start sm:w-full
           items-start flex-col sm:justify-center sm:items-center"
          >
            <CardTitle className="text-2xl">
              Welcome back 👋 Jaydon Frankie
            </CardTitle>
            <CardDescription className="text-base my-8 sm:my-4">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn&apos;t anything.
            </CardDescription>
            <Button>Go Now</Button>
          </div>
          <div className="ms-3 w-[250px] h-[230px]">
            <Image
              src={"/images/auth.png"}
              alt="banner-image"
              width="400"
              height="400"
            />
          </div>
        </Badge>
      </div>
    </>
  );
};
export default Banner;
