import React from "react";
import HeaderTitle from '../components/HeaderTitle';
import Nav from '../components/HeaderNav';

const Header = () => {
    return (
        <React.Fragment>
            <HeaderTitle />
            <Nav />
        </React.Fragment>
    )
}

export default Header;