import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
    return (
        <header id="header">
            <img src={logo} alt="Logo with Money bank" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header;