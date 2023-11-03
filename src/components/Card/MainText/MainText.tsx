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
  let switchK: boolean = true;
  const handleTxtGrowth = () => {
    if (switchK === true) {
      switchK = false;
    } else if (switchK === false) {
      switchK = true;
    }
  };
  if (switchK) {
    return (
      <div>
        <p>{data.data.data.text}</p>
        <button className="left-push coldbtn" onClick={handleTxtGrowth}>
          read more...
        </button>
      </div>
    );
  } else if (switchK === false) {
    return (
      <div>
        <p>{data.data.data.textfull}</p>
        <button className="left-push coldbtn" onClick={handleTxtGrowth}>
          read less...
        </button>
      </div>
    );
  }
}
