import "../assets/styles.css";
import googlePlay from "../assets/images/google_play_app_store.png";
import appleStore from "../assets/images/ios_app_store.png";


const Footer = () => {
  return (
    <div className="footer_container">
      <p>
        To view the complete range of Etisalat offers and services, please
        download the My Etisalat UAE <br /> app or visit{" "}
        <a
          href="https://www.etisalat.ae/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.etisalat.ae.
        </a>
      </p>
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=com.Etisalat.ETIDA&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={googlePlay} alt="Google Play" />
        </a>
        <a
          href="https://apps.apple.com/ae/app/my-etisalat-uae/id866147547"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appleStore} alt="Apple Store" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
