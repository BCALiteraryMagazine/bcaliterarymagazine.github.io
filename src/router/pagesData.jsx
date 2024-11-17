import React from 'react';
import About from "../pages/About";
import Home from "../pages/Home";
import Awards from '../pages/Awards';
import Editions from '../pages/Editions';
import Submit from '../pages/Submit';

const pagesData = [
    {
        path: "/",
        element: <Home />,
        title: "Home",
        showOnHeader: true
    },
    {
        path: "/about",
        element: <About />,
        title: "About Us",
        headerTitle: "About",
        showOnHeader: true
    },
    {
        path: "/awards",
        element: <Awards />,
        title: "Awards",
        headerTitle: "Awards",
        showOnHeader: true
    },
    {
        path: "/past-editions",
        element: <Editions />,
        title: "LitMag Past Editions",
        headerTitle: "Editions",
        showOnHeader: true
    },
    {
        path: "/submit",
        element: <Submit />,
        title: "Submit to LitMag",
        showOnHeader: true
    },
    {
        path: "*",
        element: <Home />,
        title: "home"
    }
];

export default pagesData;
