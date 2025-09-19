import React from "react";
import Header from "../components/Header";
import "../css/Staff.css";

// Importing staff photos
import SafinahM from "../assets/SafinahM_LM.png";
import EmilyA from "../assets/EmilyA_LM.png";
import EuniceC from "../assets/EuniceC_LM.png";
import VarshaT from "../assets/VarshaT_LM.png";
import CaraK from "../assets/CaraK_LM.png";
import WillowY from "../assets/WillowY_LM.png";
import ShreyaT from "../assets/ShreyaT_LM.png";
import MsVillanova from "../assets/MsVillanova_LM.png";


const Staff = () => {
    const members = [
        { name: "Safinah Munshi", role: "Senior Editor-In-Chief", photo: SafinahM },
        { name: "Emily Amoss", role: "Junior Co-Editor-In-Chief", photo: EmilyA },
        { name: "Eunice Cho", role: "Junior Co-Editor-In-Chief", photo: EuniceC },
        { name: "Varsha Tyagi", role: "Head of Editorial", photo: VarshaT },
        { name: "Cara Ko", role: "Head of Design", photo: CaraK },
        { name: "Willow Yoo", role: "Head of Communications and Social Media", photo: WillowY },
        { name: "Shreya Thirumala", role: "Head of Web Design", photo: ShreyaT },
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
