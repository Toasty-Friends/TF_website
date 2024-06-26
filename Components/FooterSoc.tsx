import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {
  faDiscord,
  faTwitter,
} from "../node_modules/@fortawesome/free-brands-svg-icons/index";

const Footer = () => {
  return (
    <>
        <div className="footer-links">
          <a href="https://discord.gg/EvCeZ3grnf">
            <FontAwesomeIcon icon={faDiscord} title="Discord" />
          </a>
          <a href="https://twitter.com/toasty_friends">
            <FontAwesomeIcon icon={faTwitter} title="Twitter" />
          </a>
          {/* <a href="https://www.instagram.com/toasty_friends/">
          <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          {/* <a href="https://www.tiktok.com/@toasty_friends">
            <FontAwesomeIcon icon={faTiktok} />
          </a> */}
        </div>
        <p>2022 Toasty Friends&#169;</p>
    </>
  );
};

export default Footer;
