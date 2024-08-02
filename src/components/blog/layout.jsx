/* eslint-disable react/prop-types */
// import NavBar from "../nav2";
// import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="content min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
