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
# image web
![image](https://github.com/user-attachments/assets/9da2e83b-c543-4f2c-974e-86102f6b2a21)


# deploy web
https://exe-201-piooner-fe.vercel.app/
