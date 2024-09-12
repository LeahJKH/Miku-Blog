/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import NetworkFail from "../../Api-responses/NetworkFail";

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
  const [apiError, setApiError] = useState(false);

  const apiUrl = "https://miku-api.vercel.app";

  const fetchData = async () => {
    try {
      let response = null;

      // Example: NetworkFailure
      response = await fetch(apiUrl);

      if (response.ok) {
        let randNum = Math.floor(Math.random() * 12)
        const picUrl = apiUrl + "/pfp/" + props.pic + randNum + `.webp`

        setNewPic(picUrl);
      } else {
        throw new Error(`Network request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiError(true);
    }
  };

  // Call fetchData when the component mounts
  useState(() => {
    fetchData();
  });

  if (apiError) {
    return <NetworkFail responseReceived={false} responseDamaged={false} missingData={false} />;
  } else {
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
}
