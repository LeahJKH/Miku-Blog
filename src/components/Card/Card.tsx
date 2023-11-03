import Cardtop from "./Cardtop/Cardtop.tsx";
import MainText from "./MainText/MainText.tsx";

type CardProps = {
  data: {
    author: string;
    date: string;
    title: string;
    text: string;
    textfull: string;
  };
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <Cardtop data={props}></Cardtop>
      <h3 className="left-push">{props.data.title}</h3>
      <MainText data={props}></MainText>
    </div>
  );
}
