export default function Cardtop(props) {
  return (
    <div className="row card-top">
      <div className="row">
        <img
          src="https://www.martela.com/sites/default/files/styles/metaproduct/public/pim2022_files/MU43_light_grey_melamine_fullHD.jpeg?itok=AwEXbLz1"
          alt="a grey temp photo for a user"
          className="Img"
        />
        <div className="column card-user">
          <h3>{props.author}</h3>
          <p>{props.date}</p>
        </div>
      </div>
      <button>❤ 2056</button>
    </div>
  );
}
