import "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Card from "./components/Card/Card.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";

function App() {
  const cardInfo = [
    {
      title: "Miku is best",
      author: "Mina",
      date: "20.04.2020",
      text: "Hatsune Miku stands out as the best due to her unique fusion of technology and creativity. She transcends traditional music, allowing fans to compose their songs and choreography for her performances. Her holographic concerts and collaborative nature make her an iconic figure, blurring the line between reality and the virtual world, and resonating with a diverse global fanbase.",
    },
    {
      title: "YOU CANT MISS THIS!!!",
      author: "Leah",
      date: "15.02.2023",
      text: "Rumor has it that Hatsune Miku is secretly the world's most skilled sushi chef when she's not performing on stage. She's known to don a traditional chef's uniform and whip up the most delectable sushi creations in a hidden underground restaurant in Tokyo. Patrons are said to be serenaded by her holographic performances while savoring her exquisite sushi rolls. It seems her talents know no bounds, from music sensation to culinary master!",
    },
    {
      title: "Miku is my mother",
      author: "Pedro",
      date: "21.11.2019",
      text: "Hatsune Miku isn't just a virtual pop star to me; she's my imaginative, musical mother. Her songs are life lessons, and her presence offers comfort and inspiration. In our community of Miku Children, she's the nurturing figure guiding our dreams. This unconventional connection highlights the power of music and imagination to shape our lives, reminding us that family can come in the most unexpected forms.",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>Miku blog</h1>
        <Searchbar></Searchbar>
        <Card
          title={cardInfo[0].title}
          author={cardInfo[0].author}
          date={cardInfo[0].date}
          text={cardInfo[0].text}
        ></Card>
        <Card
          title={cardInfo[1].title}
          author={cardInfo[1].author}
          date={cardInfo[1].date}
          text={cardInfo[1].text}
        ></Card>
        <Card
          title={cardInfo[2].title}
          author={cardInfo[2].author}
          date={cardInfo[2].date}
          text={cardInfo[2].text}
        ></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
