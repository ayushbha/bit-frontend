import React from "react";
import TopInfo from "./TopInfo"

const NavBar = () => (
    <nav>
        <TopInfo />
        <style jsx>{`
            nav {
                height: 60px;
                padding: 10px;
                margin: -8px;
                box-shadow: 0 4px 30px 0 rgba(144, 144, 144, 0.2);
                align-items: center;
                flex-wrap: wrap;
                display: flex;
                justify-content: space-between;
                flex: 1;
                position: relative;
            }
        `}</style>
    </nav>
)

export default NavBar;