import React from "react";
import Header from "../components/Header";
import "../css/Editions.css";

const editions = [  
    {
        year: "2024-2025",
        links: [
            { title: "Spring 2025", url: "https://drive.google.com/file/d/1VHhlAMlQxwxXABwAMAmW-B8uNpn9ao-t/view" },
            { title: "Winter 2025", url: "https://drive.google.com/file/d/1Rs95J8YZ3tq2qv1T48VJLkucaWXubTqj/view" },
            { title: "Valentine's Day 2025", url: "https://drive.google.com/file/d/1F5YryuHXI8bM_rpWPZFEEC_j8AZWOPas/view" },
            { title: "Fall 2024", url: "https://drive.google.com/file/d/1kszinANkNQPiY8bNME7JyET1eKdSEuyq/view" },
        ],
        colors: {
            background: "#DDD0E4 ",
            title: "#5e548e   ",
            button: "#b79ced ",
        },
    },
    
    {
        year: "2023-2024",
        links: [
            { title: "Spring 2024", url: "https://drive.google.com/file/d/1Io_nddS3cICcOer4826kFiYp2jW95Jk6/view" },
            { title: "Winter 2024", url: "https://drive.google.com/file/d/1wGEUr_o_EA0T8JthFSp5uysnAcLVJiFQ/view" },
            { title: "Valentine's Day 2024", url: "https://drive.google.com/file/d/1D49aNLGlkyT3tC4MZicgXJhlrVEug9bq/view" },
            { title: "Fall 2023", url: "https://drive.google.com/file/d/1pgsEEOhif1iFNU1T_Lqr38jYeSqimhnn/view" },
        ],
        colors: {
            background: "#ffcad4",
            title: "#FF8C9E",
            button: "#FF4E88",
        },
    },
    {
        year: "2022-2023",
        links: [
            { title: "Fall 2022", url: "https://drive.google.com/file/d/1kpV-4kt4xzaIBLgvF38PZIerVn2fpwny/view" },
            { title: "Valentine's Day 2023", url: "https://drive.google.com/file/d/1x7k6j4XkIAnBOe-k2TV7yw1nZ3EcxUis/view" },
            { title: "Winter 2023", url: "https://drive.google.com/file/d/15OrWoZJHtPGpxIVmMJ-9HYvz6chBrCXO/view" },
        ],
        colors: {
            background: "#B4D6CD",
            title: "#4B8F88",
            button: "#00796B",
        },
    },
    {
        year: "2021-2022",
        links: [
            { title: "Fall 2021", url: "https://drive.google.com/file/d/1Moiw7XAgwvWu6ap9L0P9yxaPJZt161d5/view" },
            { title: "Winter 2022", url: "https://drive.google.com/file/d/1SEgey8POfa2CumEy6pqvy-SfDZu1R84T/view" },
            { title: "Spring 2022", url: "https://drive.google.com/file/d/1ulJah2eBzPwDyiRgtMF1FWhPm28dV1Dr/view" },
        ],
        colors: {
            background: "#D6A4A4",
            title: "#8E4444",
            button: "#E63946",
        },
    },
    {
        year: "2020-2021",
        links: [
            { title: "Fall 2020", url: "https://drive.google.com/file/d/1Bo9h0snKlN_LzQrRyf9Lp8rMtu23eBk3/view" },
            { title: "Winter 2021", url: "https://drive.google.com/file/d/1Q3WL2-rvkEGx0WpmUb4FzTdYRXBKZzSV/view" },
            { title: "Spring 2021", url: "https://drive.google.com/file/d/1gM_eAgl36KdN23BtlNpXKE44y4pnfYV_/view" },
            { title: "Summer 2021", url: "https://drive.google.com/file/d/1l2GNWbrInNaA-503f1_LIlfbr2_6RELv/view" },
            { title: "Compilation 2021", url: "https://drive.google.com/file/d/1AD7skBgOXvfzKEbD_822DpZgIZ3W8Xcf/view" },
        ],
        colors: {
            background: "#FAD3A5",
            title: "#CD853F",
            button: "#8B4513",
        },
    },
];

const Editions = () => {
    return (
        <>
            <Header />
            <main className="editions-body">
                <h1 className="editions-title">PAST EDITIONS</h1>
                <div className="editions-grid">
                    {editions.map((editionGroup, index) => (
                        <div
                            key={index}
                            className="editions-card"
                            style={{ backgroundColor: editionGroup.colors.background }}
                        >
                            <h2
                                className="editions-year"
                                style={{ color: editionGroup.colors.title }}
                            >
                                {editionGroup.year}
                            </h2>
                            <ul className="editions-list">
                                {editionGroup.links.map((link, idx) => (
                                    <li key={idx} className="editions-item">
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="edition-button"
                                            style={{ backgroundColor: editionGroup.colors.button }}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Editions;
