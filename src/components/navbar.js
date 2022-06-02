import React from 'react';
import { Link } from 'react-router-dom';



const NavbarComponent = () => {
    return (
        <nav className="flex bg-slate-800 h-16">
            <div className="w-2/3 flex">
                <div className="w-1/3 flex justify-center items-center text-white">LOGO</div>
                <div className="w-2/3 flex p-2">
                    <input className="flex-1 rounded-lg p-4" type="text" placeholder="Rechercher" />
                </div>
            </div>
            <div className="w-1/3 flex">
                <Link className="w-1/3 flex justify-center items-center text-white hover:bg-slate-500" to="/">ACCUEIL</Link>
                <div className="w-1/3 flex justify-center items-center text-white hover:bg-slate-500">GROUPES</div>
                <Link to="/profile" className="w-1/3 flex justify-center items-center text-white hover:bg-slate-500">MON PROFIL</Link>
            </div>
        </nav>
    )
};

export default NavbarComponent;