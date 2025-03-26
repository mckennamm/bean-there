import './Header.css';



function Header() {

    return (
        <header className="header-section">
            <nav className="header-nav">
                <ul className="header-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/add-review">Add a Review</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/profile">Coffe Shop Profiles</a></li>
                </ul>
            </nav>
        </header>
    )


}

export default Header;