/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
type CardProps = {
  author: string;
  date: string;
  title: string;
  text: string;
  textfull: string;
  likes: number;
  pic: string;
};

export default function Cardtop(props: CardProps) {
  const [textColor, setTextColor] = useState("white");
  const [like, setLikeCounter] = useState(props.likes);

  const handleLikeChange = () => {
    const newLike = like === props.likes ? like + 1 : like - 1;
    setLikeCounter(newLike);
  };

  const handleColorChange = () => {
    const newColor = textColor === "white" ? "red" : "white";
    setTextColor(newColor);
  };
  const styles = {
    content: {
      color: "white",
    },
  };

  const [newPic, setNewPic] = useState("");

  useEffect(() => {
    const apiUrl = "https://placekitten.com/";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const picUrl = apiUrl + props.pic;
          setNewPic(picUrl);
        } else {
          throw new Error("Request failed with status code: " + response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.pic]);

  return (
    <div className="row card-top">
      <div className="row">
        <img src={newPic} alt="the users profile pic" className="Img" />

        <div className="column card-user">
          <h3>{props.author}</h3>
          <p>{props.date}</p>
        </div>
      </div>
      <button
        onClick={(_e: React.MouseEvent<HTMLButtonElement>) => {
          handleColorChange();
          handleLikeChange();
        }}
        className="butt"
      >
        <span id="content" style={{ ...styles.content, color: textColor }}>
          ❤
        </span>
        {" " + like}
      </button>
    </div>
  );
}
