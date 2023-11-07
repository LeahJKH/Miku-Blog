import { useState } from "react";
import Home from "./home";
import Fourohfour from "./fourogfour";

function PageSwitcher() {
  const [currentPage, setCurrentPage] = useState("home"); // Initial page

  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };

  return (
    <div>
      <button onClick={() => handlePageChange("home")}>Home</button>
      <button onClick={() => handlePageChange("about")}>About</button>
      <button onClick={() => handlePageChange("contact")}>Contact</button>

      {currentPage === "home" && <Home />}
      {currentPage === "about" && <Fourohfour />}
      {currentPage === "contact" && <Fourohfour />}
    </div>
  );
}

export default PageSwitcher;
