import React, { useState, useEffect } from "react";
import "./UserDetails.css";

const UserDetails = ({user}) => {

  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagen"
          src={user.image}
          alt={`avatar de ${user.name}`}
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <h2 className="nacionalidad">{user.status}</h2>
      <h3 className="especies">{user.species}</h3>

    </div>
  );
};

export default UserDetails;