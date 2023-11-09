import { useState } from "react";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Card from "./components/Card/Card.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";
import { cardInfo } from "./data/cardInfo.ts";
import "./css/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCards = cardInfo.filter((card) =>
    (card.text || card.textfull).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>Miku blog</h1>
        <Searchbar setSearchTerm={setSearchTerm}></Searchbar>
        {filteredCards.map((card) => (
          <Card key={card.title} {...card}></Card>
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
