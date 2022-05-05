// styles
import './footer.scss';

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer">
      <a href="#" className="footer__link">Mentions Légales</a>
      <a href="#" className="footer__link">Conditions générales d'utilisation</a>
      <a href="#" className="footer__link">Team</a>
      <p className="footer__copyright">Copyright {year}</p>
    </footer>
  );
}

export default Footer;
