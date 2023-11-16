import { useState } from "react";

import Card from "../components/Card/Card.tsx";
import Searchbar from "../components/Searchbar/Searchbar.tsx";
import { cardInfo } from "../data/cardInfo.ts";
import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCards = cardInfo.filter((card) =>
    (card.text || card.textfull).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="cp-bobbler">
      <h1 id="title-page">Miku blog</h1>
      <Searchbar setSearchTerm={setSearchTerm}></Searchbar>
      {filteredCards.map((card) => (
        <Card key={card.title} {...card}></Card>
      ))}
    </div>
  );
}

export default Home;
