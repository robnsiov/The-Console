import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";
import PagesContainer from "@/components/shared/containers/pages";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PagesContainer>{children}</PagesContainer>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default Layout;
