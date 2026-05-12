// named export: instead of exporting component or variable through writing export default Component_Name we use named exprt in which we can write export before any component or variable.
// we use named export when we have to export multiple things from same file: otherwise we use export default component_name
export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <img
                className="swiggyLogo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/burlgr826rdbqr4lrtjm"
                />
            </div>
            <div className="items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
