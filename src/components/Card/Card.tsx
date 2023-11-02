import Cardtop from "./Cardtop/Cardtop.tsx";

type CardProps = {
  author: string;
  date: string;
  title: string;
  text: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <Cardtop author={props.author} date={props.date}></Cardtop>
      <h3 className="left-push">{props.title}</h3>
      <p className="left-push">{props.text}</p>
      <a href="https://github.com/DavidJKH/ReactUke1" className="left-push">
        read more...
      </a>
    </div>
  );
}
