import React from "react";
import Header from "../components/Header";
import "../css/Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-body">
                <section className="w-full flex flex-col justify-around items-center">
                    <img src="/litmag_logo.png" alt="LitMag" className="block mx-auto"/>
                    <h2 className="text-lg">
                        BCA's Award Winning Literary Magazine
                    </h2>
                </section>
            </main>
        </>
    )
}

export default Home;