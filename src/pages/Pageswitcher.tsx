/*import { useState } from "react";
import Home from "./home";
import AboutPage from "./AboutPage";

export default function PageSwitcher() {
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
      {currentPage === "about" && <AboutPage />}
      {currentPage === "contact" && <AboutPage />}
    </div>
  );
}
*/
