import { useState } from "react";

type CardProps = {
  author: string;
  date: string;
  title: string;
  text: string;
  textfull: string;
};

export default function MainText(prop: CardProps) {
  const [showMore, setMore] = useState(false);

  const toggleShowMore = () => {
    setMore(!showMore);
  };

  const displayMore = showMore ? prop.text + "" + prop.textfull : prop.text;
  return (
    <div>
      <p>{displayMore}</p>
      <button className="left-push coldbtn" onClick={toggleShowMore}>
        {showMore ? "Read less" : "Read more..."}
      </button>
    </div>
  );
}
