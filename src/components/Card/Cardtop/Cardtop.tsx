/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
type CardProps = {
  author: string;
  date: string;
  title: string;
  text: string;
  textfull: string;
  likes: number;
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
  return (
    <div className="row card-top">
      <div className="row">
        <img
          src="https://www.martela.com/sites/default/files/styles/metaproduct/public/pim2022_files/MU43_light_grey_melamine_fullHD.jpeg?itok=AwEXbLz1"
          alt="a grey temp photo for a user"
          className="Img"
        />

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
