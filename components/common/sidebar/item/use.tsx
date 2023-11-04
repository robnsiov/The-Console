import { useState } from "react";

const useSidebarItem = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
};
export default useSidebarItem;
