import React from "react";
import { Link } from "react-router-dom";
// import "../css/header.css";
import pagesData from "../router/pagesData";

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center px-10 py-5 box-border bg-colorthree text-black">
            <Link to="/">
                <img src="litmag_logo.png" alt="Litmag" height={100} width={100}/>
            </Link>
            <nav>
                <ul className="flex flex-row justify-between items-center list-none">
                    {
                        pagesData.map((pData, index) => {
                            return pData.showOnHeader && (
                                <li className="mx-4 text-lg" key={index}>
                                    {/* if a specific header title is specified, use that, otherwise use the title */}
                                    <Link to={pData.path}>{pData.headerTitle ?? pData.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;