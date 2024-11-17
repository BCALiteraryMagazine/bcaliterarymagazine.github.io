/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                //TODO: add semantic names
                colorone: "#B4D6CD",
                colortwo: "#FFDA76",
                colorthree: "#FF8C9E",
                colorfour: "#FF4E88"
            },
            fontFamily: {
                'ubuntu': 'Ubuntu',
                'agdasima': ['Agdasima', 'sans-serif']
            }
        },
    },
    plugins: [],
}

