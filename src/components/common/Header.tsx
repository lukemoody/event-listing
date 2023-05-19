import { Link } from 'react-router-dom';

const Header = () => (
    <header className="site-header container">
        <Link to="/">
            <img
                className="site-header__logo"
                src="/logo.png"
                alt="Skiddle"
            />
        </Link>
    </header>
);

export default Header;
