/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
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

  useEffect() => {
    const apiUrl = "https://placekitten.com/";

    const fetchData = async () => {
      try {
        let response = null

        
NetworkFailure()
        
          function NetworkFailure() {
            response = await fetch("invalid-url");
           
          }
          function DamagedResponse() {
            response = await fetch(apiUrl + "invalid-pic");
         
          }
           function MissingData() {
            response = await fetch(apiUrl);
      
          }
           function SuccessfulResponse() {
            response = await fetch(apiUrl + props.pic);
        
          }
          function normal() {
            response = await fetch(apiUrl + props.pic);
          }
        }
      catch {
        if (response.ok) {
          const picUrl = apiUrl + props.pic;
          setNewPic(picUrl);
        } else {
          throw new Error(`Network request failed with status ${response.status}`);
        }
      } 
    }
      catchit(response.error)
      function catchit(error: null) {
        console.error("Error fetching data:", error);
        setApiError(true);
      }
    };

    fetchData();
  }, [props.pic];;

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
