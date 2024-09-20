import logo from "/logo.jpg";
import "./Footer.css";

const Footer = () => {
  const emailLink =
    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzDCwcnLsnbVNPTjGhthQDPNjlxZbXxZlGlPjkdRRMQttwLVCwGtmpSCgcstbNNvvNWGMJH";

  return (
    <div className="footer">
      <img src={logo} alt="szÉPfogak" />
      <div className="footer__info">
        <h2>Magyar Ildikó</h2>
        <p>Fogászati Klinikai higiénikus</p>
        <p>06-30/355-8913</p>
        <a href={emailLink}>hun.ildiko@gmail.com</a>
        <p>Érd Szabadság tér 9</p>
        <small>(legfelső emelet)</small>
      </div>
    </div>
  );
};

export default Footer;
