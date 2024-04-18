import React from "react";
// import avatarJessica from "../public/avatar-jessica.jpeg"
import UserDetails from "./UserDetails";
import "./Card.css";

function Card({user}) {
  return (
    <div className="contenedorDinamico">
        <UserDetails user = {user}/>
    </div>
  )
}

export default Card;