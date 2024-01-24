import { Link } from "react-router-dom";
import iconValorant from "../../img/icon-valorant.png";
import "../Header/header.css";

export default function Header() {
  return (
    <div id="header">
      <Link to="/">
        <img src={iconValorant} alt="icone do valorant" />
      </Link>
      <h1>agents</h1>
    </div>
  );
}
