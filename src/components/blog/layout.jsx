/* eslint-disable react/prop-types */
import NavBar from "../nav2";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
