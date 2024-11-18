import React from "react";
import Header from "../components/Header";
import "../css/Staff.css";

// Importing staff photos
import CelineP from "../assets/CelineP_LM.png";
import ChloeS from "../assets/ChloeS_LM.png";
import EuniceC from "../assets/EuniceC_LM.png";
import EylulO from "../assets/EylulO_LM.png";
import KirstenM from "../assets/KirstenM_LM.png";
import MsVillanova from "../assets/MsVillanova_LM.png";
import SafinahM from "../assets/SafinahM_LM.png";
import ShreyaT from "../assets/ShreyaT_LM.png";
import WillowY from "../assets/WillowY_LM.png";

const Staff = () => {
    const members = [
        { name: "Eylul Oktay", role: "Editor-In-Chief", photo: EylulO },
        { name: "Safinah Munshi", role: "Editor-In-Chief", photo: SafinahM },
        { name: "Kirsten Marcelin", role: "Head of Editorial", photo: KirstenM },
        { name: "Chloe Song", role: "Head of Communications", photo: ChloeS },
        { name: "Celine Park", role: "Head of Design", photo: CelineP },
        { name: "Shreya Thirumala", role: "Head of Web Design", photo: ShreyaT },
        { name: "Willow Yoo", role: "Social Media Manager", photo: WillowY },
        { name: "Eunice Cho", role: "Social Media Manager", photo: EuniceC },
        { name: "Ms. Villanova", role: "Club Advisor", photo: MsVillanova },
        
    ];

    return (
        <>
            <Header />
            <main className="staff-body">
                <h1 className="staff-title">MEET THE TEAM</h1>
                <section className="staff-grid">
                    {members.map((member, index) => (
                        <div className="staff-card" key={index}>
                            <img
                                src={member.photo}
                                alt={`${member.name}`}
                                className="staff-photo"
                            />
                            <h2 className="staff-name">{member.name}</h2>
                            <p className="staff-role">{member.role}</p>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Staff;
