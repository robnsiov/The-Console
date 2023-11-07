import NextIntlLink from "next-intl/link";
import LinkImpl from "./types";
import p from "@/app/[locale]/profile/page";

const Link = (props: LinkImpl) => {
  const attr = { ...props };
  delete attr.children;
  if (!attr.locale) delete attr.locale;
  return (
    <>
      <NextIntlLink {...attr}>{props.children}</NextIntlLink>
    </>
  );
};
export default Link;
