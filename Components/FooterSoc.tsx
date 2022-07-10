import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faDiscord, faTiktok, faTwitter, faInstagram } from "../node_modules/@fortawesome/free-brands-svg-icons/index";
const Footer = () => {
  return (
    <div>
      <footer>
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
