import React, { useEffect } from "react";
import Header from "../components/Header";

const SUBMISSION_FORM_URL = "https://forms.gle/dREqwzxDpw7th3yu6";

const Submit = () => {

    // dont want auto redirects? remove the next line
    // you can also just set location = SUBMISSION_FORM_URL
    // if you dont want to overwrite history
    window.location.replace(SUBMISSION_FORM_URL);

    return (
        <>
            <Header />
            <main className="home-body">
                <h2>Submit to BCA LitMag</h2>
                <p>Contribute to the Valentine's Day Edition</p>
            </main>
        </>
    )
}

export default Submit;