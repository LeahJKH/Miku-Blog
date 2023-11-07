import { useState } from "react";
type CardProps = {
  data: {
    data: {
      author: string;
      date: string;
      title: string;
      text: string;
      textfull: string;
    };
  };
};

export default function MainText(data: CardProps) {
  const [showMore, setMore] = useState(false);

  const toggleShowMore = () => {
    setMore(!showMore);
  };

  const displayMore = showMore
    ? data.data.data.text + "" + data.data.data.textfull
    : data.data.data.text;

  return (
    <div>
      <p>{displayMore}</p>
      <button className="left-push coldbtn" onClick={toggleShowMore}>
        {showMore ? "Read less" : "Read more..."}
      </button>
    </div>
  );
}
