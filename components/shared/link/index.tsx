import NextIntlLink from "next-intl/link";
import LinkImpl from "./types";

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
