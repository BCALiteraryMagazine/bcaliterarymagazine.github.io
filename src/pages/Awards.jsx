import React from "react";
import Header from "../components/Header";
import "../css/Awards.css";

const awards = [
    { year: "2021", title: "Rank of Merit | NCTE Realm", organization: "National Council of Teachers of English (NCTE)" },
    { year: "2021", title: "Outstanding Photography", organization: "American Scholastic Press Association" },
    { year: "2022", title: "1st Place Award Literary Magazine", organization: "American Scholastic Press Association" },
    
];


const Awards = () => {
    return (
        <>
            <Header />
            <main className="awards-body">
                <h1 className="awards-title">HONORS AND AWARDS</h1>
                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div key={index} className="award-card">
                            <h2 className="award-year">{award.year}</h2>
                            <h3 className="award-title">{award.title}</h3>
                            <p className="award-organization">{award.organization}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Awards;