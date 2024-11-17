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

                    {/* TODO: Comment out if no new edition. Change URL to point to latest edition */}
                    <div className="call-to-action mt-4">
                        NEW! Fall Edition Out!
                        <a
                            className="mt-2 block border-2 border-black bg-colorone font-bold p-3 hover:scale-95 transition-all duration-150"
                            href="https://drive.google.com/file/d/1SKPtVtFQBr6KqNrX_HzOx7EIaUrZl81s/view?usp=sharing"
                        >
                            Click to Read Now!
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;