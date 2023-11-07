import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
