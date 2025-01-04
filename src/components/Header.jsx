import { Link } from "react-router-dom";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <Button label="게시판 홈" variant="secondary" />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/create">
          <Button label="글 작성" variant="primary" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
