# EXE201_piooner_FE

    piooner-react-tailwind

# create react project with vitejs with yarn

# run app

    cd .\piooner-react-tailwind\

    npm install

    npm start

# install tailwind css

    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

# tailwind.config.js

    /** @type {import('tailwindcss').Config} \*/
    export default {
    content: [
    "./index.html",
    "./src/**/\*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

# index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

# deploy web
https://piooner-craft-uij8.vercel.app/
