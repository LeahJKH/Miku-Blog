import Cardtop from "./Cardtop/Cardtop.tsx";

export default function Card(props) {
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
