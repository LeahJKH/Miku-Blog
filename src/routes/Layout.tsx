import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <main id="center">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
