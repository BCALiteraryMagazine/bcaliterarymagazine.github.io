import React from "react";
import Header from "../components/Header";
import "../css/Awards.css";

const awardsByYear = {
    "2023": [
        { title: "Rank of Merit | NCTE Realm", organization: "National Council of Teachers of English (NCTE)" },
        { title: "1st Place Award Literary Magazine", organization: "American Scholastic Press Association" },
    ],
    "2022": [
        { title: "1st Place Award Literary Magazine", organization: "American Scholastic Press Association" },
    ],
    "2021": [
        { title: "Rank of Merit | NCTE Realm", organization: "National Council of Teachers of English (NCTE)" },
        { title: "Outstanding Photography", organization: "American Scholastic Press Association" },
    ],
};

const Awards = () => {
    return (
        <>
            <Header />
            <main className="awards-body">
                <h1 className="awards-title">HONORS & AWARDS</h1>
                <div className="awards-grid">
                    {Object.entries(awardsByYear).map(([year, awards]) => (
                        <div key={year} className="awards-section">
                            <h2 className="awards-year">{year}</h2>
                            <ul className="awards-list">
                                {awards.map((award, index) => (
                                    <li key={index} className="awards-item">
                                        <h3 className="award-title">{award.title}</h3>
                                        <p className="award-organization">{award.organization}</p>
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

export default Awards;