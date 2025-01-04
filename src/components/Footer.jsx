import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 게시판 앱. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
