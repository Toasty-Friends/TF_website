import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {
  faDiscord,
  faTiktok,
  faTwitter,
  faInstagram,
} from "../node_modules/@fortawesome/free-brands-svg-icons/index";
import Image from "../node_modules/next/image";

const Footer = () => {
  return (
    <div>
      <footer>
        As Seen On:
        <br />
        <br />
      <a href="https://nftcalendar.io/event/toasty-friends-mint/">
            <Image
              src="/styles/images/nft-calendar-logo-500x500.png"
              alt="logo"
              layout="fixed"
              width="55px"
              height="55px"
              className="nftCal"
            />
            <br/>
            <Image
              src="/styles/images/white logo V 350px.png"
              alt="logo"
              layout="fixed"
              width="300px"
              height="100px"
              className="nftCal"
            />
          </a>
        <div className="footer-links">
          <a href="https://discord.gg/EvCeZ3grnf">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://twitter.com/toasty_friends">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          
          {/* <a href="https://www.instagram.com/toasty_friends/">
          <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          {/* <a href="https://www.tiktok.com/@toasty_friends">
            <FontAwesomeIcon icon={faTiktok} />
          </a> */}
        </div>
        <p>2022 Toasty Friends&#169;</p>
      </footer>
    </div>
  );
};

export default Footer;
