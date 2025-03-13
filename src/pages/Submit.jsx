import React, { useEffect } from "react";
import Header from "../components/Header";

//const SUBMISSION_FORM_URL = "https://forms.gle/dREqwzxDpw7th3yu6";
const SUBMISSION_FORM_URL = "";


const Submit = () => {

    // dont want auto redirects? remove the following statement
    // you can also just set location = SUBMISSION_FORM_URL
    // if you dont want to overwrite history
    
    
    // setTimeout(
    //     () => window.location.replace(SUBMISSION_FORM_URL),
    //     1000
    // )

    return (
        <>
            <Header />
            <main className="home-body">
                <div className={`border-colorthree border-2 text-colorfour
                    bg-colorone text-center w-1/4 mx-auto p-4 rounded-md`}>
                    <h2
                        className="text-3xl"
                    >
                        Submit to BCA LitMag
                    </h2>
                    <br />
                    <p className="">
                        Make sure to contribute to the upcoming Spring Edition!
                    </p>                    
                </div>
                {/* <p className="text-center italic block my-3">
                    Redirecting.......
                    <br /> <br />
                    Not automatically redirected? Click&nbsp;
                    <a
                        href={SUBMISSION_FORM_URL}
                        className="text-colorfour underline"
                    >
                        here
                    </a>.
                </p> */}
            </main>
        </>
    )
}

export default Submit;