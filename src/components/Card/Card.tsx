import Cardtop from "./Cardtop/Cardtop.tsx";

type CardProps = {
  data: {
    author: string;
    date: string;
    title: string;
    text: string;
  };
};

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <Cardtop data={props}></Cardtop>
      <h3 className="left-push">{props.data.title}</h3>
      <p className="left-push">{props.data.text}</p>
      <a href="https://github.com/DavidJKH/ReactUke1" className="left-push">
        read more...
      </a>
    </div>
  );
}
