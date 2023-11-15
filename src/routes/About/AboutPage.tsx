import "./AboutPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1 className="title-about">About me</h1>
        <div id="contain-about">
          <p>
            Greetings and welcome to my page! I am an aspiring young programmer, passionate about
            delving into the intricate world of coding to unravel its secrets and harness its
            creative potential. My journey into the realm of programming began with an insatiable
            curiosity and a desire to understand the inner workings of the digital landscape.
          </p>
          <p>
            One of my greatest loves is the art of programming itself. The thrill of solving complex
            problems, crafting elegant solutions, and bringing ideas to life through lines of code
            is both exhilarating and deeply satisfying. As I navigate the ever-evolving landscape of
            technology, I am constantly seeking new challenges to sharpen my skills and broaden my
            understanding.
          </p>
          <p>
            Beyond the world of programming, another passion of mine lies in the captivating
            universe of games. From the mesmerizing graphics to the intricate game mechanics, I find
            joy in exploring virtual worlds and understanding the craftsmanship behind creating
            immersive gaming experiences. Whether it's analyzing the algorithms that power game
            engines or experimenting with my own game development projects, I am driven by a
            boundless curiosity to uncover the magic behind the pixels.
          </p>
          <p>
            In addition to my programming pursuits and love for games, I have a special place in my
            heart for Miku, the virtual singing sensation. The fusion of technology and creativity
            that brings Miku to life fascinates me, and I admire the community's dedication to
            expanding her digital presence. Exploring the intersection of music, technology, and
            virtual artistry adds another layer of excitement to my diverse interests.
          </p>
          <p>
            Through this page, I aim to document my adventures in programming, share insights into
            the gaming world, and express my admiration for the unique blend of technology and
            creativity embodied by Miku. Join me on this exciting journey of learning, exploration,
            and innovation as I strive to contribute my skills to the ever-expanding landscape of
            technology and entertainment.
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default About;
