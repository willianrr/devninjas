import logo from "../img/logo-devninjas.png";
import React from "react";

const ListMenu = () => (
<div className="menu">
    <img className="logo" src={logo} alt="logo"/>
    <div className="menu-list">
        <ul className="list-inline">
            <li className="list-inline-item">Home</li>
            <li className="list-inline-item">Serviços</li>
            <li className="list-inline-item">Desenvolvimento de Projetos</li>
            <li className="list-inline-item">Orçamento</li>
        </ul>
    </div>
</div>
);
export default ListMenu;