import { useContext } from "react";

import avatarImg from "../../assets/avatar.png";

import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

export default function Header(){
    const { user } = useContext(AuthContext);
    return(
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt="Foto do Usuário" />
            </div>
        </div>
    )
}