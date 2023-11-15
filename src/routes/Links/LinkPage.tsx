import "./LinkPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { LinksInfo } from "../../data/LinksInfo";

function Links() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        {LinksInfo.map((link) => (
          <a key={link.name} href={link.Links}>
            {link.name}
          </a>
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Links;
