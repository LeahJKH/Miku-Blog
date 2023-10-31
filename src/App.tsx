import "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Card from "./components/Card/Card.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>Miku blog</h1>
        <Searchbar></Searchbar>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
