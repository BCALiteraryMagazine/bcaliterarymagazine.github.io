import React from "react";
import Header from "../components/Header";
import "../css/Home.css";
import editionCover from "../assets/fall2025_cover-1.png"

// Change to reflect newest edition name + URL
const editionURL = "https://drive.google.com/file/d/1a7qZysW7XhovUOx3sk5jRUXprDrxh815/view";
const editionName = "Crow";

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-body">
                <section className="w-full flex flex-col justify-around items-center">
                    <h1 className="font-extrabold text-4xl">
                        LITMAG
                    </h1>
                    <img src="/litmag_logo.png" alt="LitMag" className="block mx-auto my-10" height={200} width={200}/>
                    <h2 className="text-colorthree font-extrabold font-ubuntu text-2xl">
                        <br/>
                        BCA's Award Winning Literary Magazine
                    </h2>

                    <div className="call-to-action py-8 mt-24 w-full bg-colorone flex flex-row items-center justify-between">
                        <div className="h-52 flex flex-col justify-between items-center w-full border-0 border-red-500">
                            <h3 className="text-4xl font-semibold font-agdasima">
                                NEW! Fall Edition "{editionName}" Out Now!
                            </h3>

                            <p className="text-lg mt-4">
                                Our Fall Edition, "{editionName}", is out now! Click below to read it!
                            </p>

                            <a
                                className="mt-2 block border-2 border-black bg-colorone font-bold p-3 hover:scale-95 transition-all duration-150"
                                href={editionURL}
                                target="_blank" rel="noreferrer"
                            >
                                Click to Read Now!
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full border-l-2 border-black">
                            <img src={editionCover} alt="Litmag Cover" className="w-1/4"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;