import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to={"/"} className="navbar__logo">
        <Image src={"logo.png"} alt={"Memento"} w={32} h={32} />
        <span className="navbar__logo-title">memento.</span>
      </Link>
      {/* Menú responsivo */}
      <div className="navbar__movilMenu">
        {/* ícono de menú */}
        <div
          className="movilMenu__icon"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* ícono de menú | Hamburguesa */}
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
        {/* Enlaces */}
        <div className={`movilMenu__links ${open ? "-right-0" : "hidden"}`}>
          <Link to={"/"} className="movilMenu__links-text">
            Inicio
          </Link>
          <Link to={"/posts"} className="movilMenu__links-text">
            Nosotros
          </Link>
          <Link to={"/posts"} className="movilMenu__links-text">
            Tendencias
          </Link>
          <Link to={"/posts"} className="movilMenu__links-text">
            Más populares
          </Link>
          <Link to={"/login"} className="movilMenu__links-text">
            <button className="btn-primary">Acceder</button>
          </Link>
        </div>
      </div>
      {/* Menú escritorio */}
      <div className="navbar__desktopMenu">
        <Link to={"/"} className="navbar__desktopMenu-link">
          Inicio
        </Link>
        <Link to={"/posts"} className="navbar__desktopMenu-link">
          Nosotros
        </Link>
        <Link to={"/posts"} className="navbar__desktopMenu-link">
          Tendencias
        </Link>
        <Link to={"/posts"} className="navbar__desktopMenu-link">
          Más populares
        </Link>
        <SignedOut>
          <Link to={"/login"} className="navbar__desktopMenu-link">
            <button className="btn-primary">Acceder</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
