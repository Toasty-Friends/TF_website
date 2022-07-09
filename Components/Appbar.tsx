import Link from "../node_modules/next/link";
import React from "react";
import Image from "../node_modules/next/image";

const Header = () => {
  //   const toggleMenu = (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //     const menu = document.getElementById("mobileNavContainer")!;
  //     menu.classList.toggle("open-menu");
  //     console.log("pressed");
  //   };

  const [state, setState] = React.useState({
    open: false,
  });

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="topnav" id="myTopnav">
            <div className="logo-image">
              <Link href="/">
                <a>
                  <Image
                    src="styles/images/ToastyLogo.jpg"
                    alt="logo"
                    layout="fill"
                    objectFit="cover"
                    
                  />
                </a>
              </Link>
            </div>
            <div className="nav-links">
              <Link href="/Team">Team</Link>
              <Link href={"/#Roadmap"}>Roadmap</Link>
              {/* <Link href="/Clubhouse">Clubhouse</Link> */}
              {/* <a href="javascript:void(0)" className="icon" onClick={toggleMenu}>
              <i className="fa fa-bars"></i>
            </a> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
