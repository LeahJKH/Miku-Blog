import "../../css/App.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa6b0d40-2aa9-4ee3-99bc-b590ac90c5c6/dg03y7x-233a18aa-1046-434e-9f3b-328a57330529.jpg/v1/fill/w_512,h_512,q_75,strp/hatsune_miku_pfp_by_d2thag23_dg03y7x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZmE2YjBkNDAtMmFhOS00ZWUzLTk5YmMtYjU5MGFjOTBjNWM2XC9kZzAzeTd4LTIzM2ExOGFhLTEwNDYtNDM0ZS05ZjNiLTMyOGE1NzMzMDUyOS5qcGciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yeDKfgA_HNAdsYKII85tClBGpDSaunDa5KyPG_vS-VI"
          alt=""
          id="profilePic"
        />
        <div>
          <a href="https://github.com/DavidJKH/ReactUke1" className="linksbtn">
            Github
          </a>
          <a
            href="https://www.figma.com/file/A6wYm5wYm9hTtqKBJtcE1y/react-uke-1?type=design&node-id=0-1&mode=design&t=uKJLeyHMQwuTxUHd-0"
            className="linksbtn"
          >
            {" "}
            figma
          </a>
        </div>
      </nav>
    </div>
  );
}
