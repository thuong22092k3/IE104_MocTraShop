import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;