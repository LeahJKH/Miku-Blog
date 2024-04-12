import "./LinkPage.css";

import { LinksInfo } from "../../data/LinksInfo";

function Links() {
  return (
    <div>
      <h1>Links too my socials</h1>

      {LinksInfo.map((link) => (
        <a className="linkWeb" key={link.name} href={link.Links}>
          {link.name}
        </a>
      ))}
      
    </div>
  );
}

export default Links;
