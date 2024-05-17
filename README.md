# EXE201_piooner_FE

    piooner-react-tailwind

# create react project with vitejs with yarn

    yarn create vite

# run app

    cd piooner-react-tailwind-crash
    yarn
    yarn dev

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
