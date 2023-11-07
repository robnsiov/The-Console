import { useHotkeys } from "@mantine/hooks";
import { useState } from "react";

const useSearch = () => {
  const [open, setOpen] = useState(false);
  useHotkeys([["ctrl+K", () => setOpen(true)]]);

  return { open, setOpen };
};
export default useSearch;
