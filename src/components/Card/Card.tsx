import Cardtop from "./Cardtop/Cardtop.tsx";
import MainText from "./MainText/MainText.tsx";

type CardProps = {
  author: string;
  date: string;
  title: string;
  text: string;
  textfull: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <Cardtop {...props} />
      <h3 className="left-push">{props.title}</h3>
      <MainText {...props} />
    </div>
  );
}
